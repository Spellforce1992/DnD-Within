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

    // Background bonuses - check config or default to empty
    const bgBonuses = config.backgroundBonuses || {};
    let racialBonus = bgBonuses[ability] || 0;
    let baseWithoutRacial = base - racialBonus;

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
    var dexMod = getMod(getAbilityScore(config, state, 'dex'));
    var className = config.className;

    if (className === 'rogue' || className === 'bard') {
        // Studded leather: 12 + DEX
        return 12 + dexMod;
    }
    if (className === 'sorcerer' || className === 'wizard' || className === 'warlock') {
        // Mage Armor if prepared: 13 + DEX, otherwise 10 + DEX
        if (state.prepared && (state.prepared.includes('Mage Armor') || state.prepared.includes('Armor of Agathys'))) {
            return 13 + dexMod;
        }
        return 10 + dexMod;
    }
    if (className === 'fighter' || className === 'paladin') {
        // Chain mail: 16 (no DEX), or plate: 18
        return 16;
    }
    if (className === 'cleric') {
        // Depends on Divine Order: Protector = chain mail (16), Thaumaturge = scale mail (14 + DEX max 2)
        // Default to scale mail
        return 14 + Math.min(dexMod, 2);
    }
    if (className === 'ranger') {
        // Scale mail: 14 + DEX (max 2)
        return 14 + Math.min(dexMod, 2);
    }
    if (className === 'druid') {
        // Leather armor: 11 + DEX (druids don't wear metal)
        return 11 + dexMod;
    }
    if (className === 'barbarian') {
        // Unarmored Defense: 10 + DEX + CON
        var conMod = getMod(getAbilityScore(config, state, 'con'));
        return 10 + dexMod + conMod;
    }
    if (className === 'monk') {
        // Unarmored Defense: 10 + DEX + WIS
        var wisMod = getMod(getAbilityScore(config, state, 'wis'));
        return 10 + dexMod + wisMod;
    }
    // Default: 10 + DEX
    return 10 + dexMod;
}

function getMaxPrepared(state, abilityMod, className) {
    if (!className) className = 'sorcerer';
    // Full prepared casters: ability mod + class level
    if (className === 'sorcerer' || className === 'wizard' || className === 'druid' || className === 'cleric') {
        return Math.max(1, abilityMod + state.level);
    }
    // Bard: CHA mod + level (5.5e: prepares spells, swaps 1 per level-up)
    if (className === 'bard') {
        return Math.max(1, abilityMod + state.level);
    }
    // Half casters: ability mod + half class level
    if (className === 'paladin') {
        return Math.max(1, abilityMod + Math.floor(state.level / 2));
    }
    if (className === 'ranger') {
        var known = { 2:2, 3:3, 4:3, 5:4, 6:4, 7:5, 8:5, 9:6, 10:6, 11:7, 12:7, 13:8, 14:8, 15:9, 16:9, 17:10, 18:10, 19:11, 20:11 };
        return known[state.level] || 0;
    }
    if (className === 'warlock') {
        var wknown = { 1:2, 2:3, 3:4, 4:5, 5:6, 6:7, 7:8, 8:9, 9:10, 10:10, 11:11, 12:11, 13:12, 14:12, 15:13, 16:13, 17:14, 18:14, 19:15, 20:15 };
        return wknown[state.level] || 2;
    }
    // Non-casters (barbarian, fighter, monk, rogue): 0
    if (className === 'barbarian' || className === 'fighter' || className === 'monk' || className === 'rogue') {
        return 0;
    }
    return Math.max(1, abilityMod + state.level);
}

function getMaxCantrips(level, className) {
    if (!className) className = 'sorcerer';
    var classData = DATA[className];
    if (classData && classData.cantripsKnown) {
        return classData.cantripsKnown[level] || 0;
    }
    return 0;
}

function getSpellcastingAbility(className) {
    var map = { sorcerer: 'cha', wizard: 'int', druid: 'wis', paladin: 'cha', ranger: 'wis', warlock: 'cha', bard: 'cha', cleric: 'wis' };
    return map[className] || 'cha';
}

function getSpellSlots(className, level) {
    if (className === 'warlock') return [];
    var classData = DATA[className];
    if (!classData) return [];
    if (classData.spellSlots) return classData.spellSlots[level] || [];
    if (classData.spellcasting === 'half') return DATA.halfCasterSlots[level] || [];
    return [];
}

function formatMod(mod) {
    return mod >= 0 ? `+${mod}` : `${mod}`;
}
