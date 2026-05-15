---
name: dnd-within
category: Sites
complexity: high
stack: [vanilla-js, firebase-rtdb, hash-router, custom-css, spa]
---

# D&D Within — Valoria Campaign

Interactive D&D 5.5e (2024 PHB) character sheet + campaign management SPA voor 8 spelers.

## Wat het is
- Per-character sheets met full 2024-PHB mechanics (ability scores, ASI/feat tracks, spell prep, weapon mastery, third-caster slots, etc.)
- Dashboard met drag-and-drop widget grid (22 widget types, per-breakpoint layouts)
- Multi-campaign systeem met DM panel (NPC management, family trees, initiative tracker, dice tools)
- Maps met portal-linking tussen dimensies, Notes (6 layouts), Timeline events
- Multi-language (NL/EN), Admin mode, in-app bug reporter naar Nexus hub
- Externe Widget Editor in aparte repo (Cloudflare Pages) — bewerkt widget defs

## Stack
- **Frontend:** Vanilla JS (ES6+), geen build tools, hash-based SPA router
- **Backend:** Firebase Realtime Database via REST API (geen SDK), shared `nexus-12fc7` voor bugs
- **Hosting:** GitHub Pages (`JoshuaNierop/DnD-Within`) — migratie naar Cloudflare Pages P1 open
- **CSS:** ~8600 regels in `style.css` + ~900 in `dashboard.css`, custom properties, dark-mode (hardcoded — light-dark() nog niet), responsive + touch
- **Hardware:** Geen build/test pipeline, draait direct in browser

## Key files
- `index.html` — SPA shell, login, script-tags
- `app.js` (~2800 LOC) — router, auth, page handlers, modal flow
- `engine.js` — pure 5.5e mechanics (ability score calc, HP, AC, spell slots, prepared count)
- `data.js` (~3000+ LOC) — classes, subclasses, species, backgrounds, feats, spells, items
- `style.css` (~8600 LOC) — alle UI styles
- `dashboard.js` + `dashboard.css` + `dashboard-data.js` + `widgets.js` + `dashboard-edit.js` — widget grid systeem
- `ui-character.js` (~2500 LOC) — character sheet rendering
- `ui-pages.js`, `ui-modals.js`, `ui-world.js`, `ui-settings.js` — overige views
- `events.js`, `core.js` — event delegation + utility
- `sync.js` — Firebase REST integratie
- `i18n.js` — NL/EN translation keys
- `effects.js`, `families.js`, `familyDiagram.js`, `familyLayout.js` — extras
- `sw.js` — service worker (cache version moet handmatig bumpen bij deploy)
- `database.rules.json` — Firebase rules (verlengd tot 2027-04-28)

## Run
```
git clone <repo> && cd "D&D Within"
# open index.html in browser, OR:
python -m http.server 8765   # localhost:8765
```

Login: `admin/admin` (DM mode) of een spelernaam (per-character login).

## Deploy
`git push origin master` → GitHub Pages auto-deploy. Bump `sw.js` cache version voor force-reload.

## Bug tracking
In-app FAB (debug-mode) → `/shared/bugs` op centrale Nexus Firebase hub. Project-key `dnd-within`. Fix-flow: `/bugfix dnd-within` slash-command.

## Status
- Complexity: **high** — multi-module, Firebase sync, complex 5.5e calculations, shared state
- Hot file: `data.js` (3072+ regels, regelmatig gewijzigd)
- P0 audit (2026-04-13): ✅ alle 11 opgelost (2026-05-15)
- P1 ~18 items open (Testresults.md sectie 2)
- P2 ~15 items open (resource trackers, concentration, exhaustion)
