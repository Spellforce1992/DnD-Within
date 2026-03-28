// ============================================================
// D&D Within — Pure D&D Mechanics Engine
// Extracted from app.js. Requires data.js (global DATA object).
// ============================================================

function getMod(score) {
    return Math.floor((score - 10) / 2);
}

function getProfBonus(level) {
    return DATA.profBonus[level] || 2;
}

function getAbilityScore(config, state, ability) {
    // Check for manual override first
    if (state.customAbilities && state.customAbilities[ability] !== undefined && state.customAbilities[ability] !== null) {
        return state.customAbilities[ability];
    }
    let score = config.baseAbilities[ability] || 10;
    // Add ASI bonuses from all levels up to current
    for (let lvl = 1; lvl <= state.level; lvl++) {
        const choice = state.asiChoices[lvl];
        if (!choice) continue;
        if (choice.type === 'asi' && choice.abilities) {
            score += (choice.abilities[ability] || 0);
        }
        if (choice.type === 'feat' && choice.feat) {
            const feat = DATA.feats.find(f => f.name === choice.feat);
            if (feat && feat.abilityBonus && feat.abilityBonus[ability]) {
                score += feat.abilityBonus[ability];
            }
        }
    }
    return score;
}

// Get the calculated (non-override) score for tooltip breakdown
function getCalculatedAbilityScore(config, state, ability) {
    let score = config.baseAbilities[ability] || 10;
    for (let lvl = 1; lvl <= state.level; lvl++) {
        const choice = state.asiChoices[lvl];
        if (!choice) continue;
        if (choice.type === 'asi' && choice.abilities) {
            score += (choice.abilities[ability] || 0);
        }
        if (choice.type === 'feat' && choice.feat) {
            const feat = DATA.feats.find(f => f.name === choice.feat);
            if (feat && feat.abilityBonus && feat.abilityBonus[ability]) {
                score += feat.abilityBonus[ability];
            }
        }
    }
    return score;
}

function getAbilityBreakdown(config, state, ability) {
    const base = config.baseAbilities[ability] || 10;
    // Determine racial bonus based on Half-Elf rules
    // Half-Elf: +2 CHA, then the two +1s are already baked into baseAbilities
    // For display purposes, we show the standard array value vs what's in base
    // The baseAbilities already include racial bonuses, so we need to deduce them
    // Standard array: 15, 14, 13, 12, 10, 8
    // Half-Elf racial: +2 CHA, +1 to two others (DEX and CON for both characters)
    const standardArray = [15, 14, 13, 12, 10, 8];

    // Determine which standard array value was assigned to this ability
    let racialBonus = 0;
    let baseWithoutRacial = base;

    // For Ren: STR 10, DEX 16(15+1), CON 14(13+1), INT 14, WIS 12, CHA 10(8+2)
    // For Saya: STR 8, DEX 15(14+1), CON 14(13+1), INT 12, WIS 10, CHA 17(15+2)
    if (config.name === "Ren Ashvane") {
        const racials = { str: 0, dex: 1, con: 1, int: 0, wis: 0, cha: 2 };
        racialBonus = racials[ability] || 0;
    } else if (config.name === "Saya Ashvane") {
        const racials = { str: 0, dex: 1, con: 1, int: 0, wis: 0, cha: 2 };
        racialBonus = racials[ability] || 0;
    }
    baseWithoutRacial = base - racialBonus;

    // ASI bonuses
    let asiTotal = 0;
    let asiDetails = [];
    for (let lvl = 1; lvl <= state.level; lvl++) {
        const choice = state.asiChoices[lvl];
        if (!choice) continue;
        if (choice.type === 'asi' && choice.abilities && choice.abilities[ability]) {
            asiTotal += choice.abilities[ability];
            asiDetails.push(`Level ${lvl} ASI: +${choice.abilities[ability]}`);
        }
        if (choice.type === 'feat' && choice.feat) {
            const feat = DATA.feats.find(f => f.name === choice.feat);
            if (feat && feat.abilityBonus && feat.abilityBonus[ability]) {
                asiTotal += feat.abilityBonus[ability];
                asiDetails.push(`${choice.feat}: +${feat.abilityBonus[ability]}`);
            }
        }
    }

    const total = baseWithoutRacial + racialBonus + asiTotal;

    return {
        baseArray: baseWithoutRacial,
        racialBonus,
        asiTotal,
        asiDetails,
        total
    };
}

function getAllAbilityScores(config, state) {
    const abilities = {};
    for (const ab of ['str', 'dex', 'con', 'int', 'wis', 'cha']) {
        abilities[ab] = getAbilityScore(config, state, ab);
    }
    return abilities;
}

function getHP(config, state) {
    const conScore = getAbilityScore(config, state, 'con');
    const conMod = getMod(conScore);
    const classData = DATA[config.className];
    const hitDie = classData ? classData.hitDie : (config.className === 'rogue' ? 8 : 6);
    // Level 1: max hit die + CON mod
    let hp = hitDie + conMod;
    // Each additional level: average (hitDie/2 + 1) + CON mod
    for (let i = 2; i <= state.level; i++) {
        hp += Math.floor(hitDie / 2) + 1 + conMod;
    }
    return Math.max(hp, 1);
}

function getAC(config, state) {
    const dexMod = getMod(getAbilityScore(config, state, 'dex'));
    if (config.className === 'rogue') {
        // Studded leather: 12 + DEX mod
        return 12 + dexMod;
    }
    if (config.className === 'sorcerer') {
        // Mage Armor prepared? 13 + DEX, otherwise 10 + DEX
        if (state.prepared && state.prepared.includes('Mage Armor')) {
            return 13 + dexMod;
        }
        return 10 + dexMod;
    }
    return 10 + dexMod;
}

function getMaxPrepared(state, chaMod) {
    return Math.max(1, chaMod + state.level);
}

function getMaxCantrips(level) {
    return DATA.sorcerer.cantripsKnown[level] || 4;
}

function formatMod(mod) {
    return mod >= 0 ? `+${mod}` : `${mod}`;
}
