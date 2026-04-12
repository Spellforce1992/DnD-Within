import { chromium } from 'playwright';

const BASE = 'http://localhost:8765/';
const ROUTES = [
  '#/home','#/party','#/characters','#/timeline','#/maps','#/lore','#/notes','#/dm','#/dm/npcs',
  '#/dm/initiative','#/dm/whispers','#/settings','#/characters/ren','#/characters/ren/combat',
  '#/characters/ren/spells','#/characters/ren/inventory','#/characters/ren/features','#/characters/ren/story'
];

const errors = [];
const warnings = [];
const results = [];

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
const page = await ctx.newPage();

page.on('console', m => {
  const t = m.type();
  const text = `[${m.location().url.split('/').pop()}] ${m.text()}`;
  if (t === 'error') errors.push(text);
  if (t === 'warning') warnings.push(text);
});
page.on('pageerror', e => errors.push(`PAGEERROR: ${e.message}`));
page.on('requestfailed', r => errors.push(`REQFAIL: ${r.url()} — ${r.failure()?.errorText}`));

console.log('Loading root...');
await page.goto(BASE, { waitUntil: 'networkidle', timeout: 15000 }).catch(e => errors.push('GOTO: '+e.message));
await page.waitForTimeout(1500);

// Probeer admin login als er een login form is
const hasLogin = await page.locator('input[type="password"]').count();
if (hasLogin > 0) {
  console.log('Login form present — trying admin/admin...');
  try {
    await page.fill('#login-username', 'admin');
    await page.fill('#login-password', 'admin');
    await page.click('.login-submit');
    await page.waitForTimeout(3000);
    const loginErr = await page.locator('#login-error').textContent().catch(()=>null);
    if (loginErr) errors.push('LOGIN-MSG: '+loginErr);
  } catch (e) { errors.push('LOGIN: '+e.message); }
}

for (const r of ROUTES) {
  const routeErrors = [];
  const before = errors.length;
  try {
    await page.goto(BASE + r, { waitUntil: 'domcontentloaded', timeout: 8000 });
    await page.waitForTimeout(700);
    const title = await page.title();
    const h1 = await page.locator('h1,h2').first().textContent().catch(()=>null);
    const bodyText = (await page.locator('body').textContent()).slice(0,120).replace(/\s+/g,' ');
    results.push({ route: r, ok: errors.length === before, title, h1, preview: bodyText });
  } catch (e) {
    results.push({ route: r, ok: false, error: e.message });
  }
}

// Test level-up modal flow op eerste character
console.log('Testing level-up button...');
await page.goto(BASE + '#/characters/ren', { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(800);
const luBtn = page.locator('[data-action="level-up"], button:has-text("Level")');
const luCount = await luBtn.count();
results.push({ feature: 'level-up-button-visible', count: luCount });

// Test spells tab render
await page.goto(BASE + '#/characters/ren/spells', { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(800);
const spellEls = await page.locator('.spell-card, .spell-row, [data-spell]').count();
results.push({ feature: 'spells-rendered', count: spellEls });

await browser.close();

console.log('\n=== RESULTS ===');
console.log(JSON.stringify(results, null, 2));
console.log('\n=== ERRORS ('+errors.length+') ===');
errors.forEach(e => console.log(' - '+e));
console.log('\n=== WARNINGS ('+warnings.length+') ===');
warnings.slice(0,20).forEach(w => console.log(' - '+w));
