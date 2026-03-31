const DATA = {
    // Index 0 unused, index 1-20 = character levels
    profBonus: [0, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6],

    // NOTE: Half-Elf is VERWIJDERD in 5.5e (2024 PHB). Spelers kiezen Human of Elf.
    // Behouden als legacy voor bestaande characters.
    halfElf: {
        speed: 30,
        darkvision: 60,
        legacy: true,
        features: [
            { name: "Darkvision", desc: "Je kunt in dim light zien als bright light tot 60ft, en in duisternis als dim light." },
            { name: "Fey Ancestry", desc: "Advantage op saving throws tegen charmed. Magie kan je niet in slaap brengen." },
            { name: "Skill Versatility", desc: "Proficiency in 2 extra skills naar keuze." }
        ]
    },

    // ===== HUMAN RACE (2024) =====
    human: {
        speed: 30,
        features: [
            { name: "Resourceful", desc: "Je krijgt Heroic Inspiration na elke long rest." },
            { name: "Skillful", desc: "Je krijgt proficiency in 1 extra skill naar keuze." },
            { name: "Versatile", desc: "Je krijgt een origin feat naar keuze." }
        ]
    },

    // ===== HALFLING RACE (2024) =====
    halfling: {
        speed: 30,
        features: [
            { name: "Brave", desc: "Advantage op saving throws tegen frightened." },
            { name: "Halfling Nimbleness", desc: "Je kunt door de ruimte van creatures bewegen die groter zijn dan jij (Medium of groter)." },
            { name: "Luck", desc: "Als je een 1 rolt op een d20 voor een attack roll, ability check of saving throw, mag je opnieuw rollen en het nieuwe resultaat gebruiken." },
            { name: "Naturally Stealthy", desc: "Je kunt je verbergen achter een creature dat minstens Medium is." }
        ]
    },

    // ===== TIEFLING RACE (2024) =====
    tiefling: {
        speed: 30,
        darkvision: 60,
        features: [
            { name: "Darkvision", desc: "Je kunt in dim light zien als bright light tot 60ft, en in duisternis als dim light." },
            { name: "Fiendish Legacy", desc: "Kies een legacy: Abyssal (poison resistance), Chthonic (necrotic resistance), of Infernal (fire resistance). Je krijgt bijbehorende spells op hogere levels." },
            { name: "Otherworldly Presence", desc: "Je kent de Thaumaturgy cantrip." }
        ]
    },

    // ===== AASIMAR RACE (2024) =====
    aasimar: {
        speed: 30,
        darkvision: 60,
        features: [
            { name: "Celestial Resistance", desc: "Je hebt resistance tegen necrotic en radiant damage." },
            { name: "Darkvision", desc: "Je kunt in dim light zien als bright light tot 60ft, en in duisternis als dim light." },
            { name: "Healing Hands", desc: "Als action, raak een creature aan om HP te herstellen gelijk aan je proficiency bonus. 1x per long rest." },
            { name: "Light Bearer", desc: "Je kent de Light cantrip." },
            { name: "Celestial Revelation", desc: "Vanaf level 3: kies Heavenly Wings (vliegende speed), Inner Radiance (extra radiant damage in een aura), of Necrotic Shroud (frightened aura + extra necrotic damage)." }
        ]
    },

    // ===== WOOD ELF RACE (2024) =====
    woodElf: {
        speed: 35,
        darkvision: 60,
        features: [
            { name: "Darkvision", desc: "Je kunt in dim light zien als bright light tot 60ft, en in duisternis als dim light." },
            { name: "Fey Ancestry", desc: "Advantage op saving throws tegen de charmed condition. Je bent immuun voor magische slaap." },
            { name: "Keen Senses", desc: "Proficiency in de Perception skill." },
            { name: "Trance", desc: "Je hoeft niet te slapen. In plaats daarvan mediteer je 4 uur per long rest." },
            { name: "Elf Lineage: Wood Elf", desc: "Walking speed 35ft. Level 3: Longstrider (1x/long rest gratis). Level 5: Pass Without Trace (1x/long rest gratis)." }
        ]
    },

    // ===== DWARF RACE (2024) =====
    dwarf: {
        speed: 30,
        darkvision: 120,
        features: [
            { name: "Darkvision", desc: "Je kunt in dim light zien als bright light tot 120ft, en in duisternis als dim light." },
            { name: "Dwarven Resilience", desc: "Resistance tegen poison damage. Advantage op saving throws tegen de poisoned condition." },
            { name: "Dwarven Toughness", desc: "Je max HP stijgt met 1 per level (retroactief)." },
            { name: "Stonecunning", desc: "Als bonus action, activeer Tremorsense 60ft op stenen oppervlakken voor 10 minuten. Aantal keer = proficiency bonus per long rest." }
        ]
    },

    // ===== GNOME RACE (2024) =====
    gnome: {
        speed: 30,
        darkvision: 60,
        features: [
            { name: "Darkvision", desc: "Je kunt in dim light zien als bright light tot 60ft, en in duisternis als dim light." },
            { name: "Gnome Cunning", desc: "Advantage op INT, WIS en CHA saving throws tegen spells en magische effecten." },
            { name: "Gnome Lineage", desc: "Kies Forest Gnome (Minor Illusion cantrip + Speak with Animals prof bonus keer/long rest) of Rock Gnome (Mending + Prestidigitation cantrips, Tinker: maak clockwork devices)." }
        ]
    },

    // ===== GOLIATH RACE (2024) =====
    goliath: {
        speed: 35,
        features: [
            { name: "Giant Ancestry", desc: "Kies een Giant lineage: Cloud (Fog Cloud bonus action), Fire (fire resistance + 1d10 fire damage reactie), Frost (cold resistance + 1d10 cold damage reactie), Hill (knock prone op hit), Stone (resistance via reaction), Storm (fly 30ft als bonus action). Uses = prof bonus per long rest." },
            { name: "Large Form", desc: "Vanaf level 5: als bonus action word je Large voor 10 minuten. Advantage op STR checks, +10ft speed. 1x per long rest." },
            { name: "Powerful Build", desc: "Je telt als Large voor carrying capacity en push/drag/lift." }
        ]
    },

    // ===== ORC RACE (2024) =====
    orc: {
        speed: 30,
        darkvision: 120,
        features: [
            { name: "Darkvision", desc: "Je kunt in dim light zien als bright light tot 120ft, en in duisternis als dim light." },
            { name: "Adrenaline Rush", desc: "Als bonus action, Dash en krijg temporary HP gelijk aan je proficiency bonus x hit die. Uses = prof bonus per long rest." },
            { name: "Relentless Endurance", desc: "Als je naar 0 HP gaat maar niet instant killed, ga je naar 1 HP in plaats daarvan. 1x per long rest." }
        ]
    },

    // ===== DRAGONBORN RACE (2024) =====
    dragonborn: {
        speed: 30,
        features: [
            { name: "Draconic Ancestry", desc: "Kies een drakentype. Je krijgt resistance tegen het bijbehorende element (acid/cold/fire/lightning/poison)." },
            { name: "Breath Weapon", desc: "Vervang 1 attack in je Attack action: 15ft cone of 30ft line (kies per gebruik). DEX/CON save. Damage: 1d10 (lvl 1), 2d10 (lvl 5), 3d10 (lvl 11), 4d10 (lvl 17). Uses = prof bonus per long rest." },
            { name: "Draconic Flight", desc: "Vanaf level 5: als bonus action, groei spectrale vleugels. Fly speed = walking speed voor 10 minuten. 1x per long rest." }
        ]
    },

    // ===== SORCERER CLASS =====
    sorcerer: {
        hitDie: 6,
        savingThrows: ["con", "cha"],
        skillOptions: ["arcana", "deception", "insight", "intimidation", "persuasion", "religion"],
        skillCount: 2,

        spellSlots: {
            1:  [2,0,0,0,0,0,0,0,0],
            2:  [3,0,0,0,0,0,0,0,0],
            3:  [4,2,0,0,0,0,0,0,0],
            4:  [4,3,0,0,0,0,0,0,0],
            5:  [4,3,2,0,0,0,0,0,0],
            6:  [4,3,3,0,0,0,0,0,0],
            7:  [4,3,3,1,0,0,0,0,0],
            8:  [4,3,3,2,0,0,0,0,0],
            9:  [4,3,3,3,1,0,0,0,0],
            10: [4,3,3,3,2,0,0,0,0],
            11: [4,3,3,3,2,1,0,0,0],
            12: [4,3,3,3,2,1,0,0,0],
            13: [4,3,3,3,2,1,1,0,0],
            14: [4,3,3,3,2,1,1,0,0],
            15: [4,3,3,3,2,1,1,1,0],
            16: [4,3,3,3,2,1,1,1,0],
            17: [4,3,3,3,2,1,1,1,1],
            18: [4,3,3,3,3,1,1,1,1],
            19: [4,3,3,3,3,2,1,1,1],
            20: [4,3,3,3,3,2,2,1,1]
        },

        cantripsKnown: { 1:4, 2:4, 3:4, 4:5, 5:5, 6:5, 7:5, 8:5, 9:5, 10:6, 11:6, 12:6, 13:6, 14:6, 15:6, 16:6, 17:6, 18:6, 19:6, 20:6 },
        sorceryPoints: { 1:0, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:10, 11:11, 12:12, 13:13, 14:14, 15:15, 16:16, 17:17, 18:18, 19:19, 20:20 },
        maxSpellLevel: { 1:1, 2:1, 3:2, 4:2, 5:3, 6:3, 7:4, 8:4, 9:5, 10:5, 11:6, 12:6, 13:7, 14:7, 15:8, 16:8, 17:9, 18:9, 19:9, 20:9 },
        asiLevels: [4, 8, 12, 16, 19],

        features: {
            1: [
                { name: "Spellcasting", desc: "Cast sorcerer spells met CHA als spellcasting ability. Je bereidt spells voor uit de volledige Sorcerer spell list. Aantal = CHA mod + level." },
                { name: "Innate Sorcery", desc: "Bonus action: activeer voor 1 minuut. Je spell save DC stijgt met 1, je hebt advantage op attack rolls van sorcerer spells. Aantal keer = proficiency bonus per long rest." }
            ],
            2: [
                { name: "Font of Magic", desc: "Je krijgt sorcery points die je kunt omzetten in spell slots of gebruiken voor Metamagic." },
                { name: "Metamagic", desc: "Kies 2 Metamagic opties. Hiermee pas je spells aan door sorcery points te besteden." }
            ],
            3: [
                { name: "Sorcerer Subclass", desc: "Kies je magische oorsprong. Dit bepaalt je subclass features." }
            ],
            4: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            8: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            10: [
                { name: "Additional Metamagic", desc: "Kies nog 1 extra Metamagic optie." }
            ],
            12: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            16: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            17: [
                { name: "Additional Metamagic", desc: "Kies nog 1 extra Metamagic optie." }
            ],
            19: [
                { name: "Epic Boon", desc: "Kies een Epic Boon feat. Je ability scores kunnen nu tot 30 stijgen." }
            ],
            20: [
                { name: "Arcane Apotheosis", desc: "Terwijl Innate Sorcery actief is, kun je 1x per beurt Metamagic gebruiken zonder sorcery points te besteden." }
            ]
        },

        subclasses: {
            wildMagic: {
                name: "Wild Magic",
                level: 3,
                features: {
                    3: [
                        { name: "Wild Magic Surge", desc: "Direct na het casten van een sorcerer spell van 1st level of hoger kan de DM je laten rollen op de Wild Magic Surge tabel." },
                        { name: "Tides of Chaos", desc: "Eén keer per long rest: geef jezelf advantage op een attack roll, ability check of saving throw." }
                    ],
                    6: [
                        { name: "Bend Luck", desc: "Reaction, 2 sorcery points: voeg 1d4 toe of trek 1d4 af van een attack roll, ability check of saving throw van een creature dat je kunt zien." }
                    ],
                    14: [
                        { name: "Controlled Chaos", desc: "Als je rolt op de Wild Magic Surge tabel, rol je twee keer en kies je welk effect plaatsvindt." }
                    ],
                    18: [
                        { name: "Spell Bombardment", desc: "Als je damage rolt voor een spell en een of meer dobbelstenen het maximale getal tonen, kies er één en rol die opnieuw. Voeg het resultaat toe aan de damage." }
                    ]
                }
            },
            draconic: {
                name: "Draconic Sorcery",
                level: 3,
                features: {
                    3: [
                        { name: "Draconic Resilience", desc: "Max HP +1 per sorcerer level. Zonder armor: AC = 13 + DEX mod." },
                        { name: "Draconic Ancestry", desc: "Kies een drakentype. Je leert bijbehorende spells en krijgt resistance tegen dat element op hogere levels." }
                    ],
                    6: [
                        { name: "Elemental Affinity", desc: "Als je een spell cast die damage doet van je draconic element: +CHA mod damage. Besteed 1 sorcery point voor resistance tegen dat element gedurende 1 uur." }
                    ],
                    14: [
                        { name: "Dragon Wings", desc: "Als bonus action laat je drakenachtige vleugels groeien. Fly speed gelijk aan walking speed. Duren tot je ze herroept." }
                    ],
                    18: [
                        { name: "Draconic Presence", desc: "5 sorcery points: 60ft aura van vrees of ontzag. WIS save of creatures zijn charmed/frightened voor 1 minuut." }
                    ]
                }
            },
            clockwork: {
                name: "Clockwork Sorcery",
                level: 3,
                features: {
                    3: [
                        { name: "Clockwork Magic", desc: "Extra spells altijd prepared: Alarm, Protection from Evil and Good (1st), Aid, Lesser Restoration (3rd), Dispel Magic, Protection from Energy (5th)." },
                        { name: "Restore Balance", desc: "Reaction: als een creature binnen 60ft advantage of disadvantage heeft, neem het weg. Uses = prof bonus per long rest." }
                    ],
                    6: [
                        { name: "Bastion of Law", desc: "Besteed 1-5 sorcery points: maak een Ward op een creature. Het absorbeert damage gelijk aan het aantal bestede d8's. Ward vervalt na long rest." }
                    ],
                    14: [
                        { name: "Trance of Order", desc: "Bonus action: behandel elke d20 roll onder 10 als een 10 voor 1 minuut. 1x per long rest of 7 sorcery points." }
                    ],
                    18: [
                        { name: "Clockwork Cavalcade", desc: "Besteed 7 sorcery points: herstel 100 HP verdeeld over creatures in 30ft, repareer beschadigde objecten, beëindig spells van 6th level of lager." }
                    ]
                }
            },
            aberrant: {
                name: "Aberrant Sorcery",
                level: 3,
                features: {
                    3: [
                        { name: "Psionic Spells", desc: "Extra spells altijd prepared: Arms of Hadar, Dissonant Whispers (1st), Calm Emotions, Detect Thoughts (3rd), Hunger of Hadar, Sending (5th)." },
                        { name: "Telepathic Speech", desc: "Als bonus action, maak telepathisch contact met een creature binnen 30ft. Duurt een aantal minuten = sorcerer level. Geen taal nodig." }
                    ],
                    6: [
                        { name: "Psionic Sorcery", desc: "Cast sorcerer spells met sorcery points i.p.v. spell slots (kosten = spell level). Als je zo cast, heb je geen verbal/somatic components nodig." }
                    ],
                    14: [
                        { name: "Psychic Defenses", desc: "Resistance tegen psychic damage. Advantage op saving throws tegen charmed en frightened." }
                    ],
                    18: [
                        { name: "Warping Implosion", desc: "Teleporteer tot 120ft. Elke creature in 30ft van je vorige positie: STR save of 3d10 force damage en naar je oude positie getrokken. 1x per long rest of 5 sorcery points." }
                    ]
                }
            }
        }
    },

    // ===== ROGUE CLASS =====
    rogue: {
        hitDie: 8,
        savingThrows: ["dex", "int"],
        skillOptions: ["acrobatics", "athletics", "deception", "insight", "intimidation", "investigation", "perception", "performance", "persuasion", "sleight of hand", "stealth"],
        skillCount: 4,

        sneakAttack: {
            1: "1d6", 2: "1d6", 3: "2d6", 4: "2d6", 5: "3d6", 6: "3d6",
            7: "4d6", 8: "4d6", 9: "5d6", 10: "5d6", 11: "6d6", 12: "6d6",
            13: "7d6", 14: "7d6", 15: "8d6", 16: "8d6", 17: "9d6", 18: "9d6",
            19: "10d6", 20: "10d6"
        },

        asiLevels: [4, 8, 10, 12, 16, 19],
        expertiseLevels: [1, 6],

        features: {
            1: [
                { name: "Expertise", desc: "Kies 2 skills met proficiency (of thieves' tools). Je proficiency bonus wordt verdubbeld voor die checks." },
                { name: "Sneak Attack", desc: "Eén keer per beurt extra schade als je advantage hebt of een ally binnen 5ft van het doelwit staat. Finesse of ranged weapon vereist." },
                { name: "Thieves' Cant", desc: "Geheime dieventaal. Je kunt verborgen berichten achterlaten en begrijpen in gesprekken." },
                { name: "Weapon Mastery", desc: "Je beheerst 2 weapon mastery properties. Kies 2 finesse of light wapens waarmee je de mastery property activeert." }
            ],
            2: [
                { name: "Cunning Action", desc: "Bonus action om te Dash, Disengage of Hide." }
            ],
            3: [
                { name: "Roguish Archetype", desc: "Kies je subclass. Dit bepaalt je specialisatie als rogue." }
            ],
            4: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            5: [
                { name: "Uncanny Dodge", desc: "Reaction: als een attacker die je kunt zien je raakt, halveer de damage van die aanval." },
                { name: "Cunning Strike", desc: "Offer Sneak Attack dice op voor extra effecten: Disarm (1d6), Poison (1d6, CON save of poisoned), Trip (1d6, DEX save of prone), Withdraw (1d6, geen opportunity attack)." }
            ],
            6: [
                { name: "Expertise", desc: "Kies nog 2 extra skills (of thieves' tools) voor verdubbelde proficiency bonus." }
            ],
            7: [
                { name: "Evasion", desc: "Bij een DEX saving throw voor halve damage: neem 0 damage bij succes, halve damage bij falen." }
            ],
            8: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            10: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            11: [
                { name: "Reliable Talent", desc: "Als je een ability check maakt waar je proficiency hebt, wordt elke d20 roll van 9 of lager behandeld als een 10." }
            ],
            12: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            14: [
                { name: "Blindsense", desc: "Als je kunt horen, weet je de locatie van verborgen of onzichtbare creatures binnen 10ft." },
                { name: "Devious Strikes", desc: "Extra Cunning Strike opties: Daze (2d6, CON save of disadvantage op attacks), Knock Out (6d6, CON save of unconscious 1 min), Obscure (3d6, target blinded tot einde volgende beurt)." }
            ],
            15: [
                { name: "Slippery Mind", desc: "Je krijgt proficiency in Wisdom saving throws." }
            ],
            16: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            18: [
                { name: "Elusive", desc: "Geen attack roll heeft advantage tegen jou, zolang je niet incapacitated bent." }
            ],
            19: [
                { name: "Epic Boon", desc: "Kies een Epic Boon feat. Je ability scores kunnen nu tot 30 stijgen." }
            ],
            20: [
                { name: "Stroke of Luck", desc: "Als je een aanval mist, verander het in een hit. Of bij een failed ability check, behandel de d20 als een 20. Eén keer per short/long rest." }
            ]
        },

        subclasses: {
            // NOTE: Scout is LEGACY — niet in 2024 PHB. 5.5e subclasses: Arcane Trickster, Assassin, Soulknife, Thief.
            scout: {
                name: "Scout",
                legacy: true,
                level: 3,
                features: {
                    3: [
                        { name: "Skirmisher", desc: "Reaction: als een vijand binnen 5ft van je eindigt, kun je tot de helft van je speed wegbewegen zonder opportunity attacks." },
                        { name: "Survivalist", desc: "Je krijgt proficiency in Nature en Survival. Je expertise in deze skills wordt verdubbeld." }
                    ],
                    9: [
                        { name: "Superior Mobility", desc: "Je walking speed stijgt met 10ft. Dit geldt ook voor climb en swim speed als je die hebt." }
                    ],
                    13: [
                        { name: "Ambush Master", desc: "Advantage op initiative rolls. De eerste creature die je raakt in de eerste ronde van combat krijgt alle allies advantage op attacks tegen dat doelwit tot het begin van je volgende beurt." }
                    ],
                    17: [
                        { name: "Sudden Strike", desc: "Als je de Attack action neemt, kun je een extra aanval doen als bonus action. Je kunt Sneak Attack op beide aanvallen toepassen, maar niet op hetzelfde doelwit." }
                    ]
                }
            },
            thief: {
                name: "Thief",
                level: 3,
                features: {
                    3: [
                        { name: "Fast Hands", desc: "Bonus action: Sleight of Hand check, Thieves' Tools, of gebruik een object (Use an Object action)." },
                        { name: "Second-Story Work", desc: "Climbing kost geen extra movement. Running jump afstand stijgt met DEX mod in feet." }
                    ],
                    9: [
                        { name: "Supreme Sneak", desc: "Advantage op Stealth checks als je niet meer dan de helft van je speed beweegt deze beurt." }
                    ],
                    13: [
                        { name: "Use Magic Device", desc: "Je kunt elk magic item gebruiken, ongeacht class, race of level vereisten." }
                    ],
                    17: [
                        { name: "Thief's Reflexes", desc: "Je krijgt een extra beurt in de eerste ronde van combat (op je initiative -10)." }
                    ]
                }
            },
            assassin: {
                name: "Assassin",
                level: 3,
                features: {
                    3: [
                        { name: "Assassinate", desc: "Advantage op attack rolls tegen creatures die nog niet hebben gehandeld in combat. Hits tegen surprised creatures zijn automatisch critical hits." },
                        { name: "Bonus Proficiencies", desc: "Proficiency met Disguise Kit en Poisoner's Kit." }
                    ],
                    9: [
                        { name: "Infiltration Expertise", desc: "Besteed 25 gp en 7 dagen: creëer een valse identiteit met documenten, bekende geschiedenis en vermomming." }
                    ],
                    13: [
                        { name: "Envenom Weapons", desc: "Besteed 1 minuut om vergif te bereiden. Eerstvolgende hit: extra 2d6 + proficiency bonus poison damage (CON save voor half). Uses = prof bonus per long rest." }
                    ],
                    17: [
                        { name: "Death Strike", desc: "Als je een surprised creature raakt: CON save (DC 8 + DEX mod + prof) of de damage wordt verdubbeld." }
                    ]
                }
            },
            arcaneTrickster: {
                name: "Arcane Trickster",
                level: 3,
                features: {
                    3: [
                        { name: "Spellcasting", desc: "Cast wizard spells (enchantment/illusion + vrije keuze) met INT. Third caster spell slots." },
                        { name: "Mage Hand Legerdemain", desc: "Je Mage Hand is onzichtbaar. Bonus action: stuur het, gebruik Sleight of Hand op afstand, plant/haal objecten op." }
                    ],
                    9: [
                        { name: "Magical Ambush", desc: "Als je verborgen bent en een spell cast: targets hebben disadvantage op de saving throw." }
                    ],
                    13: [
                        { name: "Versatile Trickster", desc: "Bonus action: gebruik Mage Hand om een creature te afleiden. Je hebt advantage op attacks tegen dat creature tot einde beurt." }
                    ],
                    17: [
                        { name: "Spell Thief", desc: "Reaction: als een creature binnen 30ft een spell op jou cast, maak een Arcana check (DC 10 + spell level). Bij succes: de spell faalt en jij leert hem voor 8 uur. 1x per long rest." }
                    ]
                }
            },
            soulknife: {
                name: "Soulknife",
                level: 3,
                features: {
                    3: [
                        { name: "Psionic Power", desc: "Je hebt Psionic Energy dice (d6, stijgt). Aantal = 2x prof bonus. Gebruik voor Psi-Bolstered Knack (+die aan failed skill check) of Psychic Whispers (telepathie met creatures)." },
                        { name: "Psychic Blades", desc: "Als je de Attack action neemt: manifesteer een psychic blade (1d6 psychic, finesse, thrown 60ft). Bonus action: tweede blade (1d4)." }
                    ],
                    9: [
                        { name: "Soul Blades", desc: "Homing Strikes: als Psychic Blade mist, besteed Psionic Energy die om te herrolling (+ die to attack). Psychic Teleportation: besteed die om tot 10x result in ft te teleporteren." }
                    ],
                    13: [
                        { name: "Psychic Veil", desc: "Als bonus action word je onzichtbaar voor 1 uur (of tot je aanvalt/een spell cast). 1x per long rest of besteed Psionic Energy die." }
                    ],
                    17: [
                        { name: "Rend Mind", desc: "Bij Sneak Attack met Psychic Blades: target maakt WIS save of stunned voor 1 minuut (save einde beurt). 1x per long rest of 3 Psionic Energy dice." }
                    ]
                }
            }
        }
    },

    // ===== HALF-CASTER SPELL SLOTS =====
    halfCasterSlots: {
        2:  [2,0,0,0,0],
        3:  [3,0,0,0,0],
        4:  [3,0,0,0,0],
        5:  [4,2,0,0,0],
        6:  [4,2,0,0,0],
        7:  [4,3,0,0,0],
        8:  [4,3,0,0,0],
        9:  [4,3,2,0,0],
        10: [4,3,2,0,0],
        11: [4,3,3,0,0],
        12: [4,3,3,0,0],
        13: [4,3,3,1,0],
        14: [4,3,3,1,0],
        15: [4,3,3,2,0],
        16: [4,3,3,2,0],
        17: [4,3,3,3,1],
        18: [4,3,3,3,1],
        19: [4,3,3,3,2],
        20: [4,3,3,3,2]
    },

    // ===== RANGER CLASS =====
    ranger: {
        hitDie: 10,
        savingThrows: ["str", "dex"],
        skillOptions: ["animal handling", "athletics", "insight", "investigation", "nature", "perception", "stealth", "survival"],
        skillCount: 3,
        asiLevels: [4, 8, 12, 16, 19],

        // Half caster: uses DATA.halfCasterSlots, starts at level 2
        spellcasting: "half",
        spellcastingStart: 2,

        features: {
            1: [
                { name: "Favored Enemy", desc: "Hunter's Mark is altijd prepared en telt niet mee voor je prepared spells. Je kunt het 2x gratis casten per long rest. Op level 14 vereist het geen concentration meer." },
                { name: "Deft Explorer", desc: "Je krijgt expertise in een skill waar je proficiency in hebt." },
                { name: "Weapon Mastery", desc: "Je beheerst 2 weapon mastery properties. Kies 2 wapens waarmee je de mastery property activeert. Wissel na een long rest." }
            ],
            2: [
                { name: "Fighting Style", desc: "Kies een fighting style: Archery (+2 ranged attacks), Defense (+1 AC in armor), Dueling (+2 melee damage met een wapen in één hand), Two-Weapon Fighting." },
                { name: "Spellcasting", desc: "Je kunt ranger spells casten met WIS als spellcasting ability. Voorbereiden: WIS mod + half ranger level." }
            ],
            3: [
                { name: "Ranger Subclass", desc: "Kies je Ranger Conclave, je specialisatie als ranger." }
            ],
            4: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            5: [
                { name: "Extra Attack", desc: "Je kunt twee keer aanvallen in plaats van één keer als je de Attack action neemt." }
            ],
            6: [
                { name: "Roving", desc: "Je walking speed stijgt met 5ft. Je krijgt een climbing speed en swimming speed gelijk aan je walking speed." }
            ],
            8: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            10: [
                { name: "Nature's Veil", desc: "Als bonus action word je onzichtbaar tot het begin van je volgende beurt. Aantal keer per long rest = proficiency bonus." },
                { name: "Tireless", desc: "Als action, krijg temporary HP gelijk aan 1d8 + WIS modifier. Aantal keer per long rest = proficiency bonus. Bij een short rest verminder je 1 level of exhaustion." }
            ],
            12: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            16: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            18: [
                { name: "Feral Senses", desc: "Je hebt blindsight 30ft. Onzichtbare creatures krijgen geen advantage op attacks tegen jou." }
            ],
            19: [
                { name: "Epic Boon", desc: "Kies een Epic Boon feat. Je ability scores kunnen nu tot 30 stijgen." }
            ],
            20: [
                { name: "Foe Slayer", desc: "Eén keer per beurt voeg je WIS modifier toe aan een attack roll of damage roll." }
            ]
        },

        subclasses: {
            hunter: {
                name: "Hunter",
                level: 3,
                features: {
                    3: [
                        { name: "Hunter's Prey", desc: "Kies één optie: Colossus Slayer (+1d8 damage 1x/beurt tegen gewonde targets), Giant Killer (reaction aanval tegen Large+ creatures die je missen), of Horde Breaker (1 extra aanval per beurt tegen een ander target binnen 5ft)." },
                        { name: "Hunter's Lore", desc: "Je kunt als actie een creature bestuderen. Je leert of het immuniteiten, resistances, of vulnerabilities heeft." }
                    ],
                    7: [
                        { name: "Defensive Tactics", desc: "Kies één optie: Escape the Horde (opportunity attacks tegen jou hebben disadvantage), Multiattack Defense (+4 AC na eerste hit van een creature), of Steel Will (advantage op saves tegen frightened)." }
                    ],
                    11: [
                        { name: "Multiattack", desc: "Kies één optie: Volley (ranged attack tegen elk creature binnen 10ft van een punt, 1 ammo per target) of Whirlwind Attack (melee attack tegen elk creature binnen 5ft)." }
                    ],
                    15: [
                        { name: "Superior Hunter's Defense", desc: "Kies één optie: Evasion (0 damage bij DEX save succes), Stand Against the Tide (redirect missed melee attack naar ander creature), of Uncanny Dodge (halveer damage van een aanval als reaction)." }
                    ]
                }
            },
            beastMaster: {
                name: "Beast Master",
                level: 3,
                features: {
                    3: [
                        { name: "Primal Companion", desc: "Je roept een Primal Companion op: kies Beast of the Land, Sea of Sky. Elk heeft een eigen stat block. Het beast valt aan op jouw commando (jouw bonus action). Temp HP = 5x ranger level." }
                    ],
                    7: [
                        { name: "Exceptional Training", desc: "Als bonus action kun je je beast commanderen om Dash, Dodge of Help te gebruiken." }
                    ],
                    11: [
                        { name: "Bestial Fury", desc: "Je beast kan twee keer aanvallen als het de Attack action neemt." }
                    ],
                    15: [
                        { name: "Share Spells", desc: "Spells die je op jezelf cast en een range van Self hebben, beïnvloeden ook je beast als het binnen 30ft is." }
                    ]
                }
            },
            feyWanderer: {
                name: "Fey Wanderer",
                level: 3,
                features: {
                    3: [
                        { name: "Dreadful Strikes", desc: "1x per beurt als je een creature raakt met een weapon attack: +1d4 psychic damage." },
                        { name: "Fey Wanderer Magic", desc: "Bonus spells altijd prepared: Charm Person (3rd), Misty Step (5th), Dispel Magic (9th), Dimension Door (13th), Mislead (17th)." },
                        { name: "Otherworldly Glamour", desc: "Voeg je WIS modifier toe aan CHA checks. Je krijgt proficiency in Deception, Performance of Persuasion." }
                    ],
                    7: [
                        { name: "Beguiling Twist", desc: "Als een creature binnen 120ft slaagt op een save tegen charmed of frightened: redirect het effect als reaction naar een ander creature binnen 120ft (WIS save)." }
                    ],
                    11: [
                        { name: "Fey Reinforcements", desc: "Cast Summon Fey 1x per long rest zonder spell slot. Je kunt het ook casten met spell slots." }
                    ],
                    15: [
                        { name: "Misty Wanderer", desc: "Cast Misty Step gratis een aantal keer gelijk aan je proficiency bonus per long rest. Als je Misty Step cast, kun je 1 willing creature binnen 5ft meenemen." }
                    ]
                }
            },
            gloomStalker: {
                name: "Gloom Stalker",
                level: 3,
                features: {
                    3: [
                        { name: "Dread Ambusher", desc: "Voeg WIS modifier toe aan initiative rolls. In de eerste ronde van combat: +10ft walking speed en een extra attack die +1d8 damage doet." },
                        { name: "Umbral Sight", desc: "Je krijgt darkvision 60ft (of +30ft als je al darkvision hebt). Je bent onzichtbaar voor creatures die op darkvision vertrouwen om jou te zien." }
                    ],
                    7: [
                        { name: "Iron Mind", desc: "Je krijgt proficiency in WIS saving throws. Als je dat al hebt, kies INT of CHA saves." }
                    ],
                    11: [
                        { name: "Stalker's Flurry", desc: "Als je mist met een attack, kun je direct een extra attack maken tegen hetzelfde target." }
                    ],
                    15: [
                        { name: "Shadowy Dodge", desc: "Reaction: als een creature een attack roll maakt tegen jou, leg disadvantage op die attack roll." }
                    ]
                }
            }
        }
    },

    // ===== WIZARD CLASS =====
    wizard: {
        hitDie: 6,
        savingThrows: ["int", "wis"],
        skillOptions: ["arcana", "history", "insight", "investigation", "medicine", "religion"],
        skillCount: 2,
        asiLevels: [4, 8, 12, 16, 19],

        // Full caster: uses same spell slot table as sorcerer
        spellcasting: "full",
        spellSlots: {
            1:  [2,0,0,0,0,0,0,0,0],
            2:  [3,0,0,0,0,0,0,0,0],
            3:  [4,2,0,0,0,0,0,0,0],
            4:  [4,3,0,0,0,0,0,0,0],
            5:  [4,3,2,0,0,0,0,0,0],
            6:  [4,3,3,0,0,0,0,0,0],
            7:  [4,3,3,1,0,0,0,0,0],
            8:  [4,3,3,2,0,0,0,0,0],
            9:  [4,3,3,3,1,0,0,0,0],
            10: [4,3,3,3,2,0,0,0,0],
            11: [4,3,3,3,2,1,0,0,0],
            12: [4,3,3,3,2,1,0,0,0],
            13: [4,3,3,3,2,1,1,0,0],
            14: [4,3,3,3,2,1,1,0,0],
            15: [4,3,3,3,2,1,1,1,0],
            16: [4,3,3,3,2,1,1,1,0],
            17: [4,3,3,3,2,1,1,1,1],
            18: [4,3,3,3,3,1,1,1,1],
            19: [4,3,3,3,3,2,1,1,1],
            20: [4,3,3,3,3,2,2,1,1]
        },

        cantripsKnown: { 1:3, 2:3, 3:3, 4:4, 5:4, 6:4, 7:4, 8:4, 9:4, 10:5, 11:5, 12:5, 13:5, 14:5, 15:5, 16:5, 17:5, 18:5, 19:5, 20:5 },
        maxSpellLevel: { 1:1, 2:1, 3:2, 4:2, 5:3, 6:3, 7:4, 8:4, 9:5, 10:5, 11:6, 12:6, 13:7, 14:7, 15:8, 16:8, 17:9, 18:9, 19:9, 20:9 },

        features: {
            1: [
                { name: "Spellcasting", desc: "Cast wizard spells met INT als spellcasting ability. Je bereidt spells voor uit je spellbook: INT mod + wizard level." },
                { name: "Ritual Adept", desc: "Je kunt elke spell in je spellbook als ritual casten als die spell de ritual tag heeft. De spell hoeft niet voorbereid te zijn." },
                { name: "Arcane Recovery", desc: "Eén keer per dag na een short rest: herstel spell slots met een totaal level gelijk aan de helft van je wizard level (afgerond naar boven)." }
            ],
            2: [
                { name: "Scholar", desc: "Je krijgt expertise in een van de volgende skills: Arcana, History, Investigation, Medicine, Nature, of Religion." }
            ],
            3: [
                { name: "Arcane Tradition", desc: "Kies je subclass: een school of magic waarin je specialiseert." }
            ],
            4: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            5: [
                { name: "Memorize Spell", desc: "Na een short rest kun je 1 prepared spell wisselen voor een andere spell uit je spellbook." }
            ],
            8: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            12: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            16: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            18: [
                { name: "Spell Mastery", desc: "Kies een 1st-level en een 2nd-level wizard spell. Je kunt ze casten op hun laagste level zonder een spell slot te gebruiken." }
            ],
            19: [
                { name: "Epic Boon", desc: "Kies een Epic Boon feat. Je ability scores kunnen nu tot 30 stijgen." }
            ],
            20: [
                { name: "Signature Spells", desc: "Kies twee 3rd-level wizard spells. Ze zijn altijd voorbereid en je kunt elk eens per short/long rest casten zonder spell slot." }
            ]
        },

        subclasses: {
            evocation: {
                name: "School of Evocation",
                level: 3,
                features: {
                    3: [
                        { name: "Evocation Savant", desc: "Evocation spells kopiëren naar je spellbook kost half zoveel tijd en goud." },
                        { name: "Sculpt Spells", desc: "Als je een evocation spell cast die andere creatures raakt, kun je tot 1 + spell level creatures kiezen die automatisch slagen op hun save en geen damage nemen." }
                    ],
                    6: [
                        { name: "Potent Cantrip", desc: "Als een creature slaagt op een saving throw tegen je cantrip, neemt het nog steeds de helft van de damage." }
                    ],
                    10: [
                        { name: "Empowered Evocation", desc: "Voeg je INT modifier toe aan de damage van elke evocation spell die je cast." }
                    ],
                    14: [
                        { name: "Overchannel", desc: "Als je een wizard spell van 5th level of lager cast, deal maximum damage. Na het eerste gebruik per long rest neem je 2d12 necrotic damage per spell level (stijgt bij herhaald gebruik)." }
                    ]
                }
            },
            abjuration: {
                name: "School of Abjuration",
                level: 3,
                features: {
                    3: [
                        { name: "Abjuration Savant", desc: "Abjuration spells kopiëren naar je spellbook kost half zoveel tijd en goud." },
                        { name: "Arcane Ward", desc: "Als je een abjuration spell van 1st level+ cast, creëer je een magisch schild met HP = 2x wizard level + INT modifier. Als je meer abjuration spells cast, wordt het schild aangevuld met 2x spell level HP." }
                    ],
                    6: [
                        { name: "Projected Ward", desc: "Als een creature binnen 30ft damage neemt, kun je als reaction je Arcane Ward gebruiken om de damage te absorberen." }
                    ],
                    10: [
                        { name: "Improved Abjuration", desc: "Voeg je proficiency bonus toe aan ability checks voor Counterspell en Dispel Magic." }
                    ],
                    14: [
                        { name: "Spell Resistance", desc: "Je hebt advantage op saving throws tegen spells. Je hebt resistance tegen damage van spells." }
                    ]
                }
            },
            divination: {
                name: "School of Divination",
                level: 3,
                features: {
                    3: [
                        { name: "Divination Savant", desc: "Divination spells kopiëren naar je spellbook kost half zoveel tijd en goud." },
                        { name: "Portent", desc: "Na een long rest: rol 2d20 en noteer de resultaten. Je kunt een opgeslagen roll gebruiken om elke attack roll, saving throw of ability check te vervangen (voor de roll)." }
                    ],
                    6: [
                        { name: "Expert Divination", desc: "Als je een divination spell van 2nd level+ cast, herstel je een spell slot van een lager level dan de gecastte spell." }
                    ],
                    10: [
                        { name: "The Third Eye", desc: "Als action, kies één optie (duurt tot je een short/long rest neemt): darkvision 120ft, ethereal sight 60ft, see invisibility 10ft, of lees elke taal." }
                    ],
                    14: [
                        { name: "Greater Portent", desc: "Je rolt 3d20 voor Portent in plaats van 2d20." }
                    ]
                }
            },
            illusion: {
                name: "School of Illusion",
                level: 3,
                features: {
                    3: [
                        { name: "Illusion Savant", desc: "Illusion spells kopiëren naar je spellbook kost half zoveel tijd en goud." },
                        { name: "Improved Minor Illusion", desc: "Je leert de Minor Illusion cantrip. Je kunt zowel geluid als beeld tegelijk creëren." }
                    ],
                    6: [
                        { name: "Malleable Illusions", desc: "Als action kun je de aard van een illusie die je hebt gecreëerd veranderen (binnen de beperkingen van de spell)." }
                    ],
                    10: [
                        { name: "Illusory Self", desc: "Reaction: als een creature een attack roll tegen je maakt, creëer een illusoire dubbelganger. De aanval mist automatisch. 1x per short/long rest." }
                    ],
                    14: [
                        { name: "Illusory Reality", desc: "Als je een illusion spell van 1st level+ cast, kun je één element van de illusie echt maken voor 1 minuut. Het object kan niet direct damage doen." }
                    ]
                }
            }
        }
    },

    // ===== PALADIN CLASS =====
    paladin: {
        hitDie: 10,
        savingThrows: ["wis", "cha"],
        skillOptions: ["athletics", "insight", "intimidation", "medicine", "persuasion", "religion"],
        skillCount: 2,
        asiLevels: [4, 8, 12, 16, 19],

        // Half caster: uses DATA.halfCasterSlots, starts at level 2
        spellcasting: "half",
        spellcastingStart: 2,

        features: {
            1: [
                { name: "Divine Sense", desc: "Als bonus action, detecteer celestials, fiends en undead binnen 60ft. Je weet het type maar niet de identiteit. Aantal keer = proficiency bonus per long rest." },
                { name: "Lay on Hands", desc: "Je hebt een pool van healing gelijk aan 5x je paladin level. Als action, raak een creature aan en herstel HP uit de pool. 5 HP besteden cured een ziekte of neutraliseert een gif." },
                { name: "Weapon Mastery", desc: "Je beheerst 2 weapon mastery properties. Kies 2 wapens waarmee je de mastery property activeert. Wissel na een long rest." }
            ],
            2: [
                { name: "Fighting Style", desc: "Kies een fighting style: Defense (+1 AC), Dueling (+2 damage met een wapen), Great Weapon Fighting (herrol 1/2 op damage dice), Protection (disadvantage op attack tegen ally met shield)." },
                { name: "Spellcasting", desc: "Cast paladin spells met CHA als spellcasting ability. Voorbereiden: CHA mod + half paladin level." },
                { name: "Divine Smite", desc: "Bonus action spell (1st level+): bij een hit voeg 2d8 radiant damage toe (+1d8 per hoger slot, +1d8 vs undead/fiends, max 5d8). Gelimiteerd tot 1x per beurt. Kan niet stacken met andere Smite spells." }
            ],
            3: [
                { name: "Sacred Oath", desc: "Kies je Sacred Oath. Dit bepaalt je subclass features en Channel Divinity opties." },
                { name: "Channel Divinity", desc: "Je krijgt Channel Divinity opties van je Sacred Oath. Eén gebruik per short/long rest." }
            ],
            4: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            5: [
                { name: "Extra Attack", desc: "Je kunt twee keer aanvallen in plaats van één keer als je de Attack action neemt." },
                { name: "Faithful Steed", desc: "Find Steed is altijd prepared en je kunt het 1x gratis per long rest casten zonder spell slot." }
            ],
            6: [
                { name: "Aura of Protection", desc: "Jij en friendly creatures binnen 10ft krijgen een bonus op saving throws gelijk aan je CHA modifier (min +1). Op level 18 wordt dit 30ft." }
            ],
            8: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            9: [
                { name: "Abjure Foes", desc: "Channel Divinity: creatures naar keuze binnen 60ft maken WIS save of zijn frightened voor 1 minuut. Speed 0 terwijl frightened." }
            ],
            10: [
                { name: "Aura of Courage", desc: "Jij en friendly creatures binnen 10ft kunnen niet frightened zijn terwijl je bij bewustzijn bent. Op level 18 wordt dit 30ft." }
            ],
            11: [
                { name: "Radiant Strikes", desc: "Al je melee weapon attacks doen een extra 1d8 radiant damage." }
            ],
            12: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            14: [
                { name: "Restoring Touch", desc: "Als action via Lay on Hands: beëindig een condition (blinded, charmed, deafened, frightened, paralyzed, stunned) door 5 HP uit je pool te besteden." }
            ],
            16: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            19: [
                { name: "Epic Boon", desc: "Kies een Epic Boon feat. Je ability scores kunnen nu tot 30 stijgen." }
            ]
        },

        subclasses: {
            devotion: {
                name: "Oath of Devotion",
                level: 3,
                features: {
                    3: [
                        { name: "Sacred Weapon", desc: "Channel Divinity: Als action, voeg CHA modifier toe aan attack rolls met één wapen voor 1 minuut. Het wapen geeft ook bright light in 20ft." },
                        { name: "Turn the Unholy", desc: "Channel Divinity: Elk fiend en undead binnen 30ft moet een WIS save doen of is 1 minuut turned." }
                    ],
                    7: [
                        { name: "Aura of Devotion", desc: "Jij en vriendelijke creatures binnen 10ft kunnen niet charmed worden. Op level 18 wordt dit 30ft." }
                    ],
                    15: [
                        { name: "Purity of Spirit", desc: "Je bent altijd onder het effect van Protection from Evil and Good." }
                    ],
                    20: [
                        { name: "Holy Nimbus", desc: "Als action: 1 minuut lang 30ft bright light, vijanden in 10ft nemen 10 radiant damage per beurt. Advantage op saves tegen fiend en undead spells. 1x per long rest." }
                    ]
                }
            },
            ancients: {
                name: "Oath of the Ancients",
                level: 3,
                features: {
                    3: [
                        { name: "Nature's Wrath", desc: "Channel Divinity: een creature naar keuze binnen 10ft moet een STR of DEX save (hun keuze) doen of wordt restrained door spectrale wijnranken tot het slaagt of de spell eindigt." },
                        { name: "Turn the Faithless", desc: "Channel Divinity: elk fey en fiend binnen 30ft moet een WIS save doen of is 1 minuut turned." },
                        { name: "Oath Spells", desc: "Altijd prepared: Ensnaring Strike, Speak with Animals (3rd), Moonbeam, Misty Step (5th), Plant Growth, Protection from Energy (9th), Ice Storm, Stoneskin (13th), Commune with Nature, Tree Stride (17th)." }
                    ],
                    7: [
                        { name: "Aura of Warding", desc: "Jij en friendly creatures binnen 10ft hebben resistance tegen damage van spells. Op level 18 wordt dit 30ft." }
                    ],
                    15: [
                        { name: "Undying Sentinel", desc: "Als je naar 0 HP zou gaan, ga je in plaats daarvan naar 1 HP. 1x per long rest. Je lijdt ook niet onder de nadelen van ouderdom en kunt niet magisch verouderd worden." }
                    ],
                    20: [
                        { name: "Elder Champion", desc: "Als action, transformeer voor 1 minuut: herstel 10 HP aan het begin van elke beurt, paladin spells met casting time 1 action worden bonus action, vijanden binnen 10ft hebben disadvantage op saves tegen jouw spells en Channel Divinity. 1x per long rest." }
                    ]
                }
            },
            glory: {
                name: "Oath of Glory",
                level: 3,
                features: {
                    3: [
                        { name: "Peerless Athlete", desc: "Channel Divinity: als bonus action, +10ft jump distance, advantage op Athletics en Acrobatics checks voor 10 minuten." },
                        { name: "Inspiring Smite", desc: "Channel Divinity: direct na een Divine Smite, verdeel temp HP gelijk aan 2d8 + paladin level over creatures naar keuze binnen 30ft." },
                        { name: "Oath Spells", desc: "Altijd prepared: Guiding Bolt, Heroism (3rd), Enhance Ability, Magic Weapon (5th), Haste, Protection from Energy (9th), Compulsion, Freedom of Movement (13th), Commune, Flame Strike (17th)." }
                    ],
                    7: [
                        { name: "Aura of Alacrity", desc: "Jij en friendly creatures binnen 10ft krijgen +10ft walking speed. Op level 18 wordt dit 30ft." }
                    ],
                    15: [
                        { name: "Glorious Defense", desc: "Reaction: als een creature binnen 10ft geraakt wordt door een attack, voeg je CHA modifier toe aan de AC van het target. Als de attack daardoor mist, mag je een weapon attack maken tegen de aanvaller." }
                    ],
                    20: [
                        { name: "Living Legend", desc: "Als bonus action voor 1 minuut: advantage op CHA checks, een gemiste weapon attack wordt 1x per beurt een hit, advantage op saving throws tegen spells. 1x per long rest." }
                    ]
                }
            },
            vengeance: {
                name: "Oath of Vengeance",
                level: 3,
                features: {
                    3: [
                        { name: "Abjure Enemy", desc: "Channel Divinity: kies een creature binnen 60ft, WIS save of frightened voor 1 minuut met speed 0. Fiends en undead hebben disadvantage op de save." },
                        { name: "Vow of Enmity", desc: "Channel Divinity: als bonus action, kies een creature binnen 10ft. Je hebt advantage op attack rolls tegen dat creature voor 1 minuut." },
                        { name: "Oath Spells", desc: "Altijd prepared: Bane, Hunter's Mark (3rd), Hold Person, Misty Step (5th), Haste, Protection from Energy (9th), Banishment, Dimension Door (13th), Hold Monster, Scrying (17th)." }
                    ],
                    7: [
                        { name: "Relentless Avenger", desc: "Als je een creature raakt met een opportunity attack, kun je daarna tot de helft van je speed bewegen als onderdeel van dezelfde reaction." }
                    ],
                    15: [
                        { name: "Soul of Vengeance", desc: "Als een creature waarop je Vow of Enmity actief is een attack maakt, kun je als reaction een melee weapon attack maken tegen dat creature." }
                    ],
                    20: [
                        { name: "Avenging Angel", desc: "Als action, transformeer voor 1 uur: je krijgt vleugels (fly speed 60ft) en een 30ft aura. Vijanden die de aura voor het eerst betreden of hun beurt erin beginnen: WIS save of frightened voor 1 minuut. 1x per long rest." }
                    ]
                }
            }
        }
    },

    // ===== DRUID CLASS =====
    druid: {
        hitDie: 8,
        savingThrows: ["int", "wis"],
        skillOptions: ["arcana", "animal handling", "insight", "medicine", "nature", "perception", "religion", "survival"],
        skillCount: 2,
        asiLevels: [4, 8, 12, 16, 19],

        // Full caster
        spellcasting: "full",
        spellSlots: {
            1:  [2,0,0,0,0,0,0,0,0],
            2:  [3,0,0,0,0,0,0,0,0],
            3:  [4,2,0,0,0,0,0,0,0],
            4:  [4,3,0,0,0,0,0,0,0],
            5:  [4,3,2,0,0,0,0,0,0],
            6:  [4,3,3,0,0,0,0,0,0],
            7:  [4,3,3,1,0,0,0,0,0],
            8:  [4,3,3,2,0,0,0,0,0],
            9:  [4,3,3,3,1,0,0,0,0],
            10: [4,3,3,3,2,0,0,0,0],
            11: [4,3,3,3,2,1,0,0,0],
            12: [4,3,3,3,2,1,0,0,0],
            13: [4,3,3,3,2,1,1,0,0],
            14: [4,3,3,3,2,1,1,0,0],
            15: [4,3,3,3,2,1,1,1,0],
            16: [4,3,3,3,2,1,1,1,0],
            17: [4,3,3,3,2,1,1,1,1],
            18: [4,3,3,3,3,1,1,1,1],
            19: [4,3,3,3,3,2,1,1,1],
            20: [4,3,3,3,3,2,2,1,1]
        },

        cantripsKnown: { 1:4, 2:4, 3:4, 4:5, 5:5, 6:5, 7:5, 8:5, 9:5, 10:6, 11:6, 12:6, 13:6, 14:6, 15:6, 16:6, 17:6, 18:6, 19:6, 20:6 },
        maxSpellLevel: { 1:1, 2:1, 3:2, 4:2, 5:3, 6:3, 7:4, 8:4, 9:5, 10:5, 11:6, 12:6, 13:7, 14:7, 15:8, 16:8, 17:9, 18:9, 19:9, 20:9 },

        features: {
            1: [
                { name: "Druidic", desc: "Je kent Druidic, de geheime taal van druids. Je kunt verborgen berichten achterlaten die alleen andere druids begrijpen." },
                { name: "Spellcasting", desc: "Cast druid spells met WIS als spellcasting ability. Voorbereiden: WIS mod + druid level." }
            ],
            2: [
                { name: "Wild Shape", desc: "Als bonus action, transformeer in een beast. Je kunt praten in beast form. Je kent een aantal beast forms die je kunt wisselen na een long rest. Uses = proficiency bonus per long rest." },
                { name: "Wild Companion", desc: "Besteed een gebruik van Wild Shape om Find Familiar te casten zonder materiaalcomponenten." }
            ],
            3: [
                { name: "Druid Subclass", desc: "Kies je Druid Circle, je subclass die bepaalt hoe je de natuur benadert." }
            ],
            4: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            5: [
                { name: "Wild Resurgence", desc: "Besteed 1 gebruik van Wild Shape om een expended spell slot te herstellen (max 3rd level). 1x per long rest." }
            ],
            7: [
                { name: "Elemental Fury", desc: "Eén keer per beurt als je een melee attack raakt in Wild Shape of met een weapon: voeg 1d6 extra damage toe van een gekozen element." }
            ],
            8: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            12: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            16: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            19: [
                { name: "Epic Boon", desc: "Kies een Epic Boon feat. Je ability scores kunnen nu tot 30 stijgen." }
            ]
        },

        subclasses: {
            land: {
                name: "Circle of the Land",
                level: 3,
                features: {
                    3: [
                        { name: "Bonus Cantrip", desc: "Je leert één extra druid cantrip naar keuze." },
                        { name: "Natural Recovery", desc: "Tijdens een short rest kun je spell slots herstellen. Het totale level van de slots mag niet hoger zijn dan de helft van je druid level (afgerond naar boven), en geen slots van 6th level of hoger." }
                    ],
                    6: [
                        { name: "Land's Stride", desc: "Bewegen door nonmagical difficult terrain kost geen extra movement. Je kunt ook door nonmagical plants bewegen zonder vertraagd te worden of damage te nemen." }
                    ],
                    10: [
                        { name: "Nature's Ward", desc: "Je bent immuun voor poison en disease. Je kunt niet charmed of frightened worden door elementals of fey." }
                    ],
                    14: [
                        { name: "Nature's Sanctuary", desc: "Creatures van het elemental of fey type die jou aanvallen moeten een WIS save doen. Bij een fail moeten ze een ander target kiezen of de aanval mist automatisch." }
                    ]
                }
            },
            moon: {
                name: "Circle of the Moon",
                level: 3,
                features: {
                    3: [
                        { name: "Combat Wild Shape", desc: "Wild Shape als bonus action in plaats van action. Als je transformeert, herstel 1d8 x proficiency bonus HP." },
                        { name: "Circle Forms", desc: "Je kunt transformeren in beasts met hogere CR dan normaal (CR = druid level / 3, afgerond naar beneden). Op hogere levels kun je ook elementals worden." }
                    ],
                    6: [
                        { name: "Primal Strike", desc: "Je aanvallen in Wild Shape tellen als magical voor het overwinnen van resistance en immunity." }
                    ],
                    10: [
                        { name: "Elemental Wild Shape", desc: "Besteed 2 Wild Shape uses om te transformeren in een Earth, Water, Fire of Air Elemental." }
                    ],
                    14: [
                        { name: "Thousand Forms", desc: "Cast Alter Self at will, zonder spell slot." }
                    ]
                }
            },
            sea: {
                name: "Circle of the Sea",
                level: 3,
                features: {
                    3: [
                        { name: "Wrath of the Sea", desc: "Na het casten van een spell: push een creature binnen 5ft 5ft weg, of geef een ally binnen 5ft temp HP gelijk aan je WIS modifier." },
                        { name: "Ocean's Gift", desc: "Je krijgt een swim speed van 30ft en kunt onder water ademen." }
                    ],
                    6: [
                        { name: "Aquatic Adaptation", desc: "Resistance tegen cold damage. Je kunt zee-creatures oproepen met conjuration spells." }
                    ],
                    10: [
                        { name: "Stormborn", desc: "Je krijgt fly speed tijdens regen of onderwater combat. Je kunt bliksem aanroepen als aanvullende aanval." }
                    ],
                    14: [
                        { name: "Oceanic Form", desc: "Als bonus action: beweeg door creatures en objecten alsof het difficult terrain is." }
                    ]
                }
            },
            stars: {
                name: "Circle of Stars",
                level: 3,
                features: {
                    3: [
                        { name: "Star Map", desc: "Je krijgt Guiding Bolt als bonus spell. Je kunt het gratis casten een aantal keer gelijk aan je proficiency bonus per long rest." },
                        { name: "Starry Form", desc: "Als bonus action (of bij Wild Shape): activeer een sterrenbeeld. Archer: bonus action ranged attack +1d8 radiant (60ft). Chalice: als je een healing spell cast, heal een creature binnen 30ft voor 1d8 + WIS mod. Dragon: behandel rolls van 9 of lager als 10 op concentration saves." }
                    ],
                    6: [
                        { name: "Cosmic Omen", desc: "Na een long rest: rol een d6. Even = Weal (reaction: voeg 1d6 toe aan een roll van een creature binnen 30ft). Oneven = Woe (reaction: trek 1d6 af van een roll van een vijand binnen 30ft). Uses = proficiency bonus per long rest." }
                    ],
                    10: [
                        { name: "Twinkling Constellations", desc: "Je kunt aan het begin van elke beurt wisselen van Starry Form. Archer en Chalice worden 2d8 in plaats van 1d8." }
                    ],
                    14: [
                        { name: "Full of Stars", desc: "Terwijl je in Starry Form bent: resistance tegen bludgeoning, piercing en slashing damage." }
                    ]
                }
            }
        }
    },

    // ===== FIGHTER CLASS =====
    fighter: {
        hitDie: 10,
        savingThrows: ["str", "con"],
        skillOptions: ["acrobatics", "animal handling", "athletics", "history", "insight", "intimidation", "perception", "survival"],
        skillCount: 2,
        asiLevels: [4, 6, 8, 12, 14, 16, 19],

        // No spellcasting by default (Eldritch Knight subclass adds it)
        spellcasting: "none",

        features: {
            1: [
                { name: "Fighting Style", desc: "Kies een fighting style: Archery, Defense, Dueling, Great Weapon Fighting, Protection, Two-Weapon Fighting, etc." },
                { name: "Second Wind", desc: "Bonus action: herstel 1d10 + fighter level HP. Aantal keer = proficiency bonus per long rest." },
                { name: "Weapon Mastery", desc: "Je beheerst 3 weapon mastery properties. Kies 3 wapens waarmee je de mastery property activeert. Wissel na een long rest." }
            ],
            2: [
                { name: "Action Surge", desc: "Eén keer per short/long rest neem je een extra action bovenop je normale action. Op level 17 krijg je twee gebruiken." },
                { name: "Tactical Mind", desc: "Als je faalt op een ability check, voeg je Second Wind die toe aan het resultaat (verbruikt 1 gebruik)." }
            ],
            3: [
                { name: "Martial Archetype", desc: "Kies je subclass: dit bepaalt je vechtspecialisatie." }
            ],
            4: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            5: [
                { name: "Extra Attack", desc: "Je kunt twee keer aanvallen in plaats van één keer als je de Attack action neemt." },
                { name: "Tactical Shift", desc: "Als je Second Wind gebruikt, kun je de helft van je speed bewegen zonder opportunity attacks uit te lokken." }
            ],
            6: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            8: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            9: [
                { name: "Indomitable", desc: "Herrol een gefaalde saving throw en neem het hogere resultaat. Eén keer per long rest. Op level 13: twee keer, level 17: drie keer." },
                { name: "Tactical Master", desc: "Je kunt de weapon mastery property van een wapen verwisselen met een andere property van een wapen dat je beheerst (1x per beurt)." }
            ],
            11: [
                { name: "Extra Attack (2)", desc: "Je kunt drie keer aanvallen in plaats van twee keer als je de Attack action neemt." }
            ],
            12: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            13: [
                { name: "Studied Attacks", desc: "Als je een attack mist, heb je advantage op je volgende attack tegen hetzelfde target voor het einde van je volgende beurt." }
            ],
            14: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            16: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            19: [
                { name: "Epic Boon", desc: "Kies een Epic Boon feat. Je ability scores kunnen nu tot 30 stijgen." }
            ],
            20: [
                { name: "Extra Attack (3)", desc: "Je kunt vier keer aanvallen in plaats van drie keer als je de Attack action neemt." }
            ]
        },

        subclasses: {
            champion: {
                name: "Champion",
                level: 3,
                features: {
                    3: [
                        { name: "Improved Critical", desc: "Je scoort een critical hit op een roll van 19 of 20." }
                    ],
                    7: [
                        { name: "Remarkable Athlete", desc: "Voeg de helft van je proficiency bonus (afgerond naar boven) toe aan STR, DEX, en CON checks waar je nog geen proficiency hebt. Je running long jump afstand stijgt met je STR modifier in feet." }
                    ],
                    10: [
                        { name: "Additional Fighting Style", desc: "Kies een tweede Fighting Style." }
                    ],
                    15: [
                        { name: "Superior Critical", desc: "Je scoort een critical hit op een roll van 18, 19 of 20." }
                    ],
                    18: [
                        { name: "Survivor", desc: "Aan het begin van elk van je beurten, als je minder dan de helft van je max HP hebt maar meer dan 0, herstel je 5 + CON modifier HP." }
                    ]
                }
            },
            battleMaster: {
                name: "Battle Master",
                level: 3,
                features: {
                    3: [
                        { name: "Combat Superiority", desc: "Je krijgt 4 superiority dice (d8). Leer 3 maneuvers uit: Commander's Strike, Disarming Attack, Distracting Strike, Evasive Footwork, Feinting Attack, Goading Attack, Lunging Attack, Maneuvering Attack, Menacing Attack, Parry, Precision Attack, Pushing Attack, Rally, Riposte, Sweeping Attack, Trip Attack. Dice herstellen na een short/long rest." },
                        { name: "Student of War", desc: "Je krijgt proficiency met een type artisan's tools naar keuze." }
                    ],
                    7: [
                        { name: "Know Your Enemy", desc: "Bestudeer een creature voor 1 minuut. Je leert of het gelijk, superieur of inferieur aan jou is in twee eigenschappen naar keuze (STR, DEX, CON, AC, huidige HP, totale class levels, fighter levels)." }
                    ],
                    10: [
                        { name: "Improved Combat Superiority", desc: "Je superiority dice worden d10." }
                    ],
                    15: [
                        { name: "Relentless", desc: "Als je rolt voor initiative en geen superiority dice over hebt, krijg je er 1 terug." }
                    ],
                    18: [
                        { name: "Ultimate Combat Superiority", desc: "Je superiority dice worden d12." }
                    ]
                }
            },
            eldritchKnight: {
                name: "Eldritch Knight",
                level: 3,
                features: {
                    3: [
                        { name: "Spellcasting", desc: "Je kunt wizard spells casten (abjuration/evocation focus) met INT als spellcasting ability. Third caster: langzamere spell slot progressie." },
                        { name: "War Bond", desc: "Bond met een wapen via een 1-uur ritueel. Je kunt niet ontwapend worden en kunt het als bonus action naar je hand teleporteren. Je kunt met maximaal 2 wapens gebonden zijn." }
                    ],
                    7: [
                        { name: "War Magic", desc: "Als je een cantrip cast, kun je als bonus action één weapon attack maken." }
                    ],
                    10: [
                        { name: "Eldritch Strike", desc: "Als je een creature raakt met een weapon attack, heeft dat creature disadvantage op de volgende saving throw tegen een spell die je cast voor het einde van je volgende beurt." }
                    ],
                    15: [
                        { name: "Arcane Charge", desc: "Als je Action Surge gebruikt, kun je teleporteren tot 30ft naar een onbezette ruimte die je kunt zien (voor of na de extra action)." }
                    ],
                    18: [
                        { name: "Improved War Magic", desc: "Als je een spell van 1st of 2nd level cast, kun je als bonus action één weapon attack maken." }
                    ]
                }
            },
            psiWarrior: {
                name: "Psi Warrior",
                level: 3,
                features: {
                    3: [
                        { name: "Psionic Power", desc: "Je krijgt Psionic Energy dice (d6, 2x proficiency bonus uses per long rest). Besteed ze voor: Protective Field (reaction: verminder damage aan jezelf of ally binnen 30ft met die + INT mod), Psionic Strike (1x/beurt bij hit: +die force damage), Telekinetic Movement (action: beweeg een Large of kleiner object of willing creature tot 30ft)." }
                    ],
                    7: [
                        { name: "Telekinetic Adept", desc: "Telekinetic Thrust: als je Psionic Strike damage doet, kun je het target forceren een STR save te doen of het wordt 10ft gepusht en knocked prone." }
                    ],
                    10: [
                        { name: "Guarded Mind", desc: "Resistance tegen psychic damage. Besteed een Psionic Energy die om charmed of frightened condition te beëindigen op jezelf." }
                    ],
                    15: [
                        { name: "Bulwark of Force", desc: "Bonus action: een aantal creatures gelijk aan je proficiency bonus binnen 30ft krijgen half cover (+2 AC en DEX saves) voor 1 minuut of tot je incapacitated bent." }
                    ],
                    18: [
                        { name: "Telekinetic Master", desc: "Cast Telekinesis 1x per long rest zonder spell slot (INT is je spellcasting ability)." }
                    ]
                }
            }
        }
    },

    // ===== WARLOCK CLASS =====
    warlock: {
        hitDie: 8,
        savingThrows: ["wis", "cha"],
        skillOptions: ["arcana", "deception", "history", "intimidation", "investigation", "nature", "religion"],
        skillCount: 2,
        asiLevels: [4, 8, 12, 16, 19],

        // Pact Magic: different from regular spellcasting
        spellcasting: "pact",
        pactSlots: { 1:1, 2:2, 3:2, 4:2, 5:2, 6:2, 7:2, 8:2, 9:2, 10:2, 11:3, 12:3, 13:3, 14:3, 15:3, 16:3, 17:4, 18:4, 19:4, 20:4 },
        pactSlotLevel: { 1:1, 2:1, 3:2, 4:2, 5:3, 6:3, 7:4, 8:4, 9:5, 10:5, 11:5, 12:5, 13:5, 14:5, 15:5, 16:5, 17:5, 18:5, 19:5, 20:5 },
        cantripsKnown: { 1:2, 2:2, 3:2, 4:3, 5:3, 6:3, 7:3, 8:3, 9:3, 10:4, 11:4, 12:4, 13:4, 14:4, 15:4, 16:4, 17:4, 18:4, 19:4, 20:4 },
        // Mystic Arcanum: 1 spell each of these levels, castable 1x per long rest
        mysticArcanum: { 11: 6, 13: 7, 15: 8, 17: 9 },

        features: {
            1: [
                { name: "Pact Magic", desc: "Cast warlock spells met CHA als spellcasting ability. Je spell slots zijn altijd van hetzelfde level en herstellen na een short rest." }
            ],
            2: [
                { name: "Eldritch Invocations", desc: "Kies 2 Eldritch Invocations: speciale magische vaardigheden die je cantrips en abilities verbeteren. Je leert meer op hogere levels." },
                { name: "Magical Cunning", desc: "Besteed 1 minuut om de helft van je expended Pact Magic spell slots te herstellen (afgerond naar boven). 1x per long rest." }
            ],
            3: [
                { name: "Warlock Subclass", desc: "Kies je Otherworldly Patron. Dit bepaalt je subclass features." },
                { name: "Pact Magic Improvement", desc: "Pact Boons zijn nu beschikbaar als Eldritch Invocations (Pact of the Blade, Chain, Tome). Kies via je invocations." }
            ],
            4: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            8: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            9: [
                { name: "Contact Patron", desc: "Cast Contact Other Plane 1x per long rest gratis om je patron te raadplegen. Je faalt automatisch niet op de INT save." }
            ],
            11: [
                { name: "Mystic Arcanum (6th)", desc: "Kies een 6th-level warlock spell. Je kunt die eens per long rest casten zonder een spell slot. Op hogere levels krijg je 7th, 8th en 9th level Arcanum." }
            ],
            12: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            13: [
                { name: "Mystic Arcanum (7th)", desc: "Kies een 7th-level warlock spell. Je kunt die eens per long rest casten zonder een spell slot." }
            ],
            15: [
                { name: "Mystic Arcanum (8th)", desc: "Kies een 8th-level warlock spell. Je kunt die eens per long rest casten zonder een spell slot." }
            ],
            16: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            17: [
                { name: "Mystic Arcanum (9th)", desc: "Kies een 9th-level warlock spell. Je kunt die eens per long rest casten zonder een spell slot." }
            ],
            19: [
                { name: "Epic Boon", desc: "Kies een Epic Boon feat. Je ability scores kunnen nu tot 30 stijgen." }
            ],
            20: [
                { name: "Eldritch Master", desc: "Eén keer per long rest kun je 1 minuut besteden om alle Pact Magic spell slots te herstellen." }
            ]
        },

        subclasses: {
            fiend: {
                name: "The Fiend",
                level: 3,
                features: {
                    3: [
                        { name: "Dark One's Blessing", desc: "Als je een hostile creature naar 0 HP brengt, krijg je CHA modifier + warlock level temporary HP." }
                    ],
                    6: [
                        { name: "Dark One's Own Luck", desc: "Eén keer per short/long rest: voeg 1d10 toe aan een ability check of saving throw." }
                    ],
                    10: [
                        { name: "Fiendish Resilience", desc: "Na een short/long rest: kies één damage type. Je hebt resistance tegen dat type tot je een ander type kiest. Dit werkt niet tegen magical of silver weapons." }
                    ],
                    14: [
                        { name: "Hurl Through Hell", desc: "Als je een creature raakt met een aanval, kun je het teleporteren door de Lower Planes. Het verdwijnt tot het einde van je volgende beurt en neemt 10d10 psychic damage. 1x per long rest." }
                    ]
                }
            },
            archfey: {
                name: "The Archfey",
                level: 3,
                features: {
                    3: [
                        { name: "Fey Presence", desc: "Als action: elk creature in een 10ft kubus vanuit jou moet een WIS save doen of is charmed of frightened (jouw keuze) tot het einde van je volgende beurt. 1x per short/long rest." }
                    ],
                    6: [
                        { name: "Misty Escape", desc: "Reaction als je damage neemt: word onzichtbaar en teleporteer tot 60ft. Je bent onzichtbaar tot het begin van je volgende beurt of tot je aanvalt/een spell cast. 1x per short/long rest." }
                    ],
                    10: [
                        { name: "Beguiling Defenses", desc: "Je bent immuun voor de charmed condition. Reaction: als iemand probeert je te charmen, charm dat creature voor 1 minuut (WIS save beëindigt)." }
                    ],
                    14: [
                        { name: "Dark Delirium", desc: "Als action: een creature binnen 60ft moet een WIS save doen of is charmed of frightened (jouw keuze) in een illusoir rijk voor 1 minuut. Het creature kan elke beurt opnieuw saven. 1x per short/long rest." }
                    ]
                }
            },
            celestial: {
                name: "The Celestial",
                level: 3,
                features: {
                    3: [
                        { name: "Healing Light", desc: "Bonus action: je hebt een pool van d6s (1 + warlock level). Heal een creature binnen 60ft door 1-5 dice uit de pool te besteden. Pool herstelt na een long rest." },
                        { name: "Bonus Cantrips", desc: "Je leert Light en Sacred Flame cantrips. Ze tellen niet mee voor je cantrips known." },
                        { name: "Celestial Spells", desc: "Expanded spell list: Cure Wounds, Guiding Bolt (1st), Flaming Sphere, Lesser Restoration (2nd), Daylight, Revivify (3rd), Guardian of Faith, Wall of Fire (4th), Flame Strike, Greater Restoration (5th)." }
                    ],
                    6: [
                        { name: "Radiant Soul", desc: "Resistance tegen radiant damage. Als je fire of radiant damage doet met een spell, voeg je CHA modifier toe aan één damage roll." }
                    ],
                    10: [
                        { name: "Celestial Resilience", desc: "Bij het voltooien van een short of long rest: jij krijgt temp HP gelijk aan warlock level + CHA modifier, en tot 5 andere creatures naar keuze krijgen de helft daarvan." }
                    ],
                    14: [
                        { name: "Searing Vengeance", desc: "Aan het begin van je beurt terwijl je op 0 HP bent: sta op met de helft van je max HP. Creatures naar keuze binnen 30ft nemen 2d8 + CHA modifier radiant damage en zijn blinded tot het einde van je huidige beurt. 1x per long rest." }
                    ]
                }
            },
            greatOldOne: {
                name: "The Great Old One",
                level: 3,
                features: {
                    3: [
                        { name: "Awakened Mind", desc: "Je kunt telepathisch communiceren met elk creature binnen 30ft dat je kunt zien. Je hoeft geen gemeenschappelijke taal te delen." },
                        { name: "Psychic Spells", desc: "Expanded spell list: Dissonant Whispers, Tasha's Hideous Laughter (1st), Detect Thoughts, Phantasmal Force (2nd), Clairvoyance, Sending (3rd), Dominate Beast, Evard's Black Tentacles (4th), Dominate Person, Telekinesis (5th)." }
                    ],
                    6: [
                        { name: "Entropic Ward", desc: "Reaction: als een creature een attack roll tegen je maakt, leg disadvantage op de roll. Als de aanval mist, heb je advantage op je volgende attack roll tegen dat creature voor het einde van je volgende beurt. 1x per short/long rest." }
                    ],
                    10: [
                        { name: "Thought Shield", desc: "Resistance tegen psychic damage. Als een creature je psychic damage doet, neemt het evenveel damage. Je gedachten kunnen niet gelezen worden door telepathie tenzij je het toestaat." }
                    ],
                    14: [
                        { name: "Create Thrall", desc: "Raak een incapacitated humanoid aan: het is indefinitely charmed door jou. Je hebt een telepathische band met het creature zolang jullie op hetzelfde vlak zijn." }
                    ]
                }
            }
        }
    },

    // ===== BARBARIAN CLASS (5.5e / 2024) =====
    barbarian: {
        hitDie: 12,
        savingThrows: ["str", "con"],
        skillOptions: ["animal handling", "athletics", "intimidation", "nature", "perception", "survival"],
        skillCount: 2,
        asiLevels: [4, 8, 12, 16, 19],
        spellcasting: "none",

        rages: { 1:2, 2:2, 3:3, 4:3, 5:3, 6:4, 7:4, 8:4, 9:4, 10:4, 11:4, 12:5, 13:5, 14:5, 15:5, 16:5, 17:6, 18:6, 19:6, 20:6 },
        rageDamage: { 1:2, 2:2, 3:2, 4:2, 5:2, 6:2, 7:2, 8:2, 9:3, 10:3, 11:3, 12:3, 13:3, 14:3, 15:3, 16:4, 17:4, 18:4, 19:4, 20:4 },

        features: {
            1: [
                { name: "Rage", desc: "Bonus action: ga in Rage voor 10 minuten. +2-4 melee damage (STR-based), resistance tegen B/P/S damage, advantage op STR checks/saves. Eindigt niet vroegtijdig. Uses per long rest schalen met level." },
                { name: "Unarmored Defense", desc: "Zonder armor: AC = 10 + DEX mod + CON mod. Shield mag." },
                { name: "Weapon Mastery", desc: "Je beheerst 2 weapon mastery properties. Kies 2 melee wapens waarmee je de mastery property activeert." }
            ],
            2: [
                { name: "Danger Sense", desc: "Advantage op DEX saving throws tegen effecten die je kunt zien (traps, spells, etc.). Werkt niet als je blinded, deafened of incapacitated bent." },
                { name: "Reckless Attack", desc: "Bij je eerste attack van je beurt: kies advantage op alle STR melee attacks deze beurt. Aanvallen tegen jou hebben ook advantage tot je volgende beurt." }
            ],
            3: [
                { name: "Primal Path", desc: "Kies je subclass: dit bepaalt hoe je rage zich manifesteert." }
            ],
            4: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            5: [
                { name: "Extra Attack", desc: "Je kunt twee keer aanvallen in plaats van één keer als je de Attack action neemt." },
                { name: "Fast Movement", desc: "+10ft speed als je geen heavy armor draagt." }
            ],
            7: [
                { name: "Feral Instinct", desc: "Advantage op initiative rolls. Als je surprised bent en rage begint, handel je normaal." }
            ],
            8: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            9: [
                { name: "Brutal Strike", desc: "Vervang Reckless Attack advantage voor extra effecten: Forceful Blow (1d10 extra + push 15ft), Hamstring Blow (1d10 extra + -15ft speed)." }
            ],
            11: [
                { name: "Relentless Rage", desc: "Als je op 0 HP gaat terwijl je raging, maak een CON save (DC 10, stijgt +5 per gebruik) om naar 1 HP te gaan." }
            ],
            12: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            15: [
                { name: "Persistent Rage", desc: "Je rage eindigt alleen als je onbewust bent of ervoor kiest om te stoppen." }
            ],
            16: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            18: [
                { name: "Indomitable Might", desc: "Als je STR check lager is dan je STR score, gebruik je STR score in plaats van de roll." }
            ],
            19: [
                { name: "Epic Boon", desc: "Kies een Epic Boon feat. Je ability scores kunnen nu tot 30 stijgen." }
            ],
            20: [
                { name: "Primal Champion", desc: "STR en CON stijgen elk met 4. Maximum wordt 25." }
            ]
        },

        subclasses: {
            berserker: {
                name: "Path of the Berserker",
                level: 3,
                features: {
                    3: [
                        { name: "Frenzy", desc: "Tijdens Rage kun je Frenzy activeren: maak één extra melee attack als bonus action elke beurt. Veroorzaakt GEEN exhaustion meer (5.5e wijziging)." }
                    ],
                    6: [
                        { name: "Mindless Rage", desc: "Je kunt niet charmed of frightened worden terwijl je raging. Als je al charmed/frightened bent, wordt het opgeschort." }
                    ],
                    10: [
                        { name: "Retaliation", desc: "Als een creature je damage doet terwijl je raging: reaction melee attack tegen dat creature (als het binnen bereik is)." }
                    ],
                    14: [
                        { name: "Intimidating Presence", desc: "Als bonus action, kies een creature binnen 30ft: WIS save of frightened voor 1 minuut. Target kan elke beurt opnieuw saven." }
                    ]
                }
            },
            wildHeart: {
                name: "Path of the Wild Heart",
                level: 3,
                features: {
                    3: [
                        { name: "Totem Spirit", desc: "Kies een totem: Bear (resistance tegen alle damage behalve psychic tijdens rage), Eagle (vijanden hebben disadvantage op opportunity attacks tegen jou, Dash als bonus action), of Wolf (allies hebben advantage op melee attacks tegen vijanden binnen 5ft van jou tijdens rage)." }
                    ],
                    6: [
                        { name: "Aspect of the Beast", desc: "Kies: Bear (dubbele carry capacity, advantage op STR checks voor duwen/trekken), Eagle (zie tot 1 mijl ver, geen disadvantage op Perception), of Wolf (track op fast pace, stealth op normal pace)." }
                    ],
                    10: [
                        { name: "Spirit Walker", desc: "Cast Commune with Nature als ritual." }
                    ],
                    14: [
                        { name: "Totemic Attunement", desc: "Kies: Bear (tijdens rage, vijanden binnen 5ft hebben disadvantage op attacks tegen je allies), Eagle (fly speed gelijk aan walking speed tijdens rage), of Wolf (tijdens rage, bonus action: knock een Large of kleiner creature prone bij een hit)." }
                    ]
                }
            },
            worldTree: {
                name: "Path of the World Tree",
                level: 3,
                features: {
                    3: [
                        { name: "Vitality of the Tree", desc: "Tijdens rage: aan het begin van elke beurt krijg je temp HP gelijk aan je proficiency bonus + je Hit Die." }
                    ],
                    6: [
                        { name: "Branches of the Tree", desc: "Tijdens rage, als bonus action: teleporteer een willing creature dat je kunt zien binnen 60ft naar een onbezette ruimte binnen 5ft van jou." }
                    ],
                    10: [
                        { name: "Battering Roots", desc: "Tijdens rage: de grond binnen 15ft van jou is difficult terrain voor vijanden." }
                    ],
                    14: [
                        { name: "Travel Along the Tree", desc: "Tijdens rage, als bonus action: teleporteer tot 60ft naar een onbezette ruimte die je kunt zien. Je kunt één willing creature meenemen." }
                    ]
                }
            },
            zealot: {
                name: "Path of the Zealot",
                level: 3,
                features: {
                    3: [
                        { name: "Divine Fury", desc: "De eerste keer dat je een creature raakt elke beurt tijdens rage: +1d6 necrotic of radiant damage (jouw keuze bij het kiezen van dit pad). Schaaltt met level." },
                        { name: "Warrior of the Gods", desc: "Als je sterft, vereisen spells om je te reviven geen materiaalcomponenten." }
                    ],
                    6: [
                        { name: "Fanatical Focus", desc: "Als je faalt op een saving throw tijdens rage: herrol 1x per rage en neem het nieuwe resultaat." }
                    ],
                    10: [
                        { name: "Zealous Presence", desc: "Bonus action: tot 10 allies binnen 60ft krijgen advantage op attack rolls en saving throws tot het begin van je volgende beurt. 1x per long rest." }
                    ],
                    14: [
                        { name: "Rage Beyond Death", desc: "Tijdens rage ga je niet dood op 0 HP. Je maakt nog steeds death saves en neemt damage normaal. Als je rage eindigt terwijl je op 0 HP bent, sterf je." }
                    ]
                }
            }
        }
    },

    // ===== BARD CLASS (5.5e / 2024) =====
    bard: {
        hitDie: 8,
        savingThrows: ["dex", "cha"],
        skillOptions: ["any"],
        skillCount: 3,
        asiLevels: [4, 8, 12, 16, 19],

        spellcasting: "full",
        spellSlots: {
            1:  [2,0,0,0,0,0,0,0,0],
            2:  [3,0,0,0,0,0,0,0,0],
            3:  [4,2,0,0,0,0,0,0,0],
            4:  [4,3,0,0,0,0,0,0,0],
            5:  [4,3,2,0,0,0,0,0,0],
            6:  [4,3,3,0,0,0,0,0,0],
            7:  [4,3,3,1,0,0,0,0,0],
            8:  [4,3,3,2,0,0,0,0,0],
            9:  [4,3,3,3,1,0,0,0,0],
            10: [4,3,3,3,2,0,0,0,0],
            11: [4,3,3,3,2,1,0,0,0],
            12: [4,3,3,3,2,1,0,0,0],
            13: [4,3,3,3,2,1,1,0,0],
            14: [4,3,3,3,2,1,1,0,0],
            15: [4,3,3,3,2,1,1,1,0],
            16: [4,3,3,3,2,1,1,1,0],
            17: [4,3,3,3,2,1,1,1,1],
            18: [4,3,3,3,3,1,1,1,1],
            19: [4,3,3,3,3,2,1,1,1],
            20: [4,3,3,3,3,2,2,1,1]
        },

        cantripsKnown: { 1:2, 2:2, 3:2, 4:3, 5:3, 6:3, 7:3, 8:3, 9:3, 10:4, 11:4, 12:4, 13:4, 14:4, 15:4, 16:4, 17:4, 18:4, 19:4, 20:4 },
        maxSpellLevel: { 1:1, 2:1, 3:2, 4:2, 5:3, 6:3, 7:4, 8:4, 9:5, 10:5, 11:6, 12:6, 13:7, 14:7, 15:8, 16:8, 17:9, 18:9, 19:9, 20:9 },

        features: {
            1: [
                { name: "Spellcasting", desc: "Cast bard spells met CHA als spellcasting ability. Je bereidt spells voor: CHA mod + bard level. Wissel 1 spell per level-up." },
                { name: "Bardic Inspiration", desc: "Bonus action: geef een creature binnen 60ft een Bardic Inspiration die (d6, stijgt op hogere levels). Creature voegt de die toe aan een attack roll, ability check of saving throw. Duurt 1 uur. Uses = CHA mod per long rest." }
            ],
            2: [
                { name: "Jack of All Trades", desc: "Voeg de helft van je proficiency bonus (afgerond naar beneden) toe aan ability checks waar je geen proficiency hebt." },
                { name: "Expertise", desc: "Kies 2 skills met proficiency. Je proficiency bonus wordt verdubbeld voor die checks." }
            ],
            3: [
                { name: "Bard Subclass", desc: "Kies je Bard College. Dit bepaalt je subclass features." }
            ],
            4: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            5: [
                { name: "Font of Inspiration", desc: "Je Bardic Inspiration herstelt nu na een short rest (in plaats van alleen long rest)." }
            ],
            7: [
                { name: "Countercharm", desc: "Als action, begin een performance. Jij en allies binnen 30ft krijgen advantage op saves tegen frightened en charmed. Duurt tot einde van je volgende beurt." }
            ],
            8: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            9: [
                { name: "Expertise", desc: "Kies nog 2 extra skills voor verdubbelde proficiency bonus." }
            ],
            10: [
                { name: "Magical Secrets", desc: "Leer 2 spells van de Bard, Cleric, Druid of Wizard spell list. Ze tellen als bard spells voor jou." }
            ],
            12: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            14: [
                { name: "Magical Secrets", desc: "Leer nog 2 extra spells van elke class spell list." }
            ],
            16: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            18: [
                { name: "Superior Inspiration", desc: "Als je geen Bardic Inspiration uses hebt bij initiative, krijg je er 1 terug." }
            ],
            19: [
                { name: "Epic Boon", desc: "Kies een Epic Boon feat. Je ability scores kunnen nu tot 30 stijgen." }
            ],
            20: [
                { name: "Words of Creation", desc: "Cast Power Word Heal of Power Word Kill 1x gratis per long rest. Het effect raakt 2 creatures in plaats van 1." }
            ]
        },

        subclasses: {
            lore: {
                name: "College of Lore",
                level: 3,
                features: {
                    3: [
                        { name: "Bonus Proficiencies", desc: "Proficiency in 3 extra skills naar keuze." },
                        { name: "Cutting Words", desc: "Reaction: als een creature binnen 60ft een attack roll, ability check of damage roll maakt, trek je Bardic Inspiration die af van het resultaat." }
                    ],
                    6: [
                        { name: "Additional Magical Secrets", desc: "Leer 2 extra spells van elke class spell list." }
                    ],
                    14: [
                        { name: "Peerless Skill", desc: "Voeg je Bardic Inspiration die toe aan je eigen ability checks (kost geen gebruik)." }
                    ]
                }
            },
            dance: {
                name: "College of Dance",
                level: 3,
                features: {
                    3: [
                        { name: "Dazzling Footwork", desc: "+10ft speed, je unarmed strikes gebruiken een martial arts die. Als je een creature raakt met een unarmed strike, kun je Bardic Inspiration op jezelf gebruiken (telt niet als een use)." }
                    ],
                    6: [
                        { name: "Inspiring Movement", desc: "Reaction: als een ally beweegt, kun je een ander ally binnen 60ft toestaan om als reaction de helft van diens speed te bewegen zonder opportunity attacks uit te lokken." }
                    ],
                    14: [
                        { name: "Tandem Footwork", desc: "Na het rollen van initiative: allies binnen 60ft die jou kunnen zien voegen een Bardic Inspiration die toe aan hun initiative." }
                    ]
                }
            },
            glamour: {
                name: "College of Glamour",
                level: 3,
                features: {
                    3: [
                        { name: "Mantle of Inspiration", desc: "Bonus action, besteed Bardic Inspiration: tot 5 creatures binnen 60ft krijgen CHA mod temp HP en mogen als reaction hun volledige speed bewegen zonder opportunity attacks." },
                        { name: "Enthralling Performance", desc: "Na een 1 minuut durende performance: een aantal creatures gelijk aan je CHA modifier zijn charmed voor 1 uur (WIS save negates). Ze weten niet dat je ze probeert te charmen bij een fail." }
                    ],
                    6: [
                        { name: "Mantle of Majesty", desc: "Bonus action: cast Command als bonus action elke beurt voor 1 minuut zonder een spell slot te besteden. 1x per long rest." }
                    ],
                    14: [
                        { name: "Unbreakable Majesty", desc: "Bonus action voor 1 minuut: creatures die jou als target kiezen moeten een CHA save doen of moeten een ander target kiezen en de attack/spell is verspild. 1x per long rest." }
                    ]
                }
            },
            valor: {
                name: "College of Valor",
                level: 3,
                features: {
                    3: [
                        { name: "Combat Inspiration", desc: "Bardic Inspiration die kan ook worden gebruikt om damage aan een weapon attack toe te voegen, of als reaction om het resultaat aan AC toe te voegen tegen één aanval." },
                        { name: "Bonus Proficiencies", desc: "Proficiency met medium armor, shields en martial weapons." }
                    ],
                    6: [
                        { name: "Extra Attack", desc: "Je kunt twee keer aanvallen in plaats van één keer als je de Attack action neemt." }
                    ],
                    14: [
                        { name: "Battle Magic", desc: "Als je een bard spell cast, kun je als bonus action één weapon attack maken." }
                    ]
                }
            }
        }
    },

    // ===== CLERIC CLASS (5.5e / 2024) =====
    cleric: {
        hitDie: 8,
        savingThrows: ["wis", "cha"],
        skillOptions: ["history", "insight", "medicine", "persuasion", "religion"],
        skillCount: 2,
        asiLevels: [4, 8, 12, 16, 19],

        spellcasting: "full",
        spellSlots: {
            1:  [2,0,0,0,0,0,0,0,0],
            2:  [3,0,0,0,0,0,0,0,0],
            3:  [4,2,0,0,0,0,0,0,0],
            4:  [4,3,0,0,0,0,0,0,0],
            5:  [4,3,2,0,0,0,0,0,0],
            6:  [4,3,3,0,0,0,0,0,0],
            7:  [4,3,3,1,0,0,0,0,0],
            8:  [4,3,3,2,0,0,0,0,0],
            9:  [4,3,3,3,1,0,0,0,0],
            10: [4,3,3,3,2,0,0,0,0],
            11: [4,3,3,3,2,1,0,0,0],
            12: [4,3,3,3,2,1,0,0,0],
            13: [4,3,3,3,2,1,1,0,0],
            14: [4,3,3,3,2,1,1,0,0],
            15: [4,3,3,3,2,1,1,1,0],
            16: [4,3,3,3,2,1,1,1,0],
            17: [4,3,3,3,2,1,1,1,1],
            18: [4,3,3,3,3,1,1,1,1],
            19: [4,3,3,3,3,2,1,1,1],
            20: [4,3,3,3,3,2,2,1,1]
        },

        cantripsKnown: { 1:3, 2:3, 3:3, 4:4, 5:4, 6:4, 7:4, 8:4, 9:4, 10:5, 11:5, 12:5, 13:5, 14:5, 15:5, 16:5, 17:5, 18:5, 19:5, 20:5 },
        maxSpellLevel: { 1:1, 2:1, 3:2, 4:2, 5:3, 6:3, 7:4, 8:4, 9:5, 10:5, 11:6, 12:6, 13:7, 14:7, 15:8, 16:8, 17:9, 18:9, 19:9, 20:9 },

        features: {
            1: [
                { name: "Spellcasting", desc: "Cast cleric spells met WIS als spellcasting ability. Voorbereiden: WIS mod + cleric level." },
                { name: "Divine Order", desc: "Kies Protector (heavy armor + martial weapons proficiency) of Thaumaturge (1 extra cantrip + WIS mod toe aan Religion/Arcana checks)." }
            ],
            2: [
                { name: "Channel Divinity", desc: "Gebruik Channel Divinity een aantal keer per long rest (stijgt met level). Opties: Turn Undead (WIS save of turned) en Divine Spark (1d8+WIS healing of radiant damage op 30ft)." }
            ],
            3: [
                { name: "Cleric Subclass", desc: "Kies je Divine Domain. Dit bepaalt je subclass features en bonus spells." }
            ],
            4: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            5: [
                { name: "Sear Undead", desc: "Bij een gefaalde Turn Undead save: het undead creature neemt WIS modifier x d8 radiant damage." },
                { name: "Smite Undead", desc: "Turn Undead kan nu undead vernietigen als hun CR laag genoeg is." }
            ],
            7: [
                { name: "Blessed Strikes", desc: "Kies: Divine Strike (+1d8 melee damage 1x/beurt) of Potent Spellcasting (+WIS mod damage op cleric cantrips)." }
            ],
            8: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            10: [
                { name: "Divine Intervention", desc: "Als action: cast een cleric spell van 5th level of lager zonder spell slot of materiaalcomponenten. 1x per long rest." }
            ],
            12: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            14: [
                { name: "Improved Blessed Strikes", desc: "Je Divine Strike stijgt naar 2d8, of je Potent Spellcasting voegt 2x WIS mod toe." }
            ],
            16: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            19: [
                { name: "Epic Boon", desc: "Kies een Epic Boon feat. Je ability scores kunnen nu tot 30 stijgen." }
            ],
            20: [
                { name: "Greater Divine Intervention", desc: "Je Divine Intervention kan nu spells tot 9th level casten, of Wish 1x." }
            ]
        },

        subclasses: {
            life: {
                name: "Life Domain",
                level: 3,
                features: {
                    3: [
                        { name: "Disciple of Life", desc: "Healing spells herstellen extra HP gelijk aan 2 + spell level." },
                        { name: "Life Domain Spells", desc: "Altijd prepared: Bless, Cure Wounds (1st), Aid, Lesser Restoration (3rd), Mass Healing Word, Revivify (5th), Death Ward, Guardian of Faith (7th), Greater Restoration, Mass Cure Wounds (9th)." }
                    ],
                    6: [
                        { name: "Blessed Healer", desc: "Als je een ander creature healt met een spell van 1st level+, herstel je zelf ook 2 + spell level HP." }
                    ],
                    10: [
                        { name: "Divine Strike", desc: "1x per beurt: +1d8 radiant damage op je weapon attacks." }
                    ],
                    14: [
                        { name: "Supreme Healing", desc: "Bij healing spells: in plaats van te rollen neem je het maximum resultaat van de healing dice." }
                    ]
                }
            },
            light: {
                name: "Light Domain",
                level: 3,
                features: {
                    3: [
                        { name: "Warding Flare", desc: "Reaction: als een creature binnen 30ft een attack maakt tegen jou, leg disadvantage op de attack roll. Uses = WIS modifier per long rest." },
                        { name: "Bonus Cantrip", desc: "Je leert de Light cantrip als je die nog niet kent." },
                        { name: "Light Domain Spells", desc: "Altijd prepared: Burning Hands, Faerie Fire (1st), Flaming Sphere, Scorching Ray (3rd), Daylight, Fireball (5th), Guardian of Faith, Wall of Fire (7th), Flame Strike, Scrying (9th)." }
                    ],
                    6: [
                        { name: "Improved Flare", desc: "Warding Flare werkt nu ook als een ally binnen 30ft wordt aangevallen." }
                    ],
                    10: [
                        { name: "Blessed Strikes", desc: "Kies: Divine Strike (+1d8 radiant op melee 1x/beurt) of Potent Spellcasting (+WIS mod op cleric cantrip damage)." }
                    ],
                    14: [
                        { name: "Improved Blessed Strikes", desc: "Divine Strike stijgt naar 2d8, of Potent Spellcasting voegt 2x WIS mod toe." }
                    ],
                    17: [
                        { name: "Corona of Light", desc: "Als action: straal 60ft bright light uit. Vijanden in het licht hebben disadvantage op saves tegen jouw fire en radiant spells. Duurt 1 minuut." }
                    ]
                }
            },
            trickery: {
                name: "Trickery Domain",
                level: 3,
                features: {
                    3: [
                        { name: "Blessing of the Trickster", desc: "Als action: geef een ally advantage op Stealth checks voor 1 uur." },
                        { name: "Trickery Domain Spells", desc: "Altijd prepared: Charm Person, Disguise Self (1st), Mirror Image, Pass without Trace (3rd), Blink, Dispel Magic (5th), Dimension Door, Polymorph (7th), Dominate Person, Modify Memory (9th)." }
                    ],
                    6: [
                        { name: "Invoke Duplicity", desc: "Channel Divinity: creëer een illusoire dubbelganger binnen 30ft. Je hebt advantage op attacks als jij en de dubbelganger binnen 5ft van hetzelfde target zijn. Je kunt spells casten alsof je op de positie van de dubbelganger staat." }
                    ],
                    10: [
                        { name: "Blessed Strikes", desc: "Kies: Divine Strike (+1d8 poison op melee 1x/beurt) of Potent Spellcasting (+WIS mod op cleric cantrip damage)." }
                    ],
                    14: [
                        { name: "Improved Blessed Strikes", desc: "Divine Strike stijgt naar 2d8, of Potent Spellcasting voegt 2x WIS mod toe." }
                    ],
                    17: [
                        { name: "Improved Duplicity", desc: "Je kunt je dubbelganger 30ft per beurt bewegen. Je kunt nu 4 dubbelgangers tegelijk hebben." }
                    ]
                }
            },
            war: {
                name: "War Domain",
                level: 3,
                features: {
                    3: [
                        { name: "War Priest", desc: "Bonus action weapon attack na het maken van een Attack action. Uses = WIS modifier per long rest." },
                        { name: "War Domain Spells", desc: "Altijd prepared: Divine Favor, Shield of Faith (1st), Magic Weapon, Spiritual Weapon (3rd), Crusader's Mantle, Spirit Guardians (5th), Freedom of Movement, Stoneskin (7th), Flame Strike, Hold Monster (9th)." },
                        { name: "Bonus Proficiencies", desc: "Proficiency met martial weapons en heavy armor." }
                    ],
                    6: [
                        { name: "War God's Blessing", desc: "Channel Divinity: als een creature binnen 30ft een attack roll maakt, voeg +10 toe aan die roll." }
                    ],
                    10: [
                        { name: "Blessed Strikes", desc: "Kies: Divine Strike (+1d8 damage op melee 1x/beurt) of Potent Spellcasting (+WIS mod op cleric cantrip damage)." }
                    ],
                    14: [
                        { name: "Improved Blessed Strikes", desc: "Divine Strike stijgt naar 2d8, of Potent Spellcasting voegt 2x WIS mod toe." }
                    ],
                    17: [
                        { name: "Avatar of Battle", desc: "Resistance tegen bludgeoning, piercing en slashing damage van nonmagical weapons." }
                    ]
                }
            }
        }
    },

    // ===== MONK CLASS (5.5e / 2024) =====
    monk: {
        hitDie: 8,
        savingThrows: ["str", "dex"],
        skillOptions: ["acrobatics", "athletics", "history", "insight", "religion", "stealth"],
        skillCount: 2,
        asiLevels: [4, 8, 12, 16, 19],
        spellcasting: "none",

        // 5.5e: "Ki" hernoemd naar "Focus Points"
        martialArtsDie: { 1:"1d6", 2:"1d6", 3:"1d6", 4:"1d6", 5:"1d8", 6:"1d8", 7:"1d8", 8:"1d8", 9:"1d8", 10:"1d8", 11:"1d10", 12:"1d10", 13:"1d10", 14:"1d10", 15:"1d10", 16:"1d10", 17:"1d12", 18:"1d12", 19:"1d12", 20:"1d12" },
        focusPoints: { 1:0, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:10, 11:11, 12:12, 13:13, 14:14, 15:15, 16:16, 17:17, 18:18, 19:19, 20:20 },

        features: {
            1: [
                { name: "Martial Arts", desc: "Unarmed strikes en monk weapons gebruiken DEX. Unarmed strikes doen 1d6 (schaalt). Na een Attack action: 1 bonus action unarmed strike." },
                { name: "Unarmored Defense", desc: "Zonder armor: AC = 10 + DEX mod + WIS mod." }
            ],
            2: [
                { name: "Focus Points", desc: "Je krijgt Focus Points (voorheen Ki). Besteed ze voor: Flurry of Blows (2 bonus unarmed strikes), Patient Defense (Dodge als bonus action), Step of the Wind (Dash of Disengage als bonus action + dubbele jump)." },
                { name: "Unarmored Movement", desc: "+10ft speed zonder armor. Stijgt op hogere levels (+15ft lvl 6, +20ft lvl 10, +25ft lvl 14, +30ft lvl 18)." }
            ],
            3: [
                { name: "Monk Subclass", desc: "Kies je Monastic Tradition. Dit bepaalt hoe je je martial arts toepast." },
                { name: "Deflect Attacks", desc: "Reaction: verminder damage van een melee of ranged attack met 1d10 + DEX mod + monk level. Als damage naar 0 gaat, maak een ranged counterattack (20/60ft)." }
            ],
            4: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." },
                { name: "Slow Fall", desc: "Reaction: verminder fall damage met 5x monk level." }
            ],
            5: [
                { name: "Extra Attack", desc: "Je kunt twee keer aanvallen in plaats van één keer als je de Attack action neemt." },
                { name: "Stunning Strike", desc: "1 Focus Point: bij een hit moet target CON save doen of is Stunned tot einde van je volgende beurt." }
            ],
            6: [
                { name: "Empowered Strikes", desc: "Je unarmed strikes doen Force damage (bypass common resistances)." }
            ],
            7: [
                { name: "Evasion", desc: "Bij een DEX saving throw voor halve damage: neem 0 damage bij succes, halve damage bij falen." }
            ],
            8: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            9: [
                { name: "Acrobatic Movement", desc: "Je kunt over verticale oppervlakken en water lopen (als je niet stopt aan het einde van je beurt)." }
            ],
            10: [
                { name: "Heightened Focus", desc: "Upgrade: Patient Defense geeft ook temp HP, Step of the Wind geeft ook advantage op Acrobatics, Flurry of Blows kan ook push/prone." },
                { name: "Self-Restoration", desc: "Beëindig charmed of frightened condition op jezelf (1x per beurt, gratis)." }
            ],
            12: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            13: [
                { name: "Deflect Energy", desc: "Je Deflect Attacks werkt nu ook tegen spell attacks en energy damage." }
            ],
            14: [
                { name: "Disciplined Survivor", desc: "Proficiency in alle saving throws. Besteed 1 Focus Point om een gefaalde save opnieuw te rollen." }
            ],
            15: [
                { name: "Perfect Focus", desc: "Als je rolt voor initiative en minder dan 4 Focus Points hebt, worden ze aangevuld tot 4." }
            ],
            16: [
                { name: "Ability Score Improvement", desc: "Verhoog één ability score met 2, of twee scores met 1. Of kies een feat." }
            ],
            18: [
                { name: "Superior Defense", desc: "Tijdens Dodge (via Patient Defense): resistance tegen alle damage behalve force." }
            ],
            19: [
                { name: "Epic Boon", desc: "Kies een Epic Boon feat. Je ability scores kunnen nu tot 30 stijgen." }
            ],
            20: [
                { name: "Body and Mind", desc: "+4 DEX en +4 WIS (max 25 voor beide)." }
            ]
        },

        subclasses: {
            openHand: {
                name: "Warrior of the Open Hand",
                level: 3,
                features: {
                    3: [
                        { name: "Open Hand Technique", desc: "Bij Flurry of Blows: kies per hit een extra effect. Push 15ft, knock prone (DEX save), of target kan geen reactions nemen." }
                    ],
                    6: [
                        { name: "Wholeness of Body", desc: "Als bonus action, herstel HP gelijk aan je Martial Arts die + WIS mod. Uses = prof bonus per long rest." }
                    ],
                    11: [
                        { name: "Fleet Step", desc: "+10ft speed. Na Flurry of Blows: teleporteer tot 10ft naar een open ruimte die je kunt zien." }
                    ],
                    17: [
                        { name: "Quivering Palm", desc: "3 Focus Points bij een unarmed hit: plaats letale vibraties. Binnen 14 dagen als action: CON save of target gaat naar 0 HP, bij succes 10d12 force damage." }
                    ]
                }
            },
            mercy: {
                name: "Warrior of Mercy",
                level: 3,
                features: {
                    3: [
                        { name: "Hand of Healing", desc: "1 Focus Point: als action, heal een creature dat je aanraakt voor 1d6 + WIS modifier HP. Je kunt dit ook gebruiken in plaats van een Flurry of Blows attack." },
                        { name: "Hand of Harm", desc: "1 Focus Point: als je een unarmed strike raakt, doe +1d6 + WIS modifier necrotic damage. Je kunt het target ook forceren een CON save te doen of het is poisoned tot het einde van je volgende beurt." }
                    ],
                    6: [
                        { name: "Physician's Touch", desc: "Hand of Healing kan nu ook één van de volgende conditions beëindigen: blinded, deafened, paralyzed, poisoned, stunned, of een disease." }
                    ],
                    11: [
                        { name: "Flurry of Healing and Harm", desc: "Als je Flurry of Blows gebruikt, kun je elke attack vervangen door Hand of Healing of Hand of Harm zonder extra Focus Points te besteden." }
                    ],
                    17: [
                        { name: "Hand of Ultimate Mercy", desc: "5 Focus Points: raak een creature aan dat in de afgelopen 24 uur is gestorven. Het creature herleeft met 4d10 + WIS modifier HP. 1x per long rest." }
                    ]
                }
            },
            shadow: {
                name: "Warrior of Shadow",
                level: 3,
                features: {
                    3: [
                        { name: "Shadow Arts", desc: "2 Focus Points: cast Darkness, Darkvision, Pass without Trace of Silence. Minor Illusion cantrip gratis." }
                    ],
                    6: [
                        { name: "Shadow Step", desc: "Bonus action: teleporteer tot 60ft van een punt in dim light of darkness naar een ander punt in dim light of darkness. Je hebt advantage op de eerste melee attack na het teleporteren." }
                    ],
                    11: [
                        { name: "Cloak of Shadows", desc: "Je bent onzichtbaar in dim light of darkness tot je aanvalt of een spell cast." }
                    ],
                    17: [
                        { name: "Opportunist", desc: "Reaction: als een creature binnen 5ft van jou geraakt wordt door een attack van een ander creature, maak een melee attack tegen dat creature." }
                    ]
                }
            },
            elements: {
                name: "Warrior of the Elements",
                level: 3,
                features: {
                    3: [
                        { name: "Elemental Attunement", desc: "Je leert elementale cantrips. Elemental Burst: 2 Focus Points, 20ft radius, CON save, 3d6 damage van een gekozen element (acid, cold, fire, lightning of thunder)." }
                    ],
                    6: [
                        { name: "Environmental Burst", desc: "Extra elementale opties. Elemental Burst damage stijgt naar 4d6." }
                    ],
                    11: [
                        { name: "Stride of the Elements", desc: "Je krijgt fly speed en swim speed gelijk aan je walking speed als je Flurry of Blows of Step of the Wind gebruikt." }
                    ],
                    17: [
                        { name: "Elemental Epitome", desc: "Word een avatar van de elementen: extra elementale damage op unarmed strikes, resistance tegen een gekozen element, en je Reach wordt 10ft." }
                    ]
                }
            }
        }
    },

    // ===== METAMAGIC OPTIONS =====
    metamagic: [
        { name: "Careful Spell", cost: 1, desc: "Kies een aantal creatures gelijk aan je CHA modifier (min 1). Ze slagen automatisch op de saving throw van je spell." },
        { name: "Distant Spell", cost: 1, desc: "Verdubbel de range van een spell met range 5ft+. Spells met touch krijgen range 30ft." },
        { name: "Empowered Spell", cost: 1, desc: "Rol opnieuw tot je CHA modifier (min 1) damage dice. Combineerbaar met andere Metamagic." },
        { name: "Extended Spell", cost: 1, desc: "Verdubbel de duur van een spell (max 24 uur)." },
        { name: "Heightened Spell", cost: 3, desc: "Kies één target van de spell. Dat target heeft disadvantage op de eerste saving throw tegen de spell." },
        { name: "Quickened Spell", cost: 2, desc: "Cast een spell met casting time 1 action als bonus action." },
        { name: "Subtle Spell", cost: 1, desc: "Cast een spell zonder verbal of somatic components. Ideaal tegen Counterspell." },
        { name: "Twinned Spell", cost: "spell level (1 min)", desc: "Target een tweede creature met een single-target spell. Kost sorcery points gelijk aan het spell level (1 voor cantrips)." }
    ],

    // ===== FEATS (5.5e / 2024 PHB) =====
    // Categories: "origin" (level 1 via background), "general" (level 4+ via ASI), "fighting" (class feature), "epic" (level 19+)
    feats: [
        // --- ORIGIN FEATS (level 1, via background) ---
        { name: "Alert", category: "origin", desc: "+2 Initiative bonus. Je kunt niet Surprised worden. Als je Heroic Inspiration hebt aan het begin van combat, kun je het aan een ally geven.", prereq: null },
        { name: "Crafter", category: "origin", desc: "Proficiency met 3 artisan tools naar keuze. 20% korting op nonmagical items. Je kunt eenvoudige items overnight craften (touw, toortsen, etc.).", prereq: null },
        { name: "Healer", category: "origin", desc: "Met een Healer's Kit als action: herstel 1d6 + 4 + target's aantal Hit Dice aan HP bij een creature (1x per short/long rest per creature). Stabiliseer een creature op 0 HP als bonus action.", prereq: null },
        { name: "Lucky", category: "origin", desc: "Je hebt Luck Points gelijk aan je proficiency bonus, hersteld na long rest. Besteed 1 punt om een extra d20 te rollen na het zien van je rol en kies welke telt. Ook te gebruiken op een attack roll tegen jou.", prereq: null },
        { name: "Magic Initiate", category: "origin", desc: "Kies Cleric, Druid, of Wizard spell list. Leer 2 cantrips en 1 first-level spell. Cast de spell 1x gratis/long rest of met spell slots. Je mag deze feat vaker kiezen (andere list).", prereq: null },
        { name: "Musician", category: "origin", desc: "Proficiency met 3 muziekinstrumenten naar keuze. Na een short/long rest: speel een lied en geef Heroic Inspiration aan allies gelijk aan je proficiency bonus.", prereq: null },
        { name: "Savage Attacker", category: "origin", desc: "Eén keer per beurt als je melee weapon damage rolt, rol de damage dice opnieuw en gebruik het hoogste resultaat.", prereq: null },
        { name: "Skilled", category: "origin", desc: "Proficiency in 3 skills of tools naar keuze. Je mag deze feat vaker kiezen (andere skills/tools).", prereq: null },
        { name: "Tavern Brawler", category: "origin", desc: "Proficiency met improvised weapons. 1d4 unarmed strike damage. Bij een hit met unarmed strike: duw target 5ft weg. Herrol 1 damage die op unarmed/improvised weapon attacks.", prereq: null },
        { name: "Tough", category: "origin", desc: "Je max HP stijgt met 2 per level (retroactief). Ook bij toekomstige levels.", prereq: null },

        // --- GENERAL FEATS (level 4+ via ASI) ---
        { name: "Actor", category: "general", desc: "+1 CHA (max 20). Advantage op Deception en Performance checks om jezelf voor te doen als iemand anders. Imiteer spraak/geluiden van anderen.", prereq: { cha: 13 }, abilityBonus: { cha: 1 } },
        { name: "Athlete", category: "general", desc: "+1 STR of DEX (max 20). Opstaan kost 5ft movement. Climbing kost geen extra movement. Running long/high jump met 5ft aanloop.", prereq: { strOrDex: 13 } },
        { name: "Charger", category: "general", desc: "+1 STR of DEX (max 20). Na Dash action: bonus action melee attack met +1d8 damage, of duw target 10ft weg.", prereq: { strOrDex: 13 } },
        { name: "Crossbow Expert", category: "general", desc: "+1 DEX (max 20). Geen disadvantage op ranged attacks in melee. Negeer loading property. Na een attack met one-handed weapon: bonus action hand crossbow attack.", prereq: { dex: 13 }, abilityBonus: { dex: 1 } },
        { name: "Defensive Duelist", category: "general", desc: "Reaction als je wordt aangevallen in melee met een finesse weapon: +proficiency bonus op AC voor die aanval.", prereq: { dex: 13 } },
        { name: "Dual Wielder", category: "general", desc: "+1 STR of DEX (max 20). +1 AC als je twee wapens draagt. Two-weapon fighting met non-light wapens. Trek twee wapens tegelijk.", prereq: { strOrDex: 13 } },
        { name: "Durable", category: "general", desc: "+1 CON (max 20). Bij short rest: herwin je alle Hit Dice in plaats van de helft.", prereq: { con: 13 }, abilityBonus: { con: 1 } },
        { name: "Elemental Adept", category: "general", desc: "Kies een element (acid/cold/fire/lightning/thunder). Spells negeren resistance tegen dat element. Behandel 1'en op damage dice als 2'en. Herhaalbaar (ander element).", prereq: { spellcasting: true } },
        { name: "Fey Touched", category: "general", desc: "+1 INT, WIS of CHA (max 20). Leer Misty Step + 1 first-level divination/enchantment spell. Cast elk 1x gratis/long rest of met spell slots.", prereq: { intWisOrCha: 13 } },
        { name: "Great Weapon Master", category: "general", desc: "+1 STR (max 20). Bij een critical hit of kill met een heavy melee weapon: bonus action extra melee attack. Eén keer per beurt als je raakt met een heavy weapon: voeg extra damage toe gelijk aan je proficiency bonus.", prereq: { str: 13 }, abilityBonus: { str: 1 } },
        { name: "Inspiring Leader", category: "general", desc: "+1 CHA (max 20). Besteed 10 minuten: tot 6 creatures krijgen 2d6 + CHA modifier temporary HP. Schaalt met level.", prereq: { cha: 13 }, abilityBonus: { cha: 1 } },
        { name: "Mage Slayer", category: "general", desc: "+1 STR of DEX (max 20). Reaction: melee attack als creature naast je een spell cast. Advantage op saves tegen spells van adjacent creatures. Forceer disadvantage op concentration saves.", prereq: { strOrDex: 13 } },
        { name: "Mobile", category: "general", desc: "+10ft speed. Dash door difficult terrain kost geen extra movement. Geen opportunity attack van een creature waartegen je een melee attack hebt gedaan deze beurt.", prereq: { dex: 13 } },
        { name: "Observant", category: "general", desc: "+1 INT of WIS (max 20). Lees lippen als je de taal begrijpt. +5 op passive Perception en passive Investigation.", prereq: { intOrWis: 13 } },
        { name: "Polearm Master", category: "general", desc: "+1 STR or DEX (max 20). Bonus action attack (1d4 bludgeoning) met het andere uiteinde van een glaive/halberd/quarterstaff/spear. Opportunity attack als creature je reach binnentreedt.", prereq: { strOrDex: 13 } },
        { name: "Resilient", category: "general", desc: "+1 op een ability score naar keuze (max 20). Proficiency in saving throws voor die ability.", prereq: null },
        { name: "Ritual Caster", category: "general", desc: "+1 INT, WIS of CHA (max 20). Leer 2 ritual spells en cast ze als rituals vanuit een ritual book. Je kunt nieuwe ritual spells toevoegen die je vindt.", prereq: { intWisOrCha: 13 } },
        { name: "Sentinel", category: "general", desc: "+1 STR or DEX (max 20). Reaction melee attack als creature binnen 5ft een ally aanvalt (niet jou). Creatures die je raakt met opportunity attack krijgen speed 0 deze beurt.", prereq: { strOrDex: 13 } },
        { name: "Shadow Touched", category: "general", desc: "+1 INT, WIS of CHA (max 20). Leer Invisibility + 1 first-level illusion/necromancy spell. Cast elk 1x gratis/long rest of met spell slots.", prereq: { intWisOrCha: 13 } },
        { name: "Sharpshooter", category: "general", desc: "+1 DEX (max 20). Geen disadvantage op long range. Negeer half en three-quarters cover. Eén keer per beurt als je raakt met een ranged weapon: +proficiency bonus extra damage.", prereq: { dex: 13 }, abilityBonus: { dex: 1 } },
        { name: "Skulker", category: "general", desc: "+1 DEX (max 20). Je kunt je verbergen als je lightly obscured bent. Missen met ranged attack onthult je positie niet. Dim light geeft geen disadvantage op Perception.", prereq: { dex: 13 }, abilityBonus: { dex: 1 } },
        { name: "War Caster", category: "general", desc: "+1 INT, WIS of CHA (max 20). Advantage op concentration saves. Somatic components met volle handen. Reaction: cast een cantrip i.p.v. opportunity attack.", prereq: { spellcasting: true } },
        { name: "Weapon Master", category: "general", desc: "+1 STR of DEX (max 20). Proficiency met 4 wapens naar keuze. Bij elke long rest: wissel 1 weapon mastery property.", prereq: { strOrDex: 13 } },

        // --- EPIC BOONS (level 19+) ---
        { name: "Boon of Combat Prowess", category: "epic", desc: "+1 STR of DEX (max 30). Als je mist met een melee attack, kun je het veranderen in een hit. 1x per long rest.", prereq: null },
        { name: "Boon of Dimensional Travel", category: "epic", desc: "+1 INT, WIS of CHA (max 30). Teleporteer tot 30ft als bonus action. Aantal keer = proficiency bonus per long rest.", prereq: null },
        { name: "Boon of Energy Resistance", category: "epic", desc: "+1 CON (max 30). Bij acid/cold/fire/lightning/thunder damage: reaction voor resistance + kies allies gelijk aan prof bonus die ook resistance krijgen.", prereq: null },
        { name: "Boon of Fate", category: "epic", desc: "+1 INT, WIS of CHA (max 30). Voeg 2d4 toe aan of trek af van een attack roll, ability check of saving throw (1x per short/long rest).", prereq: null },
        { name: "Boon of Fortitude", category: "epic", desc: "+1 CON (max 30). Max HP stijgt met 40.", prereq: null },
        { name: "Boon of Irresistible Offense", category: "epic", desc: "+1 STR of DEX (max 30). Weapon en unarmed attacks negeren resistance. Bij immunity wordt het resistance.", prereq: null },
        { name: "Boon of Recovery", category: "epic", desc: "+1 CON (max 30). Bij failed death save: slaag in plaats daarvan en herstel HP gelijk aan proficiency bonus x Hit Die.", prereq: null },
        { name: "Boon of Skill", category: "epic", desc: "+1 op een ability (max 30). Proficiency in alle skills.", prereq: null },
        { name: "Boon of Speed", category: "epic", desc: "+1 DEX (max 30). +30ft speed. Opportunity attacks hebben disadvantage tegen jou.", prereq: null },
        { name: "Boon of Spell Recall", category: "epic", desc: "+1 INT, WIS of CHA (max 30). Cast een spell van 5th level of lager zonder spell slot. 1x per long rest.", prereq: null },
        { name: "Boon of the Night Spirit", category: "epic", desc: "+1 DEX, WIS of CHA (max 30). Merge met schaduwen: onzichtbaar in dim light/darkness. Resistance tegen alle damage behalve force/psychic/radiant.", prereq: null },
        { name: "Boon of Truesight", category: "epic", desc: "+1 INT, WIS of CHA (max 30). Truesight 60ft.", prereq: null }
    ],

    // ===== ALL 18 SKILLS =====
    skills: [
        { name: "Acrobatics", ability: "dex" },
        { name: "Animal Handling", ability: "wis" },
        { name: "Arcana", ability: "int" },
        { name: "Athletics", ability: "str" },
        { name: "Deception", ability: "cha" },
        { name: "History", ability: "int" },
        { name: "Insight", ability: "wis" },
        { name: "Intimidation", ability: "cha" },
        { name: "Investigation", ability: "int" },
        { name: "Medicine", ability: "wis" },
        { name: "Nature", ability: "int" },
        { name: "Perception", ability: "wis" },
        { name: "Performance", ability: "cha" },
        { name: "Persuasion", ability: "cha" },
        { name: "Religion", ability: "int" },
        { name: "Sleight of Hand", ability: "dex" },
        { name: "Stealth", ability: "dex" },
        { name: "Survival", ability: "wis" }
    ],

    // ===== BACKGROUNDS (5.5e / 2024 PHB — 16 core + 1 legacy) =====
    // Each provides: 3 ability scores (+2/+1 or +1/+1/+1), 2 skills, 1 tool, 1 origin feat
    backgrounds: {
        // --- LEGACY (niet in 2024 PHB) ---
        urchin: {
            name: "Urchin",
            legacy: true,
            abilityScores: ["DEX", "CON", "WIS"],
            skills: ["Sleight of Hand", "Stealth"],
            tool: "Thieves' Tools",
            feat: "Lucky",
            desc: "LEGACY (niet in 2024 PHB). Opgegroeid op straat. Je kent de stad beter dan wie dan ook."
        },

        // --- 2024 PHB BACKGROUNDS ---
        acolyte: {
            name: "Acolyte",
            abilityScores: ["INT", "WIS", "CHA"],
            skills: ["Insight", "Religion"],
            tool: "Calligrapher's Supplies",
            feat: "Magic Initiate (Cleric)",
            desc: "Je hebt je leven gewijd aan de dienst van een tempel of religieuze orde. Je kent de rituelen en overtuigingen van je geloof."
        },
        artisan: {
            name: "Artisan",
            abilityScores: ["STR", "DEX", "INT"],
            skills: ["Investigation", "Persuasion"],
            tool: "Artisan's Tools",
            feat: "Crafter",
            desc: "Je bent opgeleid als ambachtsman. Je maakt dingen met je handen en hebt een scherp oog voor kwaliteit."
        },
        charlatan: {
            name: "Charlatan",
            abilityScores: ["DEX", "CON", "CHA"],
            skills: ["Deception", "Sleight of Hand"],
            tool: "Forgery Kit",
            feat: "Skilled",
            desc: "Je hebt altijd een talent gehad voor het misleiden van anderen. Valse identiteiten, oplichterij en bedrog zijn je specialiteit."
        },
        criminal: {
            name: "Criminal",
            abilityScores: ["DEX", "CON", "INT"],
            skills: ["Sleight of Hand", "Stealth"],
            tool: "Thieves' Tools",
            feat: "Alert",
            desc: "Je hebt een verleden in de misdaad. Of het nu diefstal, smokkel of erger was — je kent de schaduwzijde van de maatschappij."
        },
        entertainer: {
            name: "Entertainer",
            abilityScores: ["STR", "DEX", "CHA"],
            skills: ["Acrobatics", "Performance"],
            tool: "Musical Instrument",
            feat: "Musician",
            desc: "Je leeft voor het publiek. Als muzikant, danser, acteur of verteller weet je hoe je een menigte moet boeien."
        },
        farmer: {
            name: "Farmer",
            abilityScores: ["STR", "CON", "WIS"],
            skills: ["Animal Handling", "Nature"],
            tool: "Carpenter's Tools",
            feat: "Tough",
            desc: "Je bent opgegroeid op het land. Hard werken, de seizoenen en de natuur hebben je gevormd tot wie je bent."
        },
        guard: {
            name: "Guard",
            abilityScores: ["STR", "INT", "WIS"],
            skills: ["Athletics", "Perception"],
            tool: "Gaming Set",
            feat: "Alert",
            desc: "Je hebt gediend als wachter, stadswacht of lijfwacht. Je bent getraind om gevaar te herkennen en te reageren."
        },
        guide: {
            name: "Guide",
            abilityScores: ["DEX", "WIS", "CON"],
            skills: ["Stealth", "Survival"],
            tool: "Cartographer's Tools",
            feat: "Magic Initiate (Druid)",
            desc: "Je hebt je leven lang reizigers door de wildernis geleid. Je kent de paden en gevaren van de natuur."
        },
        hermit: {
            name: "Hermit",
            abilityScores: ["CON", "WIS", "CHA"],
            skills: ["Medicine", "Religion"],
            tool: "Herbalism Kit",
            feat: "Healer",
            desc: "Je hebt jarenlang in afzondering geleefd — mediterend, studerend of genezend. Je draagt wijsheid mee uit de stilte."
        },
        merchant: {
            name: "Merchant",
            abilityScores: ["CON", "INT", "CHA"],
            skills: ["Animal Handling", "Persuasion"],
            tool: "Navigator's Tools",
            feat: "Lucky",
            desc: "Je bent een handelaar, koopman of marktverkoper. Je kent de waarde van goederen en de kunst van het onderhandelen."
        },
        noble: {
            name: "Noble",
            abilityScores: ["STR", "INT", "CHA"],
            skills: ["History", "Persuasion"],
            tool: "Gaming Set",
            feat: "Skilled",
            desc: "Je bent geboren in een adellijke familie met invloed en rijkdom. Je kent de etiquette van het hof en de last van verwachtingen."
        },
        sage: {
            name: "Sage",
            abilityScores: ["INT", "WIS", "CON"],
            skills: ["Arcana", "History"],
            tool: "Calligrapher's Supplies",
            feat: "Magic Initiate (Wizard)",
            desc: "Jarenlang heb je kennis vergaard uit boeken en bibliotheken. Je bent een expert in je vakgebied."
        },
        sailor: {
            name: "Sailor",
            abilityScores: ["STR", "DEX", "WIS"],
            skills: ["Acrobatics", "Perception"],
            tool: "Navigator's Tools",
            feat: "Tavern Brawler",
            desc: "Je hebt gevaren op de open zee. Stormen, piraten en verre havens — je hebt het allemaal meegemaakt."
        },
        scribe: {
            name: "Scribe",
            abilityScores: ["DEX", "INT", "WIS"],
            skills: ["Investigation", "Perception"],
            tool: "Calligrapher's Supplies",
            feat: "Skilled",
            desc: "Je hebt gewerkt als schrijver, kopiist of archivaris. Details ontgaan je zelden en je pen is je beste vriend."
        },
        soldier: {
            name: "Soldier",
            abilityScores: ["STR", "DEX", "CON"],
            skills: ["Athletics", "Intimidation"],
            tool: "Gaming Set",
            feat: "Savage Attacker",
            desc: "Je hebt gediend in een leger of militie. Je kent de discipline van het slagveld en de kameraadschap van soldaten."
        },
        wayfarer: {
            name: "Wayfarer",
            abilityScores: ["DEX", "WIS", "CHA"],
            skills: ["Insight", "Stealth"],
            tool: "Thieves' Tools",
            feat: "Lucky",
            desc: "Je bent een zwerver, een reiziger zonder vaste bestemming. De weg is je thuis en je overleefd door je instincten."
        }
    },

    // ===== TOOLTIPS =====
    tooltips: {
        halfElf: {
            title: "Half-Elf (Legacy)",
            desc: "LEGACY — Verwijderd in 2024 PHB. Kies Human of Elf voor nieuwe characters.",
            abilities: "+2 Charisma, +1 op twee andere ability scores naar keuze",
            traits: "Darkvision 60ft, Fey Ancestry (advantage vs charm), Skill Versatility (2 extra skill proficiencies)",
            languages: "Common, Elvish, +1 naar keuze",
            speed: "30ft",
            size: "Medium"
        },
        sorcerer: {
            title: "Sorcerer",
            desc: "Magie zit in je bloed. Je hoeft het niet te leren — het ís er al.",
            hitDie: "d6",
            primaryAbility: "Charisma",
            savingThrows: "Constitution, Charisma",
            armorProf: "Geen",
            weaponProf: "Daggers, darts, slings, quarterstaffs, light crossbows",
            spellcasting: "Bereid spells voor uit de volledige Sorcerer spell list. Aantal = CHA mod + level."
        },
        rogue: {
            title: "Rogue",
            desc: "Specialist in precisie, stealth en het exploiteren van zwakke plekken.",
            hitDie: "d8",
            primaryAbility: "Dexterity",
            savingThrows: "Dexterity, Intelligence",
            armorProf: "Light armor",
            weaponProf: "Simple weapons, hand crossbows, longswords, rapiers, shortswords",
            tools: "Thieves' tools"
        },
        wildMagic: {
            title: "Wild Magic Origin",
            desc: "Je magie komt uit een chaotische bron. Onvoorspelbaar maar krachtig. Bij elke spell is er een kans op een Wild Magic Surge.",
            keyFeatures: "Wild Magic Surge, Tides of Chaos (lvl 3), Bend Luck (lvl 6), Controlled Chaos (lvl 14), Spell Bombardment (lvl 18)"
        },
        scout: {
            title: "Scout Archetype (Legacy)",
            desc: "LEGACY — Niet in 2024 PHB. 5.5e Rogue subclasses: Arcane Trickster, Assassin, Soulknife, Thief.",
            keyFeatures: "Skirmisher, Survivalist (lvl 3), Superior Mobility (lvl 9), Ambush Master (lvl 13), Sudden Strike (lvl 17)"
        },
        urchin: {
            title: "Urchin Background (Legacy)",
            desc: "LEGACY — Niet in 2024 PHB. Overweeg Criminal of Wayfarer als alternatief.",
            skillProf: "Sleight of Hand, Stealth",
            toolProf: "Thieves' tools",
            feature: "Lucky — Origin feat",
            abilityScores: "+2/+1 verdeeld over DEX, CON, WIS"
        },

        // New race tooltips
        human: {
            title: "Human (2024)",
            desc: "Veelzijdig en ambitieus. Mensen passen zich aan elke situatie aan.",
            abilities: "+1 op drie ability scores naar keuze (via background), of +2/+1",
            traits: "Resourceful (Heroic Inspiration op long rest), Skillful (1 extra skill proficiency), Versatile (origin feat naar keuze)",
            languages: "Common, +1 naar keuze",
            speed: "30ft",
            size: "Medium"
        },
        halfling: {
            title: "Halfling (2024)",
            desc: "Klein maar dapper. Halflings zijn optimistisch en buitengewoon gelukkig.",
            abilities: "+1 op drie ability scores naar keuze (via background), of +2/+1",
            traits: "Brave (advantage vs frightened), Halfling Nimbleness (door grotere creatures bewegen), Luck (herrol nat 1), Naturally Stealthy (verbergen achter grotere creatures)",
            languages: "Common, Halfling",
            speed: "30ft",
            size: "Small"
        },
        tiefling: {
            title: "Tiefling (2024)",
            desc: "Afstammeling van duivelse machten. Tieflings dragen de tekenen van hun erfgoed.",
            abilities: "+1 op drie ability scores naar keuze (via background), of +2/+1",
            traits: "Darkvision 60ft, Fiendish Legacy (kies Abyssal/Chthonic/Infernal voor resistance + spells), Otherworldly Presence (Thaumaturgy cantrip)",
            languages: "Common, +1 naar keuze",
            speed: "30ft",
            size: "Medium"
        },
        aasimar: {
            title: "Aasimar (2024)",
            desc: "Gezegend met hemelse kracht. Aasimar hebben een goddelijke vonk in hun ziel.",
            abilities: "+1 op drie ability scores naar keuze (via background), of +2/+1",
            traits: "Celestial Resistance (necrotic + radiant resistance), Darkvision 60ft, Healing Hands (heal = prof bonus, 1x/long rest), Light Bearer (Light cantrip), Celestial Revelation (lvl 3: Wings/Radiance/Shroud)",
            languages: "Common, +1 naar keuze",
            speed: "30ft",
            size: "Medium"
        },
        woodElf: {
            title: "Wood Elf (2024)",
            desc: "Snel en onopvallend. Wood Elves leven in harmonie met de natuur en bewegen als schaduwen door het bos.",
            abilities: "+1 op drie ability scores naar keuze (via background), of +2/+1",
            traits: "Darkvision 60ft, Fey Ancestry (advantage vs charmed, immuun magische slaap), Keen Senses (Perception proficiency), Trance (4 uur meditatie i.p.v. slaap), Elf Lineage: Wood Elf (speed 35ft, Longstrider lvl 3, Pass Without Trace lvl 5)",
            languages: "Common, Elvish",
            speed: "35ft",
            size: "Medium"
        },

        // New class tooltips
        ranger: {
            title: "Ranger",
            desc: "Krijger van de wildernis die magie combineert met vechtkunst en overlevingsvaardigheden.",
            hitDie: "d10",
            primaryAbility: "Dexterity & Wisdom",
            savingThrows: "Strength, Dexterity",
            armorProf: "Light armor, medium armor, shields",
            weaponProf: "Simple weapons, martial weapons",
            spellcasting: "Half caster (WIS). Bereidt spells voor: WIS mod + half ranger level. Geen cantrips."
        },
        wizard: {
            title: "Wizard",
            desc: "Geleerde magiër die magie bestudeert vanuit boeken en eeuwenoude kennis.",
            hitDie: "d6",
            primaryAbility: "Intelligence",
            savingThrows: "Intelligence, Wisdom",
            armorProf: "Geen",
            weaponProf: "Daggers, darts, slings, quarterstaffs, light crossbows",
            spellcasting: "Full caster (INT). Bereidt spells voor uit spellbook: INT mod + wizard level."
        },
        paladin: {
            title: "Paladin",
            desc: "Heilige krijger die een eed heeft gezworen en goddelijke magie combineert met wapenkunst.",
            hitDie: "d10",
            primaryAbility: "Strength & Charisma",
            savingThrows: "Wisdom, Charisma",
            armorProf: "Alle armor, shields",
            weaponProf: "Simple weapons, martial weapons",
            spellcasting: "Half caster (CHA). Bereidt spells voor: CHA mod + half paladin level. Divine Smite voor extra radiant damage."
        },
        druid: {
            title: "Druid",
            desc: "Bewaker van de natuur die de kracht van de elementen en wilde dieren aanroept.",
            hitDie: "d8",
            primaryAbility: "Wisdom",
            savingThrows: "Intelligence, Wisdom",
            armorProf: "Light armor, medium armor, shields (geen metaal)",
            weaponProf: "Clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears",
            spellcasting: "Full caster (WIS). Bereidt spells voor: WIS mod + druid level. Wild Shape om in dieren te transformeren."
        },
        fighter: {
            title: "Fighter",
            desc: "Meester van de wapens en tactiek. De meest veelzijdige vechtklasse.",
            hitDie: "d10",
            primaryAbility: "Strength of Dexterity",
            savingThrows: "Strength, Constitution",
            armorProf: "Alle armor, shields",
            weaponProf: "Simple weapons, martial weapons",
            spellcasting: "Geen (tenzij Eldritch Knight subclass). Krijgt meer ASIs dan andere klassen (7 totaal)."
        },
        warlock: {
            title: "Warlock",
            desc: "Magiër die zijn kracht ontleent aan een pact met een bovennatuurlijk wezen.",
            hitDie: "d8",
            primaryAbility: "Charisma",
            savingThrows: "Wisdom, Charisma",
            armorProf: "Light armor",
            weaponProf: "Simple weapons",
            spellcasting: "Pact Magic (CHA). Beperkte spell slots die herstellen na short rest. Alle slots zijn van hetzelfde level. Mystic Arcanum voor hogere spells."
        },
        barbarian: {
            title: "Barbarian",
            desc: "Woeste krijger die primitieve kracht en ontembare woede inzet.",
            hitDie: "d12",
            primaryAbility: "Strength",
            savingThrows: "Strength, Constitution",
            armorProf: "Light armor, medium armor, shields",
            weaponProf: "Simple weapons, martial weapons",
            spellcasting: "Geen. Rage geeft bonus melee damage en resistance tegen B/P/S. Weapon Mastery (2 properties)."
        },
        bard: {
            title: "Bard",
            desc: "Magiër-kunstenaar die muziek en woorden als magische kracht gebruikt.",
            hitDie: "d8",
            primaryAbility: "Charisma",
            savingThrows: "Dexterity, Charisma",
            armorProf: "Light armor",
            weaponProf: "Simple weapons, hand crossbows, longswords, rapiers, shortswords",
            spellcasting: "Full caster (CHA). Bereidt spells voor: CHA mod + bard level. Bardic Inspiration voor allies."
        },
        cleric: {
            title: "Cleric",
            desc: "Goddelijke magiër in dienst van een hogere macht. Genezer en beschermer.",
            hitDie: "d8",
            primaryAbility: "Wisdom",
            savingThrows: "Wisdom, Charisma",
            armorProf: "Light armor, medium armor, shields (+ heavy via Divine Order: Protector)",
            weaponProf: "Simple weapons (+ martial via Divine Order: Protector)",
            spellcasting: "Full caster (WIS). Bereidt spells voor: WIS mod + cleric level. Channel Divinity voor goddelijke effecten."
        },
        monk: {
            title: "Monk",
            desc: "Martial artist die lichamelijke perfectie nastreeft met Focus Points.",
            hitDie: "d8",
            primaryAbility: "Dexterity & Wisdom",
            savingThrows: "Strength, Dexterity",
            armorProf: "Geen (Unarmored Defense: 10 + DEX + WIS)",
            weaponProf: "Simple weapons, shortswords",
            spellcasting: "Geen. Focus Points (voorheen Ki) voor Flurry of Blows, Patient Defense, Step of the Wind. Unarmed strikes schalen."
        },

        // Species tooltips for new races
        dwarf: {
            title: "Dwarf (2024)",
            desc: "Stoer en veerkrachtig. Dwarves zijn meesters van steen en smeedkunst.",
            abilities: "+1 op drie ability scores naar keuze (via background), of +2/+1",
            traits: "Darkvision 120ft, Dwarven Resilience (poison resistance + advantage vs poisoned), Dwarven Toughness (+1 HP/level), Stonecunning (Tremorsense 60ft op steen)",
            languages: "Common, Dwarvish",
            speed: "30ft",
            size: "Medium"
        },
        gnome: {
            title: "Gnome (2024)",
            desc: "Klein, slim en boordevol curiositeit. Gnomes zijn natuurlijke uitvinders.",
            abilities: "+1 op drie ability scores naar keuze (via background), of +2/+1",
            traits: "Darkvision 60ft, Gnome Cunning (advantage INT/WIS/CHA saves vs magic), Gnome Lineage (Forest: Minor Illusion + Speak with Animals / Rock: Mending + Prestidigitation + Tinker)",
            languages: "Common, Gnomish",
            speed: "30ft",
            size: "Small"
        },
        goliath: {
            title: "Goliath (2024)",
            desc: "Reusachtig en onverzettelijk. Goliaths stammen af van reuzen.",
            abilities: "+1 op drie ability scores naar keuze (via background), of +2/+1",
            traits: "Giant Ancestry (kies Cloud/Fire/Frost/Hill/Stone/Storm), Large Form (lvl 5: word Large), Powerful Build (tel als Large voor carry/push/drag)",
            languages: "Common, Giant",
            speed: "35ft",
            size: "Medium"
        },
        orc: {
            title: "Orc (2024)",
            desc: "Krachtig en ontembaar. Orcs gedijen op adrenaline en overleving.",
            abilities: "+1 op drie ability scores naar keuze (via background), of +2/+1",
            traits: "Darkvision 120ft, Adrenaline Rush (Dash + temp HP als bonus action), Relentless Endurance (1 HP i.p.v. 0, 1x/long rest)",
            languages: "Common, Orc",
            speed: "30ft",
            size: "Medium"
        },
        dragonborn: {
            title: "Dragonborn (2024)",
            desc: "Afstammeling van draken. Dragonborn dragen de kracht van hun voorouders.",
            abilities: "+1 op drie ability scores naar keuze (via background), of +2/+1",
            traits: "Draconic Ancestry (element keuze + resistance), Breath Weapon (15ft cone of 30ft line, schaalt), Draconic Flight (lvl 5: fly speed 10 min)",
            languages: "Common, Draconic",
            speed: "30ft",
            size: "Medium"
        },

        // New background tooltips
        guide: {
            title: "Guide Background",
            desc: "Je hebt je leven lang reizigers door de wildernis geleid. Je kent de paden en gevaren van de natuur.",
            skillProf: "Stealth, Survival",
            toolProf: "Cartographer's Tools",
            feature: "Magic Initiate (Druid) — Leer 2 druid cantrips en 1 first-level druid spell.",
            abilityScores: "+2/+1 verdeeld over DEX, WIS, CON"
        },
        sage: {
            title: "Sage Background",
            desc: "Jarenlang heb je kennis vergaard uit boeken en bibliotheken. Je bent een expert in je vakgebied.",
            skillProf: "Arcana, History",
            toolProf: "Calligrapher's Supplies",
            feature: "Magic Initiate (Wizard) — Leer 2 wizard cantrips en 1 first-level wizard spell.",
            abilityScores: "+2/+1 verdeeld over INT, WIS, CON"
        },
        soldier: {
            title: "Soldier Background",
            desc: "Je hebt gediend in een leger of militie. Je kent de discipline van het slagveld.",
            skillProf: "Athletics, Intimidation",
            toolProf: "Gaming Set",
            feature: "Savage Attacker — Eén keer per beurt herrol melee weapon damage dice en kies het hoogste.",
            abilityScores: "+2/+1 verdeeld over STR, DEX, CON"
        },
        acolyte: {
            title: "Acolyte Background",
            desc: "Je hebt je leven gewijd aan de dienst van een tempel of religieuze orde.",
            skillProf: "Insight, Religion",
            toolProf: "Calligrapher's Supplies",
            feature: "Magic Initiate (Cleric) — Leer 2 cleric cantrips en 1 first-level cleric spell.",
            abilityScores: "+2/+1 verdeeld over INT, WIS, CHA"
        },
        charlatan: {
            title: "Charlatan Background",
            desc: "Valse identiteiten, oplichterij en bedrog zijn je specialiteit.",
            skillProf: "Deception, Sleight of Hand",
            toolProf: "Forgery Kit",
            feature: "Skilled — Proficiency in 3 extra skills of tools naar keuze.",
            abilityScores: "+2/+1 verdeeld over DEX, CON, CHA"
        }
    },

    // ===== ITEMS DATABASE =====
    items: {
        // Weapon Mastery properties (5.5e): Cleave, Graze, Nick, Push, Sap, Slow, Topple, Vex
        // Only activated by classes with Weapon Mastery feature (Fighter, Barbarian, Paladin, Ranger, Rogue)
        weaponMasteryDesc: {
            cleave: "Bij een hit, maak een tweede aanval tegen een ander creature binnen 5ft (geen ability mod op damage).",
            graze: "Bij een miss, deal damage gelijk aan je ability modifier.",
            nick: "Bonus attack van dual-wielding is onderdeel van Attack action (bevrijdt bonus action).",
            push: "Bij een hit, duw target 10ft weg (Medium of kleiner, geen save).",
            sap: "Bij een hit, target heeft disadvantage op volgende attack voor je volgende beurt.",
            slow: "Bij een hit, verminder target's speed met 10ft tot begin van je volgende beurt.",
            topple: "Bij een hit, target maakt CON save (DC 8 + ability mod + prof) of valt prone.",
            vex: "Bij een hit, je volgende attack heeft advantage voor einde van je volgende beurt."
        },
        weapons: [
            { name: "Dagger", weight: 1, mastery: "nick" },
            { name: "Shortsword", weight: 2, mastery: "vex" },
            { name: "Shortbow", weight: 2, mastery: "slow" },
            { name: "Arrows (20)", weight: 1 },
            { name: "Light crossbow", weight: 5, mastery: "slow" },
            { name: "Bolts (20)", weight: 1.5 },
            { name: "Quarterstaff", weight: 4, mastery: "topple" },
            { name: "Dart", weight: 0.25, mastery: "vex" },
            { name: "Sling", weight: 0, mastery: "slow" },
            { name: "Rapier", weight: 2, mastery: "vex" },
            { name: "Longsword", weight: 3, mastery: "sap" },
            { name: "Handaxe", weight: 2, mastery: "vex" },
            { name: "Greatsword", weight: 6, mastery: "graze" },
            { name: "Greataxe", weight: 7, mastery: "cleave" },
            { name: "Warhammer", weight: 2, mastery: "push" },
            { name: "Battleaxe", weight: 4, mastery: "topple" },
            { name: "Longbow", weight: 2, mastery: "slow" },
            { name: "Maul", weight: 10, mastery: "topple" },
            { name: "Morningstar", weight: 4, mastery: "sap" },
            { name: "Scimitar", weight: 3, mastery: "nick" },
            { name: "Javelin", weight: 2, mastery: "slow" },
            { name: "Spear", weight: 3, mastery: "sap" },
            { name: "Mace", weight: 4, mastery: "sap" },
            { name: "Glaive", weight: 6, mastery: "graze" },
            { name: "Halberd", weight: 6, mastery: "cleave" },
            { name: "Trident", weight: 4, mastery: "topple" },
            { name: "War pick", weight: 2, mastery: "sap" },
            { name: "Whip", weight: 3, mastery: "slow" },
            { name: "Club", weight: 2, mastery: "slow" },
            { name: "Sickle", weight: 2, mastery: "nick" }
        ],
        armor: [
            { name: "Leather armor", weight: 10 },
            { name: "Studded leather", weight: 13 },
            { name: "Shield", weight: 6 },
            { name: "Padded armor", weight: 8 },
            { name: "Hide armor", weight: 12 },
            { name: "Chain shirt", weight: 20 },
            { name: "Scale mail", weight: 45 },
            { name: "Breastplate", weight: 20 },
            { name: "Half plate", weight: 40 },
            { name: "Ring mail", weight: 40 },
            { name: "Chain mail", weight: 55 },
            { name: "Splint armor", weight: 60 },
            { name: "Plate armor", weight: 65 }
        ],
        adventuring: [
            { name: "Backpack", weight: 5 },
            { name: "Bedroll", weight: 7 },
            { name: "Rations (1 dag)", weight: 2 },
            { name: "Waterskin", weight: 5 },
            { name: "Rope (50ft)", weight: 10 },
            { name: "Torch", weight: 1 },
            { name: "Tinderbox", weight: 1 },
            { name: "Grappling hook", weight: 4 },
            { name: "Piton (10)", weight: 2.5 },
            { name: "Lamp", weight: 1 },
            { name: "Oil (flask)", weight: 1 },
            { name: "Candle", weight: 0 },
            { name: "Crowbar", weight: 5 },
            { name: "Hammer", weight: 3 },
            { name: "Caltrops (20)", weight: 2 },
            { name: "Ball bearings (1000)", weight: 2 },
            { name: "Chain (10ft)", weight: 10 },
            { name: "Chalk (1 stuk)", weight: 0 },
            { name: "Climber's kit", weight: 12 },
            { name: "Healer's kit", weight: 3 },
            { name: "Hooded lantern", weight: 2 },
            { name: "Manacles", weight: 6 },
            { name: "Mirror (steel)", weight: 0.5 },
            { name: "Mess kit", weight: 1 },
            { name: "Potion of Healing", weight: 0.5 },
            { name: "Antitoxin (vial)", weight: 0 },
            { name: "Holy water (flask)", weight: 1 }
        ],
        tools: [
            { name: "Thieves' tools", weight: 1 },
            { name: "Disguise kit", weight: 3 },
            { name: "Forgery kit", weight: 5 },
            { name: "Poisoner's kit", weight: 2 },
            { name: "Herbalism kit", weight: 3 },
            { name: "Navigator's tools", weight: 2 },
            { name: "Gaming set", weight: 0 },
            { name: "Cartographer's tools", weight: 6 },
            { name: "Calligrapher's supplies", weight: 5 },
            { name: "Druidic focus (totem)", weight: 0 },
            { name: "Druidic focus (staff)", weight: 4 },
            { name: "Holy symbol (amulet)", weight: 1 },
            { name: "Holy symbol (emblem)", weight: 0 },
            { name: "Holy symbol (reliquary)", weight: 2 }
        ],
        containers: [
            { name: "Pouch", weight: 1 },
            { name: "Sack", weight: 0.5 },
            { name: "Chest", weight: 25 },
            { name: "Barrel", weight: 70 },
            { name: "Basket", weight: 2 },
            { name: "Case (map/scroll)", weight: 1 },
            { name: "Quiver", weight: 1 }
        ],
        spellcasting: [
            { name: "Component pouch", weight: 2 },
            { name: "Arcane focus (crystal)", weight: 1 },
            { name: "Arcane focus (orb)", weight: 3 },
            { name: "Arcane focus (rod)", weight: 2 },
            { name: "Arcane focus (staff)", weight: 4 },
            { name: "Arcane focus (wand)", weight: 1 },
            { name: "Spellbook", weight: 3 }
        ],
        personal: [
            { name: "Schetsboek", weight: 1 },
            { name: "Inkt & pen set", weight: 0.5 },
            { name: "Koperen ring (aan koord)", weight: 0 },
            { name: "Houten drakenbeeldje", weight: 0.25 },
            { name: "Vaders leren jas", weight: 4 },
            { name: "Burglar's pack", weight: 0 },
            { name: "Set versleten kleding", weight: 3 },
            { name: "Nette outfit", weight: 4 }
        ],
        custom: []
    },

    // ===== SORCERER SPELLS =====
    spells: {
        sorcerer: {
            // CANTRIPS
            0: [
                { name: "Acid Splash", time: "1 action", range: "60ft", comp: "V, S", dur: "Instant", desc: "Gooi een bubbel zuur naar 1-2 creatures binnen 5ft van elkaar. DEX save of 1d6 acid damage. Schaalt op 5e/11e/17e level." },
                { name: "Blade Ward", time: "1 action", range: "Self", comp: "V, S", dur: "Concentration, 1 min", desc: "Concentration, 1 minuut. Een creature dat jou raakt met een melee attack trekt 1d4 af van de attack roll. Schaalt op 5e/11e/17e level." },
                { name: "Chill Touch", time: "1 action", range: "120ft", comp: "V, S", dur: "1 ronde", desc: "Ghostly skeletal hand raakt een creature. 1d8 necrotic damage, target kan geen HP herstellen tot je volgende beurt. Undead krijgen disadvantage op attacks." },
                { name: "Dancing Lights", time: "1 action", range: "120ft", comp: "V, S, M (een beetje fosforus of wychwood, of een glowworm)", dur: "Concentration, 1 min", desc: "Creëer tot 4 fakkelvormige lichtjes binnen 120ft. Verplaats ze als bonus action. Concentration, 1 minuut." },
                { name: "Fire Bolt", time: "1 action", range: "120ft", comp: "V, S", dur: "Instant", desc: "Ranged spell attack, 1d10 fire damage, 120ft. Schaalt op 5e/11e/17e level." },
                { name: "Friends", time: "1 action", range: "10ft", comp: "S, M (een beetje make-up)", dur: "Concentration, 1 min", desc: "Concentration, 1 minuut. Advantage op CHA checks tegen een non-hostile creature. Na afloop weet het target dat je magie hebt gebruikt." },
                { name: "Light", time: "1 action", range: "Touch", comp: "V, M (een vuurvliegje of stukje fosforus)", dur: "1 uur", desc: "Een object straalt bright light uit in 20ft radius en dim light voor nog eens 20ft. Duurt 1 uur." },
                { name: "Mage Hand", time: "1 action", range: "30ft", comp: "V, S", dur: "1 min", desc: "Creëer een spectrale hand op 30ft die objecten kan manipuleren, deuren openen, etc. Duurt 1 minuut." },
                { name: "Mending", time: "1 minute", range: "Touch", comp: "V, S, M (twee lodestones)", dur: "Instant", desc: "Repareer een enkele breuk of scheur in een object (gebroken ketting, gescheurd stuk stof, etc.)." },
                { name: "Message", time: "1 action", range: "120ft", comp: "V, S, M (een stukje koperdraad)", dur: "1 ronde", desc: "Fluister een bericht naar een creature binnen 120ft. Alleen het target hoort het en kan fluisterend antwoorden." },
                { name: "Minor Illusion", time: "1 action", range: "30ft", comp: "S, M (een beetje fleece)", dur: "1 min", desc: "Creëer een geluid of beeld van een object binnen 30ft. Duurt 1 minuut. Investigation check om als illusie te herkennen." },
                { name: "Poison Spray", time: "1 action", range: "10ft", comp: "V, S", dur: "Instant", desc: "Giftige mist naar een creature binnen 10ft. CON save of 1d12 poison damage. Schaalt op 5e/11e/17e level." },
                { name: "Prestidigitation", time: "1 action", range: "10ft", comp: "V, S", dur: "Tot 1 uur", desc: "Klein magisch trucje: vonken, geluid, smaak veranderen, kleine illusie, licht, schoonmaken, etc. Duurt tot 1 uur." },
                { name: "Ray of Frost", time: "1 action", range: "60ft", comp: "V, S", dur: "Instant", desc: "Ranged spell attack, 1d8 cold damage, -10ft speed tot begin volgende beurt. 60ft range. Schaalt." },
                { name: "Shocking Grasp", time: "1 action", range: "Touch", comp: "V, S", dur: "Instant", desc: "Melee spell attack met advantage tegen metalen armor. 1d8 lightning damage, target kan geen reactions nemen. Schaalt." },
                { name: "True Strike", time: "1 action", range: "Self", comp: "S, M (een wapen ter waarde van 1sp+)", dur: "Instant", desc: "Maak een melee weapon attack met je spellcasting ability modifier i.p.v. STR/DEX. Bij een hit: 1d6 radiant damage (in plaats van normale weapon damage). Schaalt op 5e/11e/17e level." },
                { name: "Mind Sliver", time: "1 action", range: "60ft", comp: "V", dur: "1 ronde", desc: "INT save of 1d6 psychic damage en -1d4 van de volgende saving throw voor einde volgende beurt. 60ft. Schaalt." },
                { name: "Sorcerous Burst", time: "1 action", range: "120ft", comp: "V, S", dur: "Instant", desc: "Ranged spell attack: 1d8 damage van een random type (rol d8 voor element). Bij dubbele d8: voeg extra 1d8 toe (kan chain). Schaalt op 5e/11e/17e level." },
                { name: "Elementalism", time: "1 action", range: "30ft", comp: "V, S", dur: "Instant", desc: "Manipuleer een klein elementair effect: een briesje, een vlam ter grootte van een kaars, een straal water, of een handje aarde. Puur utility cantrip." }
            ],

            // 1ST LEVEL
            1: [
                { name: "Burning Hands", time: "1 action", range: "Self (15ft cone)", comp: "V, S", dur: "Instant", desc: "15ft cone of fire. DEX save, 3d6 fire damage (half bij save). Schaalt +1d6 per hogere spell slot." },
                { name: "Charm Person", time: "1 action", range: "30ft", comp: "V, S", dur: "1 uur", desc: "Betover een humanoid binnen 30ft. WIS save (advantage als je vecht). Het target beschouwt je als een goede vriend. Duurt 1 uur." },
                { name: "Chromatic Orb", time: "1 action", range: "90ft", comp: "V, S, M (een diamant ter waarde van minstens 50gp)", dur: "Instant", desc: "Ranged spell attack, 3d8 damage van een gekozen type (acid/cold/fire/lightning/poison/thunder). 90ft. Vereist 50gp diamant." },
                { name: "Color Spray", time: "1 action", range: "Self (15ft cone)", comp: "V, S, M (een snufje poeder of zand, rood/geel/blauw gekleurd)", dur: "1 ronde", desc: "15ft cone. 6d10 HP aan creatures worden blind (laagste HP eerst). Geen save. Schaalt +2d10 per slot." },
                { name: "Comprehend Languages", time: "1 action", range: "Self", comp: "V, S, M (een snufje roet en zout)", dur: "1 uur", desc: "Ritual. Je begrijpt elke gesproken taal die je hoort en geschreven tekst die je aanraakt. Duurt 1 uur." },
                { name: "Detect Magic", time: "1 action", range: "Self", comp: "V, S", dur: "Concentration, 10 min", desc: "Ritual. Concentration, 10 min. Voel de aanwezigheid van magie binnen 30ft. Zie de school of magic door dunne barrières heen." },
                { name: "Disguise Self", time: "1 action", range: "Self", comp: "V, S", dur: "1 uur", desc: "Verander je uiterlijk (kleding, armor, wapens, lengte ±1ft). Investigation check om door de illusie te kijken. Duurt 1 uur." },
                { name: "Expeditious Retreat", time: "1 bonus action", range: "Self", comp: "V, S", dur: "Concentration, 10 min", desc: "Concentration, 10 min. Bonus action Dash elke beurt." },
                { name: "False Life", time: "1 action", range: "Self", comp: "V, S, M (een kleine hoeveelheid alcohol of gedistilleerde geesten)", dur: "1 uur", desc: "Geef jezelf 1d4+4 temporary HP. Duurt 1 uur. Schaalt +5 temp HP per hogere slot." },
                { name: "Feather Fall", time: "1 reaction", range: "60ft", comp: "V, M (een kleine veer of stukje dons)", dur: "1 min", desc: "Reaction: tot 5 falling creatures binnen 60ft vallen langzaam (60ft/ronde) en nemen geen fall damage." },
                { name: "Fog Cloud", time: "1 action", range: "120ft", comp: "V, S", dur: "Concentration, 1 uur", desc: "20ft radius bol van mist. Heavily obscured area. Concentration, 1 uur. Schaalt +20ft radius per slot." },
                { name: "Jump", time: "1 action", range: "Touch", comp: "V, S, M (de achterpoot van een sprinkhaan)", dur: "1 min", desc: "Verdrievoudig de sprong-afstand van een creature dat je aanraakt. Duurt 1 minuut." },
                { name: "Mage Armor", time: "1 action", range: "Touch", comp: "V, S, M (een stukje gelooid leer)", dur: "8 uur", desc: "Touch. AC wordt 13 + DEX modifier voor een creature zonder armor. Duurt 8 uur." },
                { name: "Magic Missile", time: "1 action", range: "120ft", comp: "V, S", dur: "Instant", desc: "Drie gloeiende pijlen raken automatisch. Elk doet 1d4+1 force damage. Schaalt +1 pijl per hogere slot." },
                { name: "Ray of Sickness", time: "1 action", range: "60ft", comp: "V, S", dur: "Instant", desc: "Ranged spell attack, 2d8 poison damage. Bij een hit: CON save of ook poisoned tot einde volgende beurt. 60ft." },
                { name: "Shield", time: "1 reaction", range: "Self", comp: "V, S", dur: "1 ronde", desc: "Reaction: +5 AC tot begin volgende beurt, inclusief tegen de triggering attack. Blokkeert ook Magic Missile." },
                { name: "Silent Image", time: "1 action", range: "60ft", comp: "V, S, M (een beetje fleece)", dur: "Concentration, 10 min", desc: "Concentration, 10 min. Creëer een visuele illusie tot 15ft cube binnen 60ft. Verplaats met action. Investigation check." },
                { name: "Sleep", time: "1 action", range: "90ft", comp: "V, S, M (een snufje fijn zand, rozenblaadjes, of een krekel)", dur: "1 min", desc: "5d8 HP aan creatures in een 20ft radius vallen in slaap (laagste HP eerst). Geen save. Schaalt +2d8 per slot." },
                { name: "Thunderwave", time: "1 action", range: "Self (15ft cube)", comp: "V, S", dur: "Instant", desc: "15ft cube vanuit jou. CON save of 2d8 thunder damage en 10ft weggeduwd. Half damage bij save, niet geduwd. Luid geluid tot 300ft." },
                { name: "Witch Bolt", time: "1 action", range: "30ft", comp: "V, S, M (een takje van een boom die door bliksem is geraakt)", dur: "Concentration, 1 min", desc: "Ranged spell attack, 1d12 lightning damage. Concentration: action elke beurt voor automatisch 1d12 damage. 30ft." },
                { name: "Chaos Bolt", time: "1 action", range: "120ft", comp: "V, S", dur: "Instant", desc: "Ranged spell attack, 2d8+1d6 damage. Type bepaald door d8 roll. Bij dubbele d8: bolt springt naar een nieuw target!" },
                { name: "Absorb Elements", time: "1 reaction", range: "Self", comp: "S", dur: "1 ronde", desc: "Reaction bij acid/cold/fire/lightning/thunder damage. Resistance tegen die damage. Volgende melee attack doet +1d6 van dat type." }
            ],

            // 2ND LEVEL
            2: [
                { name: "Alter Self", time: "1 action", range: "Self", comp: "V, S", dur: "Concentration, 1 uur", desc: "Concentration, 1 uur. Verander je uiterlijk, groei aquatic adaptations, of krijg natural weapons (1d6+STR, magic)." },
                { name: "Blindness/Deafness", time: "1 action", range: "30ft", comp: "V", dur: "1 min", desc: "CON save of een creature wordt blind of deaf. Duurt 1 minuut, save elk einde van beurt. Schaalt +1 target per slot." },
                { name: "Blur", time: "1 action", range: "Self", comp: "V", dur: "Concentration, 1 min", desc: "Concentration, 1 min. Attackers hebben disadvantage op attack rolls tegen jou. Werkt niet tegen creatures met truesight of blindsight." },
                { name: "Cloud of Daggers", time: "1 action", range: "60ft", comp: "V, S, M (een glasscherf)", dur: "Concentration, 1 min", desc: "Concentration, 1 min. 5ft cube met draaiende dolken. 4d4 slashing damage aan creatures die erin starten. 60ft. Schaalt +2d4." },
                { name: "Crown of Madness", time: "1 action", range: "120ft", comp: "V, S", dur: "Concentration, 1 min", desc: "Concentration, 1 min. WIS save of target moet melee attack doen tegen een creature naar jouw keuze. Save elke beurt." },
                { name: "Darkness", time: "1 action", range: "60ft", comp: "V, M (vleermuisvacht en een druppel pek of stukje kool)", dur: "Concentration, 10 min", desc: "Concentration, 10 min. 15ft radius magische duisternis. Blokkeert darkvision en niet-magisch licht. Op object castbaar." },
                { name: "Darkvision", time: "1 action", range: "Touch", comp: "V, S, M (een gedroogde wortel of een snufje kattenhaar)", dur: "8 uur", desc: "Touch, 8 uur. Target krijgt darkvision tot 60ft." },
                { name: "Detect Thoughts", time: "1 action", range: "Self", comp: "V, S, M (een koperen stuk)", dur: "Concentration, 1 min", desc: "Concentration, 1 min. Lees oppervlaktegedachten. Action om dieper te graven (WIS save). Detecteer denkende creatures door barrières." },
                { name: "Enhance Ability", time: "1 action", range: "Touch", comp: "V, S, M (haar of veer van een dier)", dur: "Concentration, 1 uur", desc: "Concentration, 1 uur. Kies een van 6 buffs: advantage op checks van een ability score, plus extra effecten. Schaalt +1 target." },
                { name: "Enlarge/Reduce", time: "1 action", range: "30ft", comp: "V, S, M (een snufje ijzerpoeder)", dur: "Concentration, 1 min", desc: "Concentration, 1 min. CON save. Enlarge: +1d4 weapon damage, advantage STR checks. Reduce: -1d4 damage, disadvantage STR." },
                { name: "Gust of Wind", time: "1 action", range: "Self (60ft line)", comp: "V, S, M (een zaad van een peul)", dur: "Concentration, 1 min", desc: "Concentration, 1 min. 60ft lijn van sterke wind. STR save of 15ft weggeduwd. Difficult terrain met de wind mee." },
                { name: "Hold Person", time: "1 action", range: "60ft", comp: "V, S, M (een stukje ijzer)", dur: "Concentration, 1 min", desc: "Concentration, 1 min. WIS save of een humanoid is paralyzed. Save elke beurt. Schaalt +1 target per hogere slot." },
                { name: "Invisibility", time: "1 action", range: "Touch", comp: "V, S, M (een wimper gehuld in gum arabic)", dur: "Concentration, 1 uur", desc: "Concentration, 1 uur. Een creature dat je aanraakt wordt onzichtbaar. Eindigt bij aanval of spell casten. Schaalt +1 target." },
                { name: "Knock", time: "1 action", range: "60ft", comp: "V", dur: "Instant", desc: "Open een gesloten deur, kist of hangslot (magisch of niet). Produceert een luid geluid hoorbaar tot 300ft." },
                { name: "Levitate", time: "1 action", range: "60ft", comp: "V, S, M (een kleine leren lus of een stukje goudgaren)", dur: "Concentration, 10 min", desc: "Concentration, 10 min. Een creature of object (tot 500 lbs) stijgt 20ft. Target kan zich voortbewegen door ergens af te zetten." },
                { name: "Mirror Image", time: "1 action", range: "Self", comp: "V, S", dur: "1 min", desc: "Drie illusoire duplicaten verschijnen. Aanvallen raken mogelijk een duplicaat (AC 10+DEX). Duplicaat verdwijnt bij een hit. Duurt 1 min." },
                { name: "Misty Step", time: "1 bonus action", range: "Self", comp: "V", dur: "Instant", desc: "Bonus action: teleporteer tot 30ft naar een plek die je kunt zien." },
                { name: "Phantasmal Force", time: "1 action", range: "60ft", comp: "V, S, M (een beetje fleece)", dur: "Concentration, 1 min", desc: "Concentration, 1 min. INT save of target percipieert een illusie die 1d6 psychic damage per beurt kan doen. Investigation check." },
                { name: "Scorching Ray", time: "1 action", range: "120ft", comp: "V, S", dur: "Instant", desc: "Drie stralen van vuur. Ranged spell attack per straal, 2d6 fire damage elk. Schaalt +1 straal per hogere slot." },
                { name: "See Invisibility", time: "1 action", range: "Self", comp: "V, S, M (een snufje talk en zilverpoeder)", dur: "1 uur", desc: "Je ziet onzichtbare creatures en objecten. Je ziet ook het Ethereal Plane. Duurt 1 uur." },
                { name: "Shatter", time: "1 action", range: "60ft", comp: "V, S, M (een glassplinter of stukje mica)", dur: "Instant", desc: "10ft radius, 60ft range. CON save of 3d8 thunder damage (half bij save). Inorganic materiaal heeft disadvantage. Schaalt +1d8." },
                { name: "Spider Climb", time: "1 action", range: "Touch", comp: "V, S, M (een druppel bitumen en een spin)", dur: "Concentration, 1 uur", desc: "Concentration, 1 uur. Target kan klimmen op elke ondergrond inclusief plafonds, handen vrij. Touch." },
                { name: "Suggestion", time: "1 action", range: "30ft", comp: "V, M (een slangetong en een stukje honingraat of een druppel zoete olie)", dur: "Concentration, 8 uur", desc: "Concentration, 8 uur. WIS save of target volgt een redelijk-klinkende suggestie van maximaal twee zinnen op." },
                { name: "Web", time: "1 action", range: "60ft", comp: "V, S, M (een beetje spinnenweb)", dur: "Concentration, 1 uur", desc: "Concentration, 1 uur. 20ft cube webs. DEX save of restrained. Moeilijk terrein. Brandbaar (2d4 fire per beurt)." }
            ],

            // 3RD LEVEL
            3: [
                { name: "Blink", time: "1 action", range: "Self", comp: "V, S", dur: "1 min", desc: "Rol einde beurt d20: 11+ verdwijn naar Ethereal Plane tot begin volgende beurt. Duurt 1 minuut." },
                { name: "Clairvoyance", time: "10 minutes", range: "1 mile", comp: "V, S, M (een focus ter waarde van minstens 100gp)", dur: "Concentration, 10 min", desc: "Concentration, 10 min. Creëer een onzichtbare sensor op een bekende plek tot 1 mijl. Zie of hoor door de sensor." },
                { name: "Counterspell", time: "1 reaction", range: "60ft", comp: "S", dur: "Instant", desc: "Reaction: annuleer een spell van 3rd level of lager automatisch. Hogere spells: ability check DC 10 + spell level." },
                { name: "Daylight", time: "1 action", range: "60ft", comp: "V, S", dur: "1 uur", desc: "60ft radius bright light + 60ft dim light vanuit een punt of object. Duurt 1 uur. Verdrijft magische duisternis van 3rd level of lager." },
                { name: "Dispel Magic", time: "1 action", range: "120ft", comp: "V, S", dur: "Instant", desc: "Beëindig een magisch effect van 3rd level of lager automatisch. Hogere effecten: ability check DC 10 + spell level." },
                { name: "Fear", time: "1 action", range: "Self (30ft cone)", comp: "V, S, M (een witte veer of het hart van een kip)", dur: "Concentration, 1 min", desc: "Concentration, 1 min. 30ft cone. WIS save of frightened en moet Dash weg van jou. Save elke beurt (met line of sight naar jou)." },
                { name: "Fireball", time: "1 action", range: "150ft", comp: "V, S, M (een klein balletje vleermuismest en zwavel)", dur: "Instant", desc: "20ft radius explosie op een punt binnen 150ft. DEX save of 8d6 fire damage (half bij save). Schaalt +1d6 per hogere slot." },
                { name: "Fly", time: "1 action", range: "Touch", comp: "V, S, M (een veertje van een vogelvleugel)", dur: "Concentration, 10 min", desc: "Concentration, 10 min. Target krijgt 60ft flying speed. Bij einde: valt als het nog in de lucht is. Schaalt +1 target." },
                { name: "Gaseous Form", time: "1 action", range: "Touch", comp: "V, S, M (een beetje gaas en een wisje rook)", dur: "Concentration, 1 uur", desc: "Concentration, 1 uur. Target wordt een mistige wolk. Flying speed 10ft, resistance tegen nonmagical damage, kan door kleine openingen." },
                { name: "Haste", time: "1 action", range: "30ft", comp: "V, S, M (een snufje zoethout wortelpoeder)", dur: "Concentration, 1 min", desc: "Concentration, 1 min. Target krijgt +2 AC, double speed, advantage DEX saves, en een extra action per beurt. Bij einde: een beurt lang geen movement of actions." },
                { name: "Hypnotic Pattern", time: "1 action", range: "120ft", comp: "S, M (een gloeiend stokje wierook of een kristallen flesje met fosforescentie)", dur: "Concentration, 1 min", desc: "Concentration, 1 min. 30ft cube, 120ft range. WIS save of charmed en incapacitated. Stopt als target damage neemt of wakker geschud wordt." },
                { name: "Lightning Bolt", time: "1 action", range: "Self (100ft line)", comp: "V, S, M (een beetje vacht en een staaf van barnsteen, kristal of glas)", dur: "Instant", desc: "100ft lijn, 5ft breed. DEX save of 8d6 lightning damage (half bij save). Steekt brandbaar materiaal aan. Schaalt +1d6." },
                { name: "Major Image", time: "1 action", range: "120ft", comp: "V, S, M (een beetje fleece)", dur: "Concentration, 10 min", desc: "Concentration, 10 min. Creëer een illusie tot 20ft cube met geluid, geur en temperatuur. 120ft. Investigation check." },
                { name: "Protection from Energy", time: "1 action", range: "Touch", comp: "V, S", dur: "Concentration, 1 uur", desc: "Concentration, 1 uur. Touch. Target krijgt resistance tegen een gekozen damage type (acid/cold/fire/lightning/thunder)." },
                { name: "Sleet Storm", time: "1 action", range: "150ft", comp: "V, S, M (een snufje stof en een paar druppels water)", dur: "Concentration, 1 min", desc: "Concentration, 1 min. 40ft radius, 150ft range. Difficult terrain, heavily obscured. CON save of prone. Concentration check DC 12." },
                { name: "Slow", time: "1 action", range: "120ft", comp: "V, S, M (een druppel stroop)", dur: "Concentration, 1 min", desc: "Concentration, 1 min. Tot 6 creatures. WIS save of -2 AC, -2 DEX saves, geen reactions, halve speed, max 1 attack, en 50% kans spell mislukt." },
                { name: "Stinking Cloud", time: "1 action", range: "90ft", comp: "V, S, M (een rot ei of koolbladeren)", dur: "Concentration, 1 min", desc: "Concentration, 1 min. 20ft radius giftige mist. CON save of je beurt verliezen aan kokhalzen. 90ft. Spreidt met wind." },
                { name: "Tongues", time: "1 action", range: "Touch", comp: "V, M (een kleine kleipiramide)", dur: "1 uur", desc: "Touch, 1 uur. Target begrijpt elke gesproken taal en wordt begrepen door creatures die een taal kennen." },
                { name: "Water Breathing", time: "1 action", range: "30ft", comp: "V, S, M (een korte rietstengel of stukje stro)", dur: "24 uur", desc: "Ritual. Tot 10 creatures kunnen ademen onder water. Duurt 24 uur." },
                { name: "Water Walk", time: "1 action", range: "30ft", comp: "V, S, M (een stukje kurk)", dur: "1 uur", desc: "Ritual. Tot 10 creatures kunnen lopen over vloeistofoppervlakken. Duurt 1 uur." }
            ],

            // 4TH LEVEL
            4: [
                { name: "Banishment", time: "1 action", range: "60ft", comp: "V, S, M (een item dat het target weerzinwekkend vindt)", dur: "Concentration, 1 min", desc: "Concentration, 1 min. CHA save of target verdwijnt naar een harmless demiplane (of thuisplane als het een extraplanar is). Schaalt +1 target." },
                { name: "Blight", time: "1 action", range: "30ft", comp: "V, S", dur: "Instant", desc: "CON save of 8d8 necrotic damage (half bij save). Plant creatures hebben disadvantage en nemen max damage. 30ft." },
                { name: "Confusion", time: "1 action", range: "90ft", comp: "V, S, M (drie notenschalen)", dur: "Concentration, 1 min", desc: "Concentration, 1 min. 10ft radius, 90ft. WIS save of random actie elke beurt (d10 bepaalt gedrag). Save elke beurt." },
                { name: "Dimension Door", time: "1 action", range: "500ft", comp: "V", dur: "Instant", desc: "Teleporteer jezelf (en optioneel 1 willing creature) tot 500ft naar een plek die je kunt beschrijven of voorstellen." },
                { name: "Dominate Beast", time: "1 action", range: "60ft", comp: "V, S", dur: "Concentration, 1 min", desc: "Concentration, 1 min. WIS save of een beast volgt jouw telepathische commando's. Save bij damage. Hogere slots = langere duur." },
                { name: "Greater Invisibility", time: "1 action", range: "Touch", comp: "V, S", dur: "Concentration, 1 min", desc: "Concentration, 1 min. Target wordt onzichtbaar. Eindigt NIET bij aanval of spell casten!" },
                { name: "Ice Storm", time: "1 action", range: "300ft", comp: "V, S, M (een snufje stof en een paar druppels water)", dur: "Instant", desc: "20ft radius, 300ft range. DEX save of 2d8 bludgeoning + 4d6 cold (half bij save). Gebied wordt difficult terrain. Schaalt." },
                { name: "Polymorph", time: "1 action", range: "60ft", comp: "V, S, M (een rups-cocon)", dur: "Concentration, 1 uur", desc: "Concentration, 1 uur. WIS save. Transformeer een creature in een beast met CR ≤ target's level. Nieuwe HP, reverteert bij 0 HP." },
                { name: "Stoneskin", time: "1 action", range: "Touch", comp: "V, S, M (diamantstof ter waarde van 100gp, wordt verbruikt)", dur: "Concentration, 1 uur", desc: "Concentration, 1 uur. Touch, 100gp diamant. Resistance tegen nonmagical bludgeoning, piercing en slashing damage." },
                { name: "Wall of Fire", time: "1 action", range: "120ft", comp: "V, S, M (een stukje fosforus)", dur: "Concentration, 1 min", desc: "Concentration, 1 min. 60ft lang of 20ft diameter ring, 20ft hoog. 5d8 fire damage bij binnentreden of starten. Eén zijde doet damage." }
            ],

            // 5TH LEVEL
            5: [
                { name: "Animate Objects", time: "1 action", range: "120ft", comp: "V, S", dur: "Concentration, 1 min", desc: "Concentration, 1 min. Animeer tot 10 kleine objecten. Ze hebben AC, HP, en een bonus action om te aanvallen. Schaalt +2 objecten." },
                { name: "Cloudkill", time: "1 action", range: "120ft", comp: "V, S", dur: "Concentration, 10 min", desc: "Concentration, 10 min. 20ft radius giftige mist. CON save of 5d8 poison (half bij save). Beweegt 10ft per beurt met de wind." },
                { name: "Cone of Cold", time: "1 action", range: "Self (60ft cone)", comp: "V, S, M (een kleine kristallen of glazen kegel)", dur: "Instant", desc: "60ft cone. CON save of 8d8 cold damage (half bij save). Gedode creatures worden bevroren. Schaalt +1d8." },
                { name: "Creation", time: "1 minute", range: "30ft", comp: "V, S, M (een stukje van het te creëren materiaal)", dur: "Speciaal", desc: "Maak een niet-levend object van plantaardig of mineraal materiaal. Grootte tot 5ft cube. Duur afhankelijk van materiaal." },
                { name: "Dominate Person", time: "1 action", range: "60ft", comp: "V, S", dur: "Concentration, 1 min", desc: "Concentration, 1 min. WIS save of een humanoid volgt jouw telepathische commando's. Save bij damage. Hogere slots = langere duur." },
                { name: "Hold Monster", time: "1 action", range: "90ft", comp: "V, S, M (een stukje ijzer)", dur: "Concentration, 1 min", desc: "Concentration, 1 min. WIS save of paralyzed. Werkt op elk creature type. Save elke beurt. Schaalt +1 target." },
                { name: "Insect Plague", time: "1 action", range: "300ft", comp: "V, S, M (een paar suikerkorrels, wat graankorrels en een veeg vet)", dur: "Concentration, 10 min", desc: "Concentration, 10 min. 20ft radius zwerm, 300ft. CON save of 4d10 piercing (half bij save). Difficult terrain. Schaalt +1d10." },
                { name: "Seeming", time: "1 action", range: "30ft", comp: "V, S", dur: "8 uur", desc: "Verander het uiterlijk van elke creature binnen 30ft. Duurt 8 uur. CHA save als target unwilling. Investigation check." },
                { name: "Telekinesis", time: "1 action", range: "60ft", comp: "V, S", dur: "Concentration, 10 min", desc: "Concentration, 10 min. Beweeg een creature of object tot 1000 lbs. Creatures: contested ability check. 60ft range." },
                { name: "Teleportation Circle", time: "1 minute", range: "10ft", comp: "V, M (zeldzaam krijt en inkt met edelstenen ter waarde van 50gp, wordt verbruikt)", dur: "1 ronde", desc: "Teken een cirkel die je teleporteert naar een permanente sigil sequence die je kent. 10ft radius. Duurt 1 ronde." },
                { name: "Wall of Stone", time: "1 action", range: "120ft", comp: "V, S, M (een klein blok graniet)", dur: "Concentration, 10 min", desc: "Concentration, 10 min. 10 panelen van 10x10ft steen, 6 inches dik. Elk paneel AC 15, 30 HP. Kan permanent worden." },
                { name: "Synaptic Static", time: "1 action", range: "120ft", comp: "V, S", dur: "Instant", desc: "20ft radius, 120ft. INT save of 8d6 psychic damage (half bij save). Gefaalde targets: -1d6 van attack rolls, checks en concentration saves, 1 min." }
            ],

            // 6TH LEVEL
            6: [
                { name: "Arcane Gate", time: "1 action", range: "500ft", comp: "V, S", dur: "Concentration, 10 min", desc: "Concentration, 10 min. Twee gelinkte portalen binnen 500ft. Creatures kunnen er doorheen stappen in beide richtingen." },
                { name: "Chain Lightning", time: "1 action", range: "150ft", comp: "V, S, M (een beetje vacht, een stukje barnsteen, glas of kristallen staaf, en drie zilveren pinnen)", dur: "Instant", desc: "Bliksemschicht raakt een target en springt naar 3 extra targets binnen 30ft. DEX save of 10d8 lightning (half bij save). Schaalt." },
                { name: "Circle of Death", time: "1 action", range: "150ft", comp: "V, S, M (het poeder van een verpletterde zwarte parel ter waarde van minstens 500gp)", dur: "Instant", desc: "60ft radius, 150ft range. CON save of 8d6 necrotic damage (half bij save). 500gp materiaal component." },
                { name: "Disintegrate", time: "1 action", range: "60ft", comp: "V, S, M (een lodestone en een snufje stof)", dur: "Instant", desc: "Ranged spell attack-achtige DEX save. 10d6+40 force damage. Bij 0 HP: target wordt volledig tot stof gereduceerd. 60ft." },
                { name: "Eyebite", time: "1 action", range: "Self", comp: "V, S", dur: "Concentration, 1 min", desc: "Concentration, 1 min. Elke beurt als action: sleep, panic, of sicken een creature dat je aankijkt. WIS save." },
                { name: "Globe of Invulnerability", time: "1 action", range: "Self (10ft radius)", comp: "V, S, M (een glazen of kristallen kraal die uiteenspat als de spell eindigt)", dur: "Concentration, 1 min", desc: "Concentration, 1 min. 10ft radius bol. Spells van 5th level of lager kunnen de bol niet penetreren. Schaalt." },
                { name: "Mass Suggestion", time: "1 action", range: "60ft", comp: "V, M (een slangetong en een stukje honingraat of een druppel zoete olie)", dur: "24 uur", desc: "Suggereer een activiteit aan tot 12 creatures. WIS save. Geen concentration, duurt 24 uur." },
                { name: "Move Earth", time: "1 action", range: "120ft", comp: "V, S, M (een ijzeren kling en een klein zakje met aarde, klei en zand)", dur: "Concentration, 2 uur", desc: "Concentration, 2 uur. Verplaats aarde in een 40ft vierkant. 120ft range. Reshape terrein over tijd." },
                { name: "Sunbeam", time: "1 action", range: "Self (60ft line)", comp: "V, S, M (een vergrootglas, een stukje zonnesteen, en een zaad van een vuurplant)", dur: "Concentration, 1 min", desc: "Concentration, 1 min. 60ft lijn van licht. CON save of 6d8 radiant en blind. Undo darkness. Action elke beurt herhalen." },
                { name: "True Seeing", time: "1 action", range: "Touch", comp: "V, S, M (zalf voor de ogen ter waarde van 25gp, gemaakt van paddenstoelpoeder, saffraan en vet, wordt verbruikt)", dur: "1 uur", desc: "Touch, 1 uur. Target ziet in duisternis, ziet onzichtbare creatures, illusies doorzien, en het Ethereal Plane. 120ft truesight." }
            ],

            // 7TH LEVEL
            7: [
                { name: "Delayed Blast Fireball", time: "1 action", range: "150ft", comp: "V, S, M (een klein balletje vleermuismest en zwavel)", dur: "Concentration, 1 min", desc: "Concentration, 1 min. Gloeiende korrel op een punt. Ontploft bij concentration einde: 12d6 fire +1d6 per extra ronde gewacht. 150ft." },
                { name: "Etherealness", time: "1 action", range: "Self", comp: "V, S", dur: "8 uur", desc: "Stap naar het Ethereal Plane. Je kunt de Material Plane zien (60ft, grijs). Duurt 8 uur. Schaalt +3 targets per slot." },
                { name: "Finger of Death", time: "1 action", range: "60ft", comp: "V, S", dur: "Instant", desc: "CON save of 7d8+30 necrotic (half bij save). Humanoids gedood door deze spell staan op als zombie onder jouw controle." },
                { name: "Fire Storm", time: "1 action", range: "150ft", comp: "V, S", dur: "Instant", desc: "Tot 10 cubes van 10ft in een gebied binnen 150ft. DEX save of 7d10 fire (half bij save). Kies of het planten aansteekt." },
                { name: "Plane Shift", time: "1 action", range: "Touch", comp: "V, S, M (een gevorkte metalen staaf ter waarde van minstens 250gp, afgestemd op het doelplane)", dur: "Instant", desc: "Touch. Teleporteer jezelf en tot 8 willing creatures naar een ander plane. Of ranged CHA save om een target te banishen." },
                { name: "Prismatic Spray", time: "1 action", range: "Self (60ft cone)", comp: "V, S", dur: "Instant", desc: "60ft cone. Elke creature rolt d8 voor een random effect: fire/acid/lightning/poison/cold/petrification/banishment. DEX save." },
                { name: "Reverse Gravity", time: "1 action", range: "100ft", comp: "V, S, M (een lodestone en ijzervijlsel)", dur: "Concentration, 1 min", desc: "Concentration, 1 min. 50ft radius, 100ft hoog. Alles valt omhoog. DEX save om iets vast te grijpen." },
                { name: "Teleport", time: "1 action", range: "10ft", comp: "V", dur: "Instant", desc: "Teleporteer jezelf en tot 8 willing creatures naar een bekende locatie. Kans op mishap afhankelijk van bekendheid." }
            ],

            // 8TH LEVEL
            8: [
                { name: "Dominate Monster", time: "1 action", range: "60ft", comp: "V, S", dur: "Concentration, 1 uur", desc: "Concentration, 1 uur. WIS save of elk type creature volgt jouw telepathische commando's. Save bij damage. Schaalt in duur." },
                { name: "Earthquake", time: "1 action", range: "500ft", comp: "V, S, M (een snufje aarde, een stukje rots en een klomp klei)", dur: "Concentration, 1 min", desc: "Concentration, 1 min. 100ft radius. CON save of prone. Fissures, structurele schade, instorting van gebouwen." },
                { name: "Incendiary Cloud", time: "1 action", range: "150ft", comp: "V, S", dur: "Concentration, 1 min", desc: "Concentration, 1 min. 20ft radius brandende wolk. DEX save of 10d8 fire (half bij save) elke beurt. Beweegt 10ft/ronde." },
                { name: "Power Word Stun", time: "1 action", range: "60ft", comp: "V", dur: "Instant", desc: "Kies een creature met 150 HP of minder: het is stunned. Geen save. CON save elke beurt om te eindigen." },
                { name: "Sunburst", time: "1 action", range: "150ft", comp: "V, S, M (vuur en een stukje zonnesteen)", dur: "Instant", desc: "60ft radius, 150ft range. CON save of 12d6 radiant en blind 1 min. Verdrijft magische duisternis." }
            ],

            // 9TH LEVEL
            9: [
                { name: "Gate", time: "1 action", range: "60ft", comp: "V, S, M (een diamant ter waarde van minstens 5000gp)", dur: "Concentration, 1 min", desc: "Open een portaal naar een ander plane of roep een specifiek wezen op bij naam. Het portaal is tweezijdig. Concentration, 1 min." },
                { name: "Meteor Swarm", time: "1 action", range: "1 mile", comp: "V, S", dur: "Instant", desc: "Vier 40ft radius explosies op punten binnen 1 mijl. DEX save of 20d6 fire + 20d6 bludgeoning (half bij save)." },
                { name: "Power Word Kill", time: "1 action", range: "60ft", comp: "V", dur: "Instant", desc: "Kies een creature met 100 HP of minder: het sterft onmiddellijk. Geen save." },
                { name: "Time Stop", time: "1 action", range: "Self", comp: "V", dur: "Instant", desc: "Stop de tijd voor 1d4+1 beurten. Je handelt alleen. Eindigt als je een ander creature beïnvloedt of beschadigt." },
                { name: "Wish", time: "1 action", range: "Self", comp: "V", dur: "Instant", desc: "De machtigste spell. Dupliceer elke spell van 8th level of lager, of creëer een ander effect naar DM's oordeel. Risicovol bij creatief gebruik." },
                { name: "Psychic Scream", time: "1 action", range: "90ft", comp: "S", dur: "Instant", desc: "Tot 10 creatures binnen 90ft. INT save of 14d6 psychic damage en stunned. Bij falen met INT 2 of lager: hoofd ontploft." }
            ]
        },

        // ===== WIZARD SPELLS =====
        wizard: {
            0: [
                { name: "Fire Bolt", time: "1 action", range: "120ft", comp: "V, S", dur: "Instant", desc: "Ranged spell attack, 1d10 fire damage, 120ft. Schaalt op 5e/11e/17e level." },
                { name: "Mage Hand", time: "1 action", range: "30ft", comp: "V, S", dur: "1 min", desc: "Creëer een spectrale hand op 30ft die objecten kan manipuleren, deuren openen, etc. Duurt 1 minuut." },
                { name: "Prestidigitation", time: "1 action", range: "10ft", comp: "V, S", dur: "Tot 1 uur", desc: "Klein magisch trucje: vonken, geluid, smaak veranderen, kleine illusie, licht, schoonmaken, etc." },
                { name: "Minor Illusion", time: "1 action", range: "30ft", comp: "S, M (een beetje fleece)", dur: "1 min", desc: "Creëer een geluid of beeld van een object binnen 30ft. Investigation check om als illusie te herkennen." },
                { name: "Light", time: "1 action", range: "Touch", comp: "V, M (een vuurvliegje)", dur: "1 uur", desc: "Een object straalt bright light uit in 20ft radius en dim light voor nog eens 20ft. Duurt 1 uur." },
                { name: "Ray of Frost", time: "1 action", range: "60ft", comp: "V, S", dur: "Instant", desc: "Ranged spell attack, 1d8 cold damage, -10ft speed tot begin volgende beurt. Schaalt." },
                { name: "Shocking Grasp", time: "1 action", range: "Touch", comp: "V, S", dur: "Instant", desc: "Melee spell attack met advantage tegen metalen armor. 1d8 lightning damage, target kan geen reactions nemen." },
                { name: "Chill Touch", time: "1 action", range: "120ft", comp: "V, S", dur: "1 ronde", desc: "1d8 necrotic damage, target kan geen HP herstellen tot je volgende beurt. Undead krijgen disadvantage op attacks." },
                { name: "Mending", time: "1 minute", range: "Touch", comp: "V, S, M (twee lodestones)", dur: "Instant", desc: "Repareer een enkele breuk of scheur in een object." },
                { name: "Message", time: "1 action", range: "120ft", comp: "V, S, M (koperdraad)", dur: "1 ronde", desc: "Fluister een bericht naar een creature binnen 120ft. Alleen het target hoort het en kan antwoorden." },
                { name: "Blade Ward", time: "1 action", range: "Self", comp: "V, S", dur: "1 ronde", desc: "Resistance tegen bludgeoning, piercing en slashing damage van weapon attacks tot einde volgende beurt." },
                { name: "Friends", time: "1 action", range: "Self", comp: "S, M (make-up)", dur: "Concentration, 1 min", desc: "Advantage op CHA checks tegen een non-hostile creature. Na afloop weet het target dat je magie gebruikte." },
                { name: "True Strike", time: "1 action", range: "30ft", comp: "S", dur: "Concentration, 1 ronde", desc: "Advantage op je eerste attack roll tegen het target op je volgende beurt." },
                { name: "Mind Sliver", time: "1 action", range: "60ft", comp: "V", dur: "1 ronde", desc: "INT save of 1d6 psychic damage en -1d4 van de volgende saving throw. Schaalt." },
                { name: "Toll the Dead", time: "1 action", range: "60ft", comp: "V, S", dur: "Instant", desc: "WIS save of 1d8 necrotic damage (1d12 als target HP mist). Schaalt." },
                { name: "Booming Blade", time: "1 action", range: "Self (5ft)", comp: "S, M (een wapen)", dur: "1 ronde", desc: "Melee weapon attack. Bij hit: als target beweegt, 1d8 thunder damage. Schaalt." }
            ],
            1: [
                { name: "Shield", time: "1 reaction", range: "Self", comp: "V, S", dur: "1 ronde", desc: "Reaction: +5 AC tot begin volgende beurt, inclusief tegen de triggering attack. Blokkeert Magic Missile." },
                { name: "Magic Missile", time: "1 action", range: "120ft", comp: "V, S", dur: "Instant", desc: "Drie pijlen raken automatisch. Elk doet 1d4+1 force damage. Schaalt +1 pijl per hogere slot." },
                { name: "Mage Armor", time: "1 action", range: "Touch", comp: "V, S, M (gelooid leer)", dur: "8 uur", desc: "AC wordt 13 + DEX modifier voor een creature zonder armor. Duurt 8 uur." },
                { name: "Detect Magic", time: "1 action", range: "Self", comp: "V, S", dur: "Concentration, 10 min", desc: "Ritual. Voel de aanwezigheid van magie binnen 30ft." },
                { name: "Find Familiar", time: "1 uur", range: "10ft", comp: "V, S, M (10gp houtskool en kruiden)", dur: "Instant", desc: "Roep een familiar op (uil, kat, etc.). Je kunt door zijn zintuigen kijken en spells via hem casten." },
                { name: "Identify", time: "1 minute", range: "Touch", comp: "V, S, M (parel van 100gp)", dur: "Instant", desc: "Ritual. Leer de eigenschappen van een magisch item of actieve spells op een creature." },
                { name: "Chromatic Orb", time: "1 action", range: "90ft", comp: "V, S, M (diamant van 50gp)", dur: "Instant", desc: "Ranged spell attack, 3d8 damage van gekozen type (acid/cold/fire/lightning/poison/thunder)." },
                { name: "Thunderwave", time: "1 action", range: "Self (15ft cube)", comp: "V, S", dur: "Instant", desc: "CON save of 2d8 thunder damage en 10ft weggeduwd. Half bij save." },
                { name: "Sleep", time: "1 action", range: "90ft", comp: "V, S, M (zand)", dur: "1 min", desc: "5d8 HP aan creatures in 20ft radius vallen in slaap (laagste HP eerst). Schaalt +2d8." },
                { name: "Burning Hands", time: "1 action", range: "Self (15ft cone)", comp: "V, S", dur: "Instant", desc: "15ft cone. DEX save of 3d6 fire damage (half bij save). Schaalt +1d6." },
                { name: "Charm Person", time: "1 action", range: "30ft", comp: "V, S", dur: "1 uur", desc: "WIS save (advantage als je vecht). Target beschouwt je als goede vriend. Duurt 1 uur." },
                { name: "Disguise Self", time: "1 action", range: "Self", comp: "V, S", dur: "1 uur", desc: "Verander je uiterlijk. Investigation check om door de illusie te kijken. Duurt 1 uur." },
                { name: "Feather Fall", time: "1 reaction", range: "60ft", comp: "V, M (een veer)", dur: "1 min", desc: "Reaction: tot 5 falling creatures vallen langzaam en nemen geen fall damage." },
                { name: "Fog Cloud", time: "1 action", range: "120ft", comp: "V, S", dur: "Concentration, 1 uur", desc: "20ft radius mist. Heavily obscured. Concentration, 1 uur." },
                { name: "Comprehend Languages", time: "1 action", range: "Self", comp: "V, S, M (roet en zout)", dur: "1 uur", desc: "Ritual. Je begrijpt elke gesproken taal en geschreven tekst. Duurt 1 uur." },
                { name: "Color Spray", time: "1 action", range: "Self (15ft cone)", comp: "V, S, M (gekleurd poeder)", dur: "1 ronde", desc: "6d10 HP aan creatures worden blind (laagste HP eerst). Geen save. Schaalt +2d10." },
                { name: "False Life", time: "1 action", range: "Self", comp: "V, S, M (alcohol)", dur: "1 uur", desc: "1d4+4 temporary HP. Duurt 1 uur. Schaalt +5 temp HP per hogere slot." },
                { name: "Absorb Elements", time: "1 reaction", range: "Self", comp: "S", dur: "1 ronde", desc: "Reaction bij elementaire damage. Resistance + volgende melee attack doet +1d6 van dat type." },
                { name: "Silvery Barbs", time: "1 reaction", range: "60ft", comp: "V", dur: "Instant", desc: "Reaction: creature herwerpt succes en neemt laagste. Geef een ally advantage op volgende roll." },
                { name: "Tasha's Hideous Laughter", time: "1 action", range: "30ft", comp: "V, S, M (taartjes en een veer)", dur: "Concentration, 1 min", desc: "WIS save of target valt prone en is incapacitated door lachen. Save elke beurt en bij damage." }
            ],
            2: [
                { name: "Misty Step", time: "1 bonus action", range: "Self", comp: "V", dur: "Instant", desc: "Bonus action: teleporteer tot 30ft naar een plek die je kunt zien." },
                { name: "Scorching Ray", time: "1 action", range: "120ft", comp: "V, S", dur: "Instant", desc: "Drie vuurstralen. Ranged spell attack per straal, 2d6 fire damage. Schaalt +1 straal." },
                { name: "Hold Person", time: "1 action", range: "60ft", comp: "V, S, M (ijzer)", dur: "Concentration, 1 min", desc: "WIS save of humanoid is paralyzed. Save elke beurt. Schaalt +1 target." },
                { name: "Invisibility", time: "1 action", range: "Touch", comp: "V, S, M (wimper in gum arabic)", dur: "Concentration, 1 uur", desc: "Creature wordt onzichtbaar. Eindigt bij aanval of spell. Schaalt +1 target." },
                { name: "Web", time: "1 action", range: "60ft", comp: "V, S, M (spinnenweb)", dur: "Concentration, 1 uur", desc: "20ft cube webs. DEX save of restrained. Moeilijk terrein. Brandbaar." },
                { name: "Mirror Image", time: "1 action", range: "Self", comp: "V, S", dur: "1 min", desc: "Drie illusoire duplicaten. Aanvallen raken mogelijk een duplicaat dat verdwijnt bij hit." },
                { name: "Shatter", time: "1 action", range: "60ft", comp: "V, S, M (glassplinter)", dur: "Instant", desc: "10ft radius. CON save of 3d8 thunder damage. Schaalt +1d8." },
                { name: "Knock", time: "1 action", range: "60ft", comp: "V", dur: "Instant", desc: "Open een gesloten deur, kist of hangslot. Luid geluid hoorbaar tot 300ft." },
                { name: "Levitate", time: "1 action", range: "60ft", comp: "V, S, M (leren lus)", dur: "Concentration, 10 min", desc: "Creature of object stijgt 20ft. Target beweegt zich door ergens af te zetten." },
                { name: "Blur", time: "1 action", range: "Self", comp: "V", dur: "Concentration, 1 min", desc: "Attackers hebben disadvantage op attack rolls tegen jou." },
                { name: "Darkness", time: "1 action", range: "60ft", comp: "V, M (vleermuisvacht en pek)", dur: "Concentration, 10 min", desc: "15ft radius magische duisternis. Blokkeert darkvision en niet-magisch licht." },
                { name: "Detect Thoughts", time: "1 action", range: "Self", comp: "V, S, M (koperstuk)", dur: "Concentration, 1 min", desc: "Lees oppervlaktegedachten. Action om dieper te graven (WIS save)." },
                { name: "Enlarge/Reduce", time: "1 action", range: "30ft", comp: "V, S, M (ijzerpoeder)", dur: "Concentration, 1 min", desc: "CON save. Enlarge: +1d4 weapon damage. Reduce: -1d4 damage." },
                { name: "Phantasmal Force", time: "1 action", range: "60ft", comp: "V, S, M (fleece)", dur: "Concentration, 1 min", desc: "INT save of target percipieert een illusie die 1d6 psychic damage per beurt doet." },
                { name: "See Invisibility", time: "1 action", range: "Self", comp: "V, S, M (talk)", dur: "1 uur", desc: "Je ziet onzichtbare creatures en objecten, plus het Ethereal Plane. Duurt 1 uur." },
                { name: "Spider Climb", time: "1 action", range: "Touch", comp: "V, S, M (spin en bitumen)", dur: "Concentration, 1 uur", desc: "Target kan klimmen op elke ondergrond inclusief plafonds, handen vrij." },
                { name: "Suggestion", time: "1 action", range: "30ft", comp: "V, M (slangetong en honingraat)", dur: "Concentration, 8 uur", desc: "WIS save of target volgt een redelijk-klinkende suggestie op." },
                { name: "Flaming Sphere", time: "1 action", range: "60ft", comp: "V, S, M (talg en ijzerpoeder)", dur: "Concentration, 1 min", desc: "5ft diameter vuurbol. 2d6 fire damage bij nadering. Bonus action om te verplaatsen." }
            ],
            3: [
                { name: "Fireball", time: "1 action", range: "150ft", comp: "V, S, M (vleermuismest en zwavel)", dur: "Instant", desc: "20ft radius explosie. DEX save of 8d6 fire damage (half bij save). Schaalt +1d6." },
                { name: "Counterspell", time: "1 reaction", range: "60ft", comp: "S", dur: "Instant", desc: "Reaction: annuleer een spell van 3rd level of lager automatisch. Hogere: ability check DC 10 + level." },
                { name: "Dispel Magic", time: "1 action", range: "120ft", comp: "V, S", dur: "Instant", desc: "Beëindig een magisch effect van 3rd level of lager. Hogere: ability check DC 10 + level." },
                { name: "Fly", time: "1 action", range: "Touch", comp: "V, S, M (veertje)", dur: "Concentration, 10 min", desc: "Target krijgt 60ft flying speed. Bij einde: valt als het nog in de lucht is." },
                { name: "Haste", time: "1 action", range: "30ft", comp: "V, S, M (zoethoutwortelpoeder)", dur: "Concentration, 1 min", desc: "+2 AC, double speed, advantage DEX saves, extra action per beurt. Bij einde: 1 beurt geen actions." },
                { name: "Lightning Bolt", time: "1 action", range: "Self (100ft line)", comp: "V, S, M (vacht en barnsteen)", dur: "Instant", desc: "100ft lijn. DEX save of 8d6 lightning damage (half bij save). Schaalt +1d6." },
                { name: "Hypnotic Pattern", time: "1 action", range: "120ft", comp: "S, M (gloeiend wierookstokje)", dur: "Concentration, 1 min", desc: "30ft cube. WIS save of charmed en incapacitated. Stopt bij damage of wakker schudden." },
                { name: "Slow", time: "1 action", range: "120ft", comp: "V, S, M (stroop)", dur: "Concentration, 1 min", desc: "Tot 6 creatures. WIS save of halve speed, -2 AC, max 1 attack, geen reactions." },
                { name: "Fear", time: "1 action", range: "Self (30ft cone)", comp: "V, S, M (witte veer)", dur: "Concentration, 1 min", desc: "30ft cone. WIS save of frightened en moet Dash weg van jou." },
                { name: "Animate Dead", time: "1 minute", range: "10ft", comp: "V, S, M (bloed en botsplinter)", dur: "Instant", desc: "Animeer een skelet of zombie uit een lijk. Gehoorzaamt jouw commando's. Hercast om controle te behouden." },
                { name: "Sending", time: "1 action", range: "Onbeperkt", comp: "V, S, M (koperdraad)", dur: "1 ronde", desc: "Stuur max 25 woorden naar een creature dat je kent. Het kan meteen antwoorden." },
                { name: "Clairvoyance", time: "10 minutes", range: "1 mile", comp: "V, S, M (focus van 100gp)", dur: "Concentration, 10 min", desc: "Onzichtbare sensor op een bekende plek. Zie of hoor door de sensor." },
                { name: "Tongues", time: "1 action", range: "Touch", comp: "V, M (kleipiramide)", dur: "1 uur", desc: "Target begrijpt elke gesproken taal en wordt begrepen door talige creatures." }
            ],
            4: [
                { name: "Polymorph", time: "1 action", range: "60ft", comp: "V, S, M (rups-cocon)", dur: "Concentration, 1 uur", desc: "WIS save. Transformeer een creature in een beast met CR gelijk aan level. Reverteert bij 0 HP." },
                { name: "Greater Invisibility", time: "1 action", range: "Touch", comp: "V, S", dur: "Concentration, 1 min", desc: "Target wordt onzichtbaar. Eindigt NIET bij aanval of spell casten!" },
                { name: "Dimension Door", time: "1 action", range: "500ft", comp: "V", dur: "Instant", desc: "Teleporteer jezelf (en 1 willing creature) tot 500ft naar een plek die je kunt beschrijven." },
                { name: "Banishment", time: "1 action", range: "60ft", comp: "V, S, M (weerzinwekkend item)", dur: "Concentration, 1 min", desc: "CHA save of target verdwijnt naar een harmless demiplane. Schaalt +1 target." },
                { name: "Wall of Fire", time: "1 action", range: "120ft", comp: "V, S, M (fosforus)", dur: "Concentration, 1 min", desc: "60ft lang of ring, 20ft hoog. 5d8 fire damage bij binnentreden of starten." },
                { name: "Ice Storm", time: "1 action", range: "300ft", comp: "V, S, M (stof en water)", dur: "Instant", desc: "20ft radius. DEX save of 2d8 bludgeoning + 4d6 cold. Wordt difficult terrain." },
                { name: "Arcane Eye", time: "1 action", range: "30ft", comp: "V, S, M (vleermuisvacht)", dur: "Concentration, 1 uur", desc: "Onzichtbaar magisch oog dat je kunt besturen en waardoor je kunt kijken." }
            ],
            5: [
                { name: "Wall of Force", time: "1 action", range: "120ft", comp: "V, S, M (edelsteenpoeder)", dur: "Concentration, 10 min", desc: "Onzichtbare muur van kracht. Niets kan erdoorheen. Geen Disintegrate." },
                { name: "Cone of Cold", time: "1 action", range: "Self (60ft cone)", comp: "V, S, M (kristallen kegel)", dur: "Instant", desc: "60ft cone. CON save of 8d8 cold damage (half bij save). Schaalt +1d8." },
                { name: "Telekinesis", time: "1 action", range: "60ft", comp: "V, S", dur: "Concentration, 10 min", desc: "Beweeg creature of object tot 1000 lbs. Creatures: contested ability check." },
                { name: "Animate Objects", time: "1 action", range: "120ft", comp: "V, S", dur: "Concentration, 1 min", desc: "Animeer tot 10 kleine objecten. Ze vallen aan als bonus action. Schaalt +2 objecten." },
                { name: "Hold Monster", time: "1 action", range: "90ft", comp: "V, S, M (ijzer)", dur: "Concentration, 1 min", desc: "WIS save of paralyzed. Werkt op elk creature type. Save elke beurt." },
                { name: "Scrying", time: "10 minutes", range: "Self", comp: "V, S, M (focus van 1000gp)", dur: "Concentration, 10 min", desc: "Bekijk een creature op elk plane. WIS save, modifier afhankelijk van bekendheid." }
            ]
        },

        // ===== DRUID SPELLS =====
        druid: {
            0: [
                { name: "Druidcraft", time: "1 action", range: "30ft", comp: "V, S", dur: "Instant", desc: "Klein natuurlijk trucje: weer voorspellen, bloem laten bloeien, sensorisch effect, of vlammetje aan/uit." },
                { name: "Produce Flame", time: "1 action", range: "Self", comp: "V, S", dur: "10 min", desc: "Vlam in je hand. Geeft licht in 10ft. Gooi als ranged spell attack voor 1d8 fire damage. Schaalt." },
                { name: "Guidance", time: "1 action", range: "Touch", comp: "V, S", dur: "Concentration, 1 min", desc: "Target mag eenmalig 1d4 toevoegen aan een ability check. Concentration." },
                { name: "Thorn Whip", time: "1 action", range: "30ft", comp: "V, S, M (doornenstengel)", dur: "Instant", desc: "Melee spell attack, 1d6 piercing. Trek target 10ft naar je toe als het Large of kleiner is. Schaalt." },
                { name: "Shillelagh", time: "1 bonus action", range: "Touch", comp: "V, S, M (hulst of eikentakje)", dur: "1 min", desc: "Bonus action. Houten club/quarterstaff gebruikt WIS voor attacks, damage wordt 1d8." },
                { name: "Mending", time: "1 minute", range: "Touch", comp: "V, S, M (twee lodestones)", dur: "Instant", desc: "Repareer een enkele breuk of scheur in een object." },
                { name: "Resistance", time: "1 action", range: "Touch", comp: "V, S, M (miniature mantel)", dur: "Concentration, 1 min", desc: "Target mag eenmalig 1d4 toevoegen aan een saving throw. Concentration." },
                { name: "Poison Spray", time: "1 action", range: "10ft", comp: "V, S", dur: "Instant", desc: "CON save of 1d12 poison damage. 10ft. Schaalt." }
            ],
            1: [
                { name: "Healing Word", time: "1 bonus action", range: "60ft", comp: "V", dur: "Instant", desc: "Bonus action. Herstel 1d4 + spellcasting mod HP op 60ft. Schaalt +1d4." },
                { name: "Entangle", time: "1 action", range: "90ft", comp: "V, S", dur: "Concentration, 1 min", desc: "20ft vierkant. STR save of restrained door wijnranken. Moeilijk terrein." },
                { name: "Goodberry", time: "1 action", range: "Touch", comp: "V, S, M (hulst)", dur: "Instant", desc: "Creëer 10 bessen. Elke bes herstelt 1 HP en voorziet in een dag voedsel. Verdwijnen na 24 uur." },
                { name: "Thunderwave", time: "1 action", range: "Self (15ft cube)", comp: "V, S", dur: "Instant", desc: "CON save of 2d8 thunder damage en 10ft weggeduwd. Half bij save." },
                { name: "Faerie Fire", time: "1 action", range: "60ft", comp: "V", dur: "Concentration, 1 min", desc: "20ft cube. DEX save of verlicht. Attacks hebben advantage. Onzichtbaarheid opgeheven." },
                { name: "Cure Wounds", time: "1 action", range: "Touch", comp: "V, S", dur: "Instant", desc: "Herstel 1d8 + spellcasting mod HP. Schaalt +1d8." },
                { name: "Fog Cloud", time: "1 action", range: "120ft", comp: "V, S", dur: "Concentration, 1 uur", desc: "20ft radius mist. Heavily obscured. Concentration, 1 uur." },
                { name: "Detect Magic", time: "1 action", range: "Self", comp: "V, S", dur: "Concentration, 10 min", desc: "Ritual. Voel magie binnen 30ft." },
                { name: "Animal Friendship", time: "1 action", range: "30ft", comp: "V, S, M (voedsel)", dur: "24 uur", desc: "WIS save of beast (INT 3-) wordt gecharmeerd. 24 uur. Schaalt +1 target." },
                { name: "Speak with Animals", time: "1 action", range: "Self", comp: "V, S", dur: "10 min", desc: "Ritual. Communiceer met beesten. 10 minuten." },
                { name: "Ice Knife", time: "1 action", range: "60ft", comp: "S, M (ijs)", dur: "Instant", desc: "Ranged spell attack, 1d10 piercing. Explodeert: DEX save of 2d6 cold in 5ft. Schaalt +1d6." },
                { name: "Absorb Elements", time: "1 reaction", range: "Self", comp: "S", dur: "1 ronde", desc: "Reaction bij elementaire damage. Resistance + volgende melee doet +1d6 van dat type." }
            ],
            2: [
                { name: "Moonbeam", time: "1 action", range: "120ft", comp: "V, S, M (maansteen)", dur: "Concentration, 1 min", desc: "5ft radius lichtcilinder. CON save of 2d10 radiant. Shapechangers hebben disadvantage. Schaalt." },
                { name: "Pass Without Trace", time: "1 action", range: "Self", comp: "V, S, M (as van hulst)", dur: "Concentration, 1 uur", desc: "Jij en allies binnen 30ft krijgen +10 op Stealth checks. Niet te tracken." },
                { name: "Spike Growth", time: "1 action", range: "150ft", comp: "V, S, M (doornen)", dur: "Concentration, 10 min", desc: "20ft radius. Moeilijk terrein, 2d4 piercing per 5ft movement. Gecamoufleerd." },
                { name: "Hold Person", time: "1 action", range: "60ft", comp: "V, S, M (ijzer)", dur: "Concentration, 1 min", desc: "WIS save of humanoid is paralyzed. Save elke beurt. Schaalt +1 target." },
                { name: "Flame Blade", time: "1 bonus action", range: "Self", comp: "V, S, M (sumacblad)", dur: "Concentration, 10 min", desc: "Vlammend zwaard. Melee spell attack voor 3d6 fire damage. Geeft licht." },
                { name: "Heat Metal", time: "1 action", range: "60ft", comp: "V, S, M (ijzer en vlam)", dur: "Concentration, 1 min", desc: "Metalen object gloeit op. 2d8 fire damage. Vasthoudend target: disadvantage op checks." },
                { name: "Lesser Restoration", time: "1 action", range: "Touch", comp: "V, S", dur: "Instant", desc: "Beëindig een ziekte of condition: blinded, deafened, paralyzed, of poisoned." },
                { name: "Gust of Wind", time: "1 action", range: "Self (60ft line)", comp: "V, S, M (zaad)", dur: "Concentration, 1 min", desc: "60ft lijn wind. STR save of 15ft weggeduwd. Difficult terrain." },
                { name: "Barkskin", time: "1 action", range: "Touch", comp: "V, S, M (eikenschors)", dur: "Concentration, 1 uur", desc: "Target's AC kan niet lager zijn dan 16." }
            ],
            3: [
                { name: "Call Lightning", time: "1 action", range: "120ft", comp: "V, S", dur: "Concentration, 10 min", desc: "Stormwolk. Elke beurt als action: 3d10 lightning in 5ft radius. Schaalt +1d10." },
                { name: "Conjure Animals", time: "1 action", range: "60ft", comp: "V, S", dur: "Concentration, 1 uur", desc: "Roep fey beesten op. Eén CR 2, twee CR 1, vier CR 1/2, of acht CR 1/4." },
                { name: "Plant Growth", time: "1 action / 8 uur", range: "150ft", comp: "V, S", dur: "Instant", desc: "100ft radius dichte plantengroei (4ft per 1ft movement). Of 8 uur ritual voor vruchtbare grond." },
                { name: "Dispel Magic", time: "1 action", range: "120ft", comp: "V, S", dur: "Instant", desc: "Beëindig magisch effect van 3rd level of lager. Hogere: ability check DC 10 + level." },
                { name: "Sleet Storm", time: "1 action", range: "150ft", comp: "V, S, M (stof en water)", dur: "Concentration, 1 min", desc: "40ft radius. Difficult terrain, heavily obscured. CON save of prone." },
                { name: "Wind Wall", time: "1 action", range: "120ft", comp: "V, S, M (waaier en veer)", dur: "Concentration, 1 min", desc: "50ft lang, 15ft hoog. 3d8 bludgeoning. Blokkeert projectielen en gas." }
            ],
            4: [
                { name: "Polymorph", time: "1 action", range: "60ft", comp: "V, S, M (rups-cocon)", dur: "Concentration, 1 uur", desc: "WIS save. Transformeer creature in beast met CR gelijk aan level. Reverteert bij 0 HP." },
                { name: "Wall of Fire", time: "1 action", range: "120ft", comp: "V, S, M (fosforus)", dur: "Concentration, 1 min", desc: "60ft lang of ring, 20ft hoog. 5d8 fire damage bij binnentreden." },
                { name: "Ice Storm", time: "1 action", range: "300ft", comp: "V, S, M (stof en water)", dur: "Instant", desc: "20ft radius. DEX save of 2d8 bludgeoning + 4d6 cold. Difficult terrain." },
                { name: "Giant Insect", time: "1 action", range: "30ft", comp: "V, S", dur: "Concentration, 10 min", desc: "Transformeer insecten in giant versies. Tot 10 duizendpoten, 5 wespen, 3 spinnen of 1 schorpioen." },
                { name: "Conjure Woodland Beings", time: "1 action", range: "60ft", comp: "V, S, M (hulstbes)", dur: "Concentration, 1 uur", desc: "Roep fey creatures op. Eén CR 2, twee CR 1, vier CR 1/2 of acht CR 1/4." }
            ],
            5: [
                { name: "Greater Restoration", time: "1 action", range: "Touch", comp: "V, S, M (diamantstof van 100gp)", dur: "Instant", desc: "Beëindig charm/petrification/curse, ability score reductie, of HP max reductie." },
                { name: "Mass Cure Wounds", time: "1 action", range: "60ft", comp: "V, S", dur: "Instant", desc: "Tot 6 creatures herstellen 3d8 + spellcasting mod HP. Schaalt +1d8." },
                { name: "Conjure Elemental", time: "1 minute", range: "90ft", comp: "V, S, M (elementaal materiaal)", dur: "Concentration, 1 uur", desc: "Roep elemental van CR 5 of lager op. Verliest controle bij concentratieverlies." },
                { name: "Wall of Stone", time: "1 action", range: "120ft", comp: "V, S, M (graniet)", dur: "Concentration, 10 min", desc: "10 panelen van 10x10ft steen. AC 15, 30 HP per paneel. Kan permanent worden." }
            ]
        },

        // ===== RANGER SPELLS =====
        ranger: {
            1: [
                { name: "Hunter's Mark", time: "1 bonus action", range: "90ft", comp: "V", dur: "Concentration, 1 uur", desc: "Bonus action. Markeer target: +1d6 damage per hit. Advantage op Perception/Survival om het te vinden." },
                { name: "Cure Wounds", time: "1 action", range: "Touch", comp: "V, S", dur: "Instant", desc: "Herstel 1d8 + spellcasting mod HP. Schaalt +1d8." },
                { name: "Goodberry", time: "1 action", range: "Touch", comp: "V, S, M (hulst)", dur: "Instant", desc: "10 magische bessen. Elke bes herstelt 1 HP en voorziet in een dag voedsel." },
                { name: "Ensnaring Strike", time: "1 bonus action", range: "Self", comp: "V", dur: "Concentration, 1 min", desc: "Volgende hit: STR save of restrained door wijnranken. 1d6 piercing per beurt. Schaalt +1d6." },
                { name: "Hail of Thorns", time: "1 bonus action", range: "Self", comp: "V", dur: "Concentration, 1 min", desc: "Volgende ranged hit: 5ft radius. DEX save of 1d10 piercing (half bij save). Schaalt +1d10." },
                { name: "Absorb Elements", time: "1 reaction", range: "Self", comp: "S", dur: "1 ronde", desc: "Reaction bij elementaire damage. Resistance + volgende melee doet +1d6 van dat type." },
                { name: "Fog Cloud", time: "1 action", range: "120ft", comp: "V, S", dur: "Concentration, 1 uur", desc: "20ft radius mist. Heavily obscured." },
                { name: "Detect Magic", time: "1 action", range: "Self", comp: "V, S", dur: "Concentration, 10 min", desc: "Ritual. Voel magie binnen 30ft." },
                { name: "Animal Friendship", time: "1 action", range: "30ft", comp: "V, S, M (voedsel)", dur: "24 uur", desc: "WIS save of beast (INT 3-) wordt gecharmeerd. 24 uur." },
                { name: "Speak with Animals", time: "1 action", range: "Self", comp: "V, S", dur: "10 min", desc: "Ritual. Communiceer met beesten." }
            ],
            2: [
                { name: "Pass Without Trace", time: "1 action", range: "Self", comp: "V, S, M (as van hulst)", dur: "Concentration, 1 uur", desc: "+10 op Stealth checks voor jou en allies binnen 30ft. Niet te tracken." },
                { name: "Spike Growth", time: "1 action", range: "150ft", comp: "V, S, M (doornen)", dur: "Concentration, 10 min", desc: "20ft radius. Moeilijk terrein, 2d4 piercing per 5ft. Gecamoufleerd." },
                { name: "Lesser Restoration", time: "1 action", range: "Touch", comp: "V, S", dur: "Instant", desc: "Beëindig ziekte of condition: blinded, deafened, paralyzed, poisoned." },
                { name: "Silence", time: "1 action", range: "120ft", comp: "V, S", dur: "Concentration, 10 min", desc: "20ft radius stilte. Geen geluid, verbal spells geblokkeerd. Ritual." },
                { name: "Misty Step", time: "1 bonus action", range: "Self", comp: "V", dur: "Instant", desc: "Teleporteer tot 30ft naar een plek die je kunt zien." },
                { name: "Darkvision", time: "1 action", range: "Touch", comp: "V, S, M (wortel)", dur: "8 uur", desc: "Target krijgt darkvision tot 60ft. 8 uur." },
                { name: "Aid", time: "1 action", range: "30ft", comp: "V, S, M (linnen)", dur: "8 uur", desc: "Tot 3 creatures krijgen +5 max HP en huidige HP. 8 uur. Schaalt +5." }
            ],
            3: [
                { name: "Conjure Animals", time: "1 action", range: "60ft", comp: "V, S", dur: "Concentration, 1 uur", desc: "Roep fey beesten op. Eén CR 2, twee CR 1, vier CR 1/2, of acht CR 1/4." },
                { name: "Lightning Arrow", time: "1 bonus action", range: "Self", comp: "V, S", dur: "Concentration, 1 min", desc: "Volgende ranged attack: 4d8 lightning (DEX save half). 10ft radius. Schaalt +1d8." },
                { name: "Plant Growth", time: "1 action / 8 uur", range: "150ft", comp: "V, S", dur: "Instant", desc: "100ft radius dichte plantengroei. Of 8 uur ritual voor vruchtbare grond." },
                { name: "Revivify", time: "1 action", range: "Touch", comp: "V, S, M (diamanten van 300gp)", dur: "Instant", desc: "Breng creature terug dat max 1 minuut dood is. Komt terug met 1 HP." },
                { name: "Conjure Barrage", time: "1 action", range: "Self (60ft cone)", comp: "V, S, M (munitie/wapen)", dur: "Instant", desc: "60ft cone. DEX save of 3d8 damage (wapentype). Half bij save." }
            ],
            4: [
                { name: "Freedom of Movement", time: "1 action", range: "Touch", comp: "V, S, M (leren band)", dur: "1 uur", desc: "Target niet beïnvloed door moeilijk terrein of magische restraints. 1 uur." },
                { name: "Guardian of Nature", time: "1 bonus action", range: "Self", comp: "V", dur: "Concentration, 1 min", desc: "Primal Beast (speed+10, advantage melee, +1d6 force) of Great Tree (10 temp HP, advantage ranged)." },
                { name: "Stoneskin", time: "1 action", range: "Touch", comp: "V, S, M (diamantstof van 100gp)", dur: "Concentration, 1 uur", desc: "Resistance tegen nonmagical bludgeoning, piercing en slashing damage." }
            ],
            5: [
                { name: "Swift Quiver", time: "1 bonus action", range: "Touch", comp: "V, S, M (koker met munitie)", dur: "Concentration, 1 min", desc: "Eindeloze munitie. Bonus action: twee extra ranged weapon attacks per beurt." },
                { name: "Steel Wind Strike", time: "1 action", range: "30ft", comp: "S, M (wapen)", dur: "Instant", desc: "Melee spell attack tegen tot 5 creatures. 6d10 force per hit. Teleporteer naar geraakt target." },
                { name: "Conjure Volley", time: "1 action", range: "150ft", comp: "V, S, M (munitie/wapen)", dur: "Instant", desc: "40ft radius. DEX save of 8d8 damage (wapentype). Half bij save." }
            ]
        },

        // ===== PALADIN SPELLS =====
        paladin: {
            1: [
                { name: "Divine Smite", time: "Onderdeel van aanval", range: "Self", comp: "V", dur: "Instant", desc: "Bij melee hit: besteed slot voor 2d8 radiant. +1d8 per hogere slot, +1d8 vs undead/fiends. Max 5d8." },
                { name: "Cure Wounds", time: "1 action", range: "Touch", comp: "V, S", dur: "Instant", desc: "Herstel 1d8 + spellcasting mod HP. Schaalt +1d8." },
                { name: "Shield of Faith", time: "1 bonus action", range: "60ft", comp: "V, S, M (perkament)", dur: "Concentration, 10 min", desc: "Target krijgt +2 AC. Concentration, 10 minuten." },
                { name: "Bless", time: "1 action", range: "30ft", comp: "V, S, M (heilig water)", dur: "Concentration, 1 min", desc: "Tot 3 creatures: +1d4 op attack rolls en saving throws. Schaalt +1 target." },
                { name: "Command", time: "1 action", range: "60ft", comp: "V", dur: "1 ronde", desc: "Eén-woord commando. WIS save of target volgt op. Schaalt +1 target." },
                { name: "Detect Evil and Good", time: "1 action", range: "Self", comp: "V, S", dur: "Concentration, 10 min", desc: "Detecteer aberrations, celestials, elementals, fey, fiends en undead binnen 30ft." },
                { name: "Detect Magic", time: "1 action", range: "Self", comp: "V, S", dur: "Concentration, 10 min", desc: "Ritual. Voel magie binnen 30ft." },
                { name: "Protection from Evil and Good", time: "1 action", range: "Touch", comp: "V, S, M (heilig water)", dur: "Concentration, 10 min", desc: "Buitengewone creatures hebben disadvantage op attacks tegen target." },
                { name: "Thunderous Smite", time: "1 bonus action", range: "Self", comp: "V", dur: "Concentration, 1 min", desc: "Volgende melee hit: +2d6 thunder. STR save of 10ft weggeduwd en prone." },
                { name: "Wrathful Smite", time: "1 bonus action", range: "Self", comp: "V", dur: "Concentration, 1 min", desc: "Volgende melee hit: +1d6 psychic. WIS save of frightened." },
                { name: "Compelled Duel", time: "1 bonus action", range: "30ft", comp: "V", dur: "Concentration, 1 min", desc: "WIS save of target heeft disadvantage op attacks tegen anderen en moet bij je blijven." }
            ],
            2: [
                { name: "Aid", time: "1 action", range: "30ft", comp: "V, S, M (linnen)", dur: "8 uur", desc: "Tot 3 creatures krijgen +5 max HP en huidige HP. 8 uur. Schaalt +5." },
                { name: "Find Steed", time: "10 minutes", range: "30ft", comp: "V, S", dur: "Instant", desc: "Roep een geest-paard op. Intelligent en gehoorzaam." },
                { name: "Lesser Restoration", time: "1 action", range: "Touch", comp: "V, S", dur: "Instant", desc: "Beëindig ziekte of condition: blinded, deafened, paralyzed, poisoned." },
                { name: "Magic Weapon", time: "1 bonus action", range: "Touch", comp: "V, S", dur: "Concentration, 1 uur", desc: "Wapen wordt +1 op attack en damage. Schaalt naar +2/+3." },
                { name: "Protection from Poison", time: "1 action", range: "Touch", comp: "V, S", dur: "1 uur", desc: "Neutraliseer gif. Advantage op poison saves. Resistance tegen poison damage." },
                { name: "Branding Smite", time: "1 bonus action", range: "Self", comp: "V", dur: "Concentration, 1 min", desc: "Volgende hit: +2d6 radiant. Target wordt zichtbaar." },
                { name: "Zone of Truth", time: "1 action", range: "60ft", comp: "V, S", dur: "10 min", desc: "15ft radius. CHA save of creature kan niet liegen. Je weet of save geslaagd is." }
            ],
            3: [
                { name: "Revivify", time: "1 action", range: "Touch", comp: "V, S, M (diamanten van 300gp)", dur: "Instant", desc: "Breng creature terug dat max 1 minuut dood is. Komt terug met 1 HP." },
                { name: "Dispel Magic", time: "1 action", range: "120ft", comp: "V, S", dur: "Instant", desc: "Beëindig magisch effect van 3rd level of lager. Hogere: ability check DC 10 + level." },
                { name: "Aura of Vitality", time: "1 action", range: "Self (30ft)", comp: "V", dur: "Concentration, 1 min", desc: "Bonus action elke beurt: herstel 2d6 HP bij een creature binnen 30ft." },
                { name: "Blinding Smite", time: "1 bonus action", range: "Self", comp: "V", dur: "Concentration, 1 min", desc: "Volgende melee hit: +3d8 radiant. CON save of blinded." },
                { name: "Crusader's Mantle", time: "1 action", range: "Self", comp: "V", dur: "Concentration, 1 min", desc: "Allies binnen 30ft: +1d4 radiant per melee weapon hit." },
                { name: "Spirit Shroud", time: "1 bonus action", range: "Self", comp: "V, S", dur: "Concentration, 1 min", desc: "Attacks binnen 10ft: +1d8 extra damage. Targets kunnen geen HP herstellen." }
            ],
            4: [
                { name: "Banishment", time: "1 action", range: "60ft", comp: "V, S, M (weerzinwekkend item)", dur: "Concentration, 1 min", desc: "CHA save of target verdwijnt naar harmless demiplane. Schaalt +1 target." },
                { name: "Death Ward", time: "1 action", range: "Touch", comp: "V, S", dur: "8 uur", desc: "Eerste keer naar 0 HP: wordt 1 HP. Eenmalig. 8 uur." },
                { name: "Find Greater Steed", time: "10 minutes", range: "30ft", comp: "V, S", dur: "Instant", desc: "Roep krachtige geest op: griffon, pegasus, dire wolf, etc." },
                { name: "Staggering Smite", time: "1 bonus action", range: "Self", comp: "V", dur: "Concentration, 1 min", desc: "Volgende melee hit: +4d6 psychic. WIS save of disadvantage en geen reactions." },
                { name: "Aura of Life", time: "1 action", range: "Self (30ft)", comp: "V", dur: "Concentration, 10 min", desc: "Allies: resistance necrotic, herstellen 1 HP als ze met 0 beginnen." }
            ],
            5: [
                { name: "Destructive Wave", time: "1 action", range: "Self (30ft)", comp: "V", dur: "Instant", desc: "CON save of 5d6 thunder + 5d6 radiant/necrotic en prone. Half bij save." },
                { name: "Holy Weapon", time: "1 bonus action", range: "Touch", comp: "V, S", dur: "Concentration, 1 uur", desc: "Wapen doet +2d8 radiant per hit. Bonus action ontploffing: 4d8 radiant in 30ft." },
                { name: "Raise Dead", time: "1 uur", range: "Touch", comp: "V, S, M (diamant van 500gp)", dur: "Instant", desc: "Breng creature terug dat max 10 dagen dood is. -4 penalty, vermindert per long rest." },
                { name: "Banishing Smite", time: "1 bonus action", range: "Self", comp: "V", dur: "Concentration, 1 min", desc: "Volgende hit: +5d10 force. Bij 50 HP of minder na hit: gebanished." }
            ]
        },

        // ===== WARLOCK SPELLS =====
        warlock: {
            0: [
                { name: "Eldritch Blast", time: "1 action", range: "120ft", comp: "V, S", dur: "Instant", desc: "Ranged spell attack, 1d10 force. Op 5e level: 2 stralen, 11e: 3, 17e: 4. Elke straal apart." },
                { name: "Minor Illusion", time: "1 action", range: "30ft", comp: "S, M (fleece)", dur: "1 min", desc: "Geluid of beeld van een object. Investigation check om te herkennen." },
                { name: "Prestidigitation", time: "1 action", range: "10ft", comp: "V, S", dur: "Tot 1 uur", desc: "Klein magisch trucje: vonken, geluid, smaak, kleine illusie, schoonmaken, etc." },
                { name: "Mage Hand", time: "1 action", range: "30ft", comp: "V, S", dur: "1 min", desc: "Spectrale hand die objecten kan manipuleren op 30ft. Duurt 1 minuut." },
                { name: "Chill Touch", time: "1 action", range: "120ft", comp: "V, S", dur: "1 ronde", desc: "1d8 necrotic, target kan geen HP herstellen. Undead: disadvantage op attacks. Schaalt." },
                { name: "Toll the Dead", time: "1 action", range: "60ft", comp: "V, S", dur: "Instant", desc: "WIS save of 1d8 necrotic (1d12 als target HP mist). Schaalt." },
                { name: "Booming Blade", time: "1 action", range: "Self (5ft)", comp: "S, M (wapen)", dur: "1 ronde", desc: "Melee weapon attack. Als target beweegt: 1d8 thunder damage. Schaalt." },
                { name: "Friends", time: "1 action", range: "Self", comp: "S, M (make-up)", dur: "Concentration, 1 min", desc: "Advantage op CHA checks tegen non-hostile creature. Na afloop weet target het." },
                { name: "Mind Sliver", time: "1 action", range: "60ft", comp: "V", dur: "1 ronde", desc: "INT save of 1d6 psychic en -1d4 van volgende saving throw. Schaalt." }
            ],
            1: [
                { name: "Hex", time: "1 bonus action", range: "90ft", comp: "V, S, M (newt-oog)", dur: "Concentration, 1 uur", desc: "Bonus action. +1d6 necrotic per hit. Kies ability: target heeft disadvantage op checks daarmee." },
                { name: "Armor of Agathys", time: "1 action", range: "Self", comp: "V, S, M (water)", dur: "1 uur", desc: "5 temp HP. Melee aanvallers nemen 5 cold damage zolang je temp HP hebt. Schaalt +5." },
                { name: "Hellish Rebuke", time: "1 reaction", range: "60ft", comp: "V, S", dur: "Instant", desc: "Reaction bij damage. DEX save of 2d10 fire (half bij save). Schaalt +1d10." },
                { name: "Charm Person", time: "1 action", range: "30ft", comp: "V, S", dur: "1 uur", desc: "WIS save (advantage als je vecht). Target beschouwt je als goede vriend." },
                { name: "Protection from Evil and Good", time: "1 action", range: "Touch", comp: "V, S, M (heilig water)", dur: "Concentration, 10 min", desc: "Buitengewone creatures hebben disadvantage op attacks tegen target." },
                { name: "Witch Bolt", time: "1 action", range: "30ft", comp: "V, S, M (bliksemboomtakje)", dur: "Concentration, 1 min", desc: "Ranged spell attack, 1d12 lightning. Action elke beurt: automatisch 1d12." },
                { name: "Expeditious Retreat", time: "1 bonus action", range: "Self", comp: "V, S", dur: "Concentration, 10 min", desc: "Bonus action Dash elke beurt." },
                { name: "Arms of Hadar", time: "1 action", range: "Self (10ft)", comp: "V, S", dur: "Instant", desc: "STR save of 2d6 necrotic en geen reactions. Half bij save. Schaalt +1d6." }
            ],
            2: [
                { name: "Misty Step", time: "1 bonus action", range: "Self", comp: "V", dur: "Instant", desc: "Teleporteer tot 30ft naar een plek die je kunt zien." },
                { name: "Hold Person", time: "1 action", range: "60ft", comp: "V, S, M (ijzer)", dur: "Concentration, 1 min", desc: "WIS save of humanoid is paralyzed. Save elke beurt. Schaalt +1 target." },
                { name: "Invisibility", time: "1 action", range: "Touch", comp: "V, S, M (wimper in gum arabic)", dur: "Concentration, 1 uur", desc: "Creature wordt onzichtbaar. Eindigt bij aanval of spell." },
                { name: "Mirror Image", time: "1 action", range: "Self", comp: "V, S", dur: "1 min", desc: "Drie duplicaten. Aanvallen raken mogelijk duplicaat dat verdwijnt bij hit." },
                { name: "Suggestion", time: "1 action", range: "30ft", comp: "V, M (slangetong en honingraat)", dur: "Concentration, 8 uur", desc: "WIS save of target volgt redelijke suggestie op." },
                { name: "Darkness", time: "1 action", range: "60ft", comp: "V, M (vleermuisvacht en pek)", dur: "Concentration, 10 min", desc: "15ft radius magische duisternis. Blokkeert darkvision." },
                { name: "Crown of Madness", time: "1 action", range: "120ft", comp: "V, S", dur: "Concentration, 1 min", desc: "WIS save of target moet melee attack doen naar jouw keuze. Save elke beurt." },
                { name: "Spider Climb", time: "1 action", range: "Touch", comp: "V, S, M (spin en bitumen)", dur: "Concentration, 1 uur", desc: "Target klimt op elke ondergrond inclusief plafonds, handen vrij." },
                { name: "Shatter", time: "1 action", range: "60ft", comp: "V, S, M (glassplinter)", dur: "Instant", desc: "10ft radius. CON save of 3d8 thunder. Schaalt +1d8." }
            ],
            3: [
                { name: "Counterspell", time: "1 reaction", range: "60ft", comp: "S", dur: "Instant", desc: "Annuleer spell van 3rd level of lager. Hogere: ability check DC 10 + level." },
                { name: "Dispel Magic", time: "1 action", range: "120ft", comp: "V, S", dur: "Instant", desc: "Beëindig magisch effect van 3rd level of lager. Hogere: ability check DC 10 + level." },
                { name: "Fly", time: "1 action", range: "Touch", comp: "V, S, M (veertje)", dur: "Concentration, 10 min", desc: "60ft flying speed. Valt bij einde als nog in de lucht." },
                { name: "Fear", time: "1 action", range: "Self (30ft cone)", comp: "V, S, M (witte veer)", dur: "Concentration, 1 min", desc: "WIS save of frightened en moet Dash weg van jou." },
                { name: "Hunger of Hadar", time: "1 action", range: "150ft", comp: "V, S, M (octopustentakel)", dur: "Concentration, 1 min", desc: "20ft radius leegte. 2d6 cold begin beurt, 2d6 acid einde. Blind, moeilijk terrein." },
                { name: "Hypnotic Pattern", time: "1 action", range: "120ft", comp: "S, M (wierookstokje)", dur: "Concentration, 1 min", desc: "30ft cube. WIS save of charmed en incapacitated." },
                { name: "Summon Fey", time: "1 action", range: "90ft", comp: "V, S, M (gilded flower van 300gp)", dur: "Concentration, 1 uur", desc: "Roep fey geest op die jouw commando's volgt. Sterker op hogere slots." },
                { name: "Thunder Step", time: "1 action", range: "90ft", comp: "V", dur: "Instant", desc: "Teleporteer tot 90ft. Creatures bij vertrekpunt: CON save of 3d10 thunder. Neem 1 ally mee." }
            ],
            4: [
                { name: "Banishment", time: "1 action", range: "60ft", comp: "V, S, M (weerzinwekkend item)", dur: "Concentration, 1 min", desc: "CHA save of target verdwijnt. Schaalt +1 target." },
                { name: "Dimension Door", time: "1 action", range: "500ft", comp: "V", dur: "Instant", desc: "Teleporteer jezelf (en 1 willing creature) tot 500ft." },
                { name: "Shadow of Moil", time: "1 action", range: "Self", comp: "V, S, M (edelsteen van 150gp)", dur: "Concentration, 1 min", desc: "Heavily obscured, resistance radiant. 2d8 necrotic bij melee hit op jou." },
                { name: "Summon Aberration", time: "1 action", range: "90ft", comp: "V, S, M (tentacle van 200gp)", dur: "Concentration, 1 uur", desc: "Roep aberration op. Sterker op hogere slots." },
                { name: "Sickening Radiance", time: "1 action", range: "120ft", comp: "V, S", dur: "Concentration, 10 min", desc: "30ft radius. CON save of 4d10 radiant en 1 level exhaustion." }
            ],
            5: [
                { name: "Hold Monster", time: "1 action", range: "90ft", comp: "V, S, M (ijzer)", dur: "Concentration, 1 min", desc: "WIS save of paralyzed. Elk creature type. Save elke beurt." },
                { name: "Synaptic Static", time: "1 action", range: "120ft", comp: "V, S", dur: "Instant", desc: "20ft radius. INT save of 8d6 psychic. Gefaalde targets: -1d6 op rolls, 1 min." },
                { name: "Enervation", time: "1 action", range: "60ft", comp: "V, S", dur: "Concentration, 1 min", desc: "DEX save of 4d8 necrotic. Action elke beurt: automatisch 4d8. Je healt de helft." },
                { name: "Far Step", time: "1 bonus action", range: "Self", comp: "V", dur: "Concentration, 1 min", desc: "Bonus action elke beurt: teleporteer tot 60ft." },
                { name: "Wall of Light", time: "1 action", range: "120ft", comp: "V, S, M (handspiegel)", dur: "Concentration, 10 min", desc: "60ft lang, 10ft hoog. 4d8 radiant bij binnentreden. Action: ranged attack 4d8." }
            ]
        },

        // ===== BARD SPELLS =====
        bard: {
            0: [
                { name: "Friends", time: "1 action", range: "10ft", comp: "S, M (make-up)", dur: "Concentration, 1 min", desc: "Advantage op CHA checks tegen non-hostile creature. Na afloop weet target het." },
                { name: "Light", time: "1 action", range: "Touch", comp: "V, M (vuurvliegje)", dur: "1 uur", desc: "Object straalt bright light uit in 20ft radius en dim light voor nog eens 20ft." },
                { name: "Mage Hand", time: "1 action", range: "30ft", comp: "V, S", dur: "1 min", desc: "Spectrale hand die objecten kan manipuleren op 30ft." },
                { name: "Mending", time: "1 minute", range: "Touch", comp: "V, S, M (lodestones)", dur: "Instant", desc: "Repareer een enkele breuk of scheur in een object." },
                { name: "Message", time: "1 action", range: "120ft", comp: "V, S, M (koperdraad)", dur: "1 ronde", desc: "Fluister een bericht naar een creature binnen 120ft. Alleen het target hoort het." },
                { name: "Minor Illusion", time: "1 action", range: "30ft", comp: "S, M (fleece)", dur: "1 min", desc: "Geluid of beeld van een object. Investigation check om te herkennen." },
                { name: "Prestidigitation", time: "1 action", range: "10ft", comp: "V, S", dur: "Tot 1 uur", desc: "Klein magisch trucje: vonken, geluid, smaak, kleine illusie, schoonmaken, etc." },
                { name: "Vicious Mockery", time: "1 action", range: "60ft", comp: "V", dur: "Instant", desc: "WIS save of 1d4 psychic damage en disadvantage op volgende attack roll. Schaalt." }
            ],
            1: [
                { name: "Bane", time: "1 action", range: "30ft", comp: "V, S, M (bloed)", dur: "Concentration, 1 min", desc: "Tot 3 creatures: CHA save of -1d4 van attack rolls en saving throws." },
                { name: "Charm Person", time: "1 action", range: "30ft", comp: "V, S", dur: "1 uur", desc: "WIS save (advantage als je vecht). Target beschouwt je als goede vriend." },
                { name: "Cure Wounds", time: "1 action", range: "Touch", comp: "V, S", dur: "Instant", desc: "Herstel 1d8 + spellcasting modifier HP. Schaalt +1d8 per slot." },
                { name: "Detect Magic", time: "1 action", range: "Self", comp: "V, S", dur: "Concentration, 10 min", desc: "Ritual. Voel magie binnen 30ft. Zie de school of magic door dunne barrières." },
                { name: "Disguise Self", time: "1 action", range: "Self", comp: "V, S", dur: "1 uur", desc: "Verander je uiterlijk. Investigation check om door de illusie te kijken." },
                { name: "Faerie Fire", time: "1 action", range: "60ft", comp: "V", dur: "Concentration, 1 min", desc: "20ft cube. DEX save of outlined in licht: attacks hebben advantage. Onzichtbaarheid opgeheven." },
                { name: "Feather Fall", time: "1 reaction", range: "60ft", comp: "V, M (veer)", dur: "1 min", desc: "Tot 5 falling creatures vallen langzaam en nemen geen fall damage." },
                { name: "Healing Word", time: "1 bonus action", range: "60ft", comp: "V", dur: "Instant", desc: "Bonus action. Herstel 1d4 + spellcasting modifier HP op 60ft. Schaalt +1d4." },
                { name: "Heroism", time: "1 action", range: "Touch", comp: "V, S", dur: "Concentration, 1 min", desc: "Target is immuun voor frightened en krijgt temp HP gelijk aan je spellcasting modifier elke beurt." },
                { name: "Silent Image", time: "1 action", range: "60ft", comp: "V, S, M (fleece)", dur: "Concentration, 10 min", desc: "Visuele illusie tot 15ft cube. Verplaats met action. Investigation check." },
                { name: "Sleep", time: "1 action", range: "90ft", comp: "V, S, M (zand)", dur: "1 min", desc: "5d8 HP aan creatures vallen in slaap (laagste HP eerst). Schaalt +2d8 per slot." },
                { name: "Speak with Animals", time: "1 action", range: "Self", comp: "V, S", dur: "10 min", desc: "Ritual. Communiceer met dieren. Ze zijn niet per se vriendelijk." },
                { name: "Thunderwave", time: "1 action", range: "Self (15ft cube)", comp: "V, S", dur: "Instant", desc: "15ft cube. CON save of 2d8 thunder en 10ft weggeduwd. Half bij save. Schaalt +1d8." }
            ],
            2: [
                { name: "Calm Emotions", time: "1 action", range: "60ft", comp: "V, S", dur: "Concentration, 1 min", desc: "20ft radius. CHA save of charmed/frightened onderdrukt, of maak hostile creature indifferent." },
                { name: "Enhance Ability", time: "1 action", range: "Touch", comp: "V, S, M (dierenvacht)", dur: "Concentration, 1 uur", desc: "Kies een ability: target krijgt advantage op checks met die ability. Schaalt +1 target." },
                { name: "Heat Metal", time: "1 action", range: "60ft", comp: "V, S, M (stukje ijzer)", dur: "Concentration, 1 min", desc: "Metalen object gloeit. 2d8 fire damage. Target moet CON save of dropt het object. Schaalt +1d8." },
                { name: "Hold Person", time: "1 action", range: "60ft", comp: "V, S, M (ijzer)", dur: "Concentration, 1 min", desc: "WIS save of humanoid is paralyzed. Save elke beurt. Schaalt +1 target." },
                { name: "Invisibility", time: "1 action", range: "Touch", comp: "V, S, M (wimper in gum arabic)", dur: "Concentration, 1 uur", desc: "Creature wordt onzichtbaar. Eindigt bij aanval of spell. Schaalt +1 target." },
                { name: "Knock", time: "1 action", range: "60ft", comp: "V", dur: "Instant", desc: "Open een slot, ketting, of grendel. Magische sloten worden 10 min onderdrukt. Hoorbare knal tot 300ft." },
                { name: "Lesser Restoration", time: "1 action", range: "Touch", comp: "V, S", dur: "Instant", desc: "Verwijder een ziekte of condition: blinded, deafened, paralyzed, of poisoned." },
                { name: "See Invisibility", time: "1 action", range: "Self", comp: "V, S, M (pinch of talc)", dur: "1 uur", desc: "Zie onzichtbare creatures en objecten, plus ethereal plane." },
                { name: "Shatter", time: "1 action", range: "60ft", comp: "V, S, M (glassplinter)", dur: "Instant", desc: "10ft radius. CON save of 3d8 thunder. Niet-magische objecten extra kwetsbaar. Schaalt +1d8." },
                { name: "Silence", time: "1 action", range: "120ft", comp: "V, S", dur: "Concentration, 10 min", desc: "Ritual. 20ft radius stilte. Geen geluid, immuun voor thunder damage, geen V-component spells." },
                { name: "Suggestion", time: "1 action", range: "30ft", comp: "V, M (slangetong)", dur: "Concentration, 8 uur", desc: "WIS save of target volgt een redelijke suggestie op." }
            ],
            3: [
                { name: "Bestow Curse", time: "1 action", range: "Touch", comp: "V, S", dur: "Concentration, 1 min", desc: "WIS save of kies een curse: disadvantage op ability checks/attacks, waste turn, extra 1d8 necrotic. Hogere slots: langere duur." },
                { name: "Dispel Magic", time: "1 action", range: "120ft", comp: "V, S", dur: "Instant", desc: "Beëindig magisch effect van 3rd level of lager. Hogere: ability check DC 10 + level." },
                { name: "Fear", time: "1 action", range: "Self (30ft cone)", comp: "V, S, M (witte veer)", dur: "Concentration, 1 min", desc: "WIS save of frightened en moet Dash weg van jou." },
                { name: "Hypnotic Pattern", time: "1 action", range: "120ft", comp: "S, M (wierookstokje)", dur: "Concentration, 1 min", desc: "30ft cube. WIS save of charmed en incapacitated." },
                { name: "Major Image", time: "1 action", range: "120ft", comp: "V, S, M (fleece)", dur: "Concentration, 10 min", desc: "Illusie tot 20ft cube met geluid, geur en temperatuur. Verplaats met action." },
                { name: "Sending", time: "1 action", range: "Unlimited", comp: "V, S, M (koperdraad)", dur: "1 ronde", desc: "Stuur een bericht van max 25 woorden naar een bekend creature. Het kan antwoorden." },
                { name: "Speak with Dead", time: "1 action", range: "10ft", comp: "V, S, M (brandende wierook)", dur: "10 min", desc: "Stel tot 5 vragen aan een lijk. Het antwoordt kort en kan liegen." },
                { name: "Tongues", time: "1 action", range: "Touch", comp: "V, M (kleimodel ziggurat)", dur: "1 uur", desc: "Target begrijpt elke gesproken taal en kan begrepen worden door iedereen." }
            ],
            4: [
                { name: "Dimension Door", time: "1 action", range: "500ft", comp: "V", dur: "Instant", desc: "Teleporteer jezelf (en 1 willing creature) tot 500ft." },
                { name: "Freedom of Movement", time: "1 action", range: "Touch", comp: "V, S, M (leren band)", dur: "1 uur", desc: "Target wordt niet gehinderd door difficult terrain, en kan 5ft besteden om uit restraints/grapple te komen." },
                { name: "Greater Invisibility", time: "1 action", range: "Touch", comp: "V, S", dur: "Concentration, 1 min", desc: "Target wordt onzichtbaar. Eindigt NIET bij aanval of spell." },
                { name: "Polymorph", time: "1 action", range: "60ft", comp: "V, S, M (cocon)", dur: "Concentration, 1 uur", desc: "WIS save. Verander creature in een beast met CR gelijk aan of lager dan level. Nieuwe HP pool." }
            ],
            5: [
                { name: "Animate Objects", time: "1 action", range: "120ft", comp: "V, S", dur: "Concentration, 1 min", desc: "Breng tot 10 kleine objecten tot leven. Elk heeft eigen HP en attack. Bonus action om te commanderen." },
                { name: "Greater Restoration", time: "1 action", range: "Touch", comp: "V, S, M (100gp diamantstof)", dur: "Instant", desc: "Verwijder: 1 level exhaustion, charmed/petrified/curse, of herstel ability score/HP max reductie." },
                { name: "Hold Monster", time: "1 action", range: "90ft", comp: "V, S, M (ijzer)", dur: "Concentration, 1 min", desc: "WIS save of paralyzed. Elk creature type. Save elke beurt. Schaalt +1 target." },
                { name: "Mass Cure Wounds", time: "1 action", range: "60ft", comp: "V, S", dur: "Instant", desc: "Tot 6 creatures binnen 30ft radius: herstel 3d8 + modifier HP. Schaalt +1d8." },
                { name: "Synaptic Static", time: "1 action", range: "120ft", comp: "V, S", dur: "Instant", desc: "20ft radius. INT save of 8d6 psychic. Gefaalde targets: -1d6 op rolls, 1 min." }
            ]
        },

        // ===== CLERIC SPELLS =====
        cleric: {
            0: [
                { name: "Guidance", time: "1 action", range: "Touch", comp: "V, S", dur: "Concentration, 1 min", desc: "+1d4 op een ability check naar keuze. Concentration." },
                { name: "Light", time: "1 action", range: "Touch", comp: "V, M (vuurvliegje)", dur: "1 uur", desc: "Object straalt bright light uit in 20ft radius en dim light voor nog eens 20ft." },
                { name: "Mending", time: "1 minute", range: "Touch", comp: "V, S, M (lodestones)", dur: "Instant", desc: "Repareer een enkele breuk of scheur in een object." },
                { name: "Sacred Flame", time: "1 action", range: "60ft", comp: "V, S", dur: "Instant", desc: "DEX save of 1d8 radiant damage. Negeert cover. Schaalt." },
                { name: "Spare the Dying", time: "1 action", range: "Touch", comp: "V, S", dur: "Instant", desc: "Stabiliseer een creature op 0 HP." },
                { name: "Thaumaturgy", time: "1 action", range: "30ft", comp: "V", dur: "Tot 1 min", desc: "Kleine goddelijke effecten: stem versterken, vlammen flikkeren, deuren opengooien, etc." },
                { name: "Toll the Dead", time: "1 action", range: "60ft", comp: "V, S", dur: "Instant", desc: "WIS save of 1d8 necrotic damage (1d12 als target gewond is). Schaalt." },
                { name: "Word of Radiance", time: "1 action", range: "Self (5ft)", comp: "V, M", dur: "Instant", desc: "Elk creature binnen 5ft: CON save of 1d6 radiant damage. Schaalt." }
            ],
            1: [
                { name: "Bane", time: "1 action", range: "30ft", comp: "V, S, M (bloed)", dur: "Concentration, 1 min", desc: "Tot 3 creatures: CHA save of -1d4 van attack rolls en saving throws." },
                { name: "Bless", time: "1 action", range: "30ft", comp: "V, S, M (heilig water)", dur: "Concentration, 1 min", desc: "Tot 3 creatures: +1d4 op attack rolls en saving throws. Schaalt +1 target." },
                { name: "Command", time: "1 action", range: "60ft", comp: "V", dur: "1 ronde", desc: "WIS save of target voert een eenwoordig commando uit (Approach, Drop, Flee, Grovel, Halt). Schaalt +1 target." },
                { name: "Cure Wounds", time: "1 action", range: "Touch", comp: "V, S", dur: "Instant", desc: "Herstel 1d8 + spellcasting modifier HP. Schaalt +1d8 per slot." },
                { name: "Detect Magic", time: "1 action", range: "Self", comp: "V, S", dur: "Concentration, 10 min", desc: "Ritual. Voel magie binnen 30ft. Zie de school of magic door dunne barrières." },
                { name: "Guiding Bolt", time: "1 action", range: "120ft", comp: "V, S", dur: "1 ronde", desc: "Ranged spell attack, 4d6 radiant. Volgende attack op target heeft advantage. Schaalt +1d6." },
                { name: "Healing Word", time: "1 bonus action", range: "60ft", comp: "V", dur: "Instant", desc: "Bonus action. Herstel 1d4 + spellcasting modifier HP op 60ft. Schaalt +1d4." },
                { name: "Inflict Wounds", time: "1 action", range: "Touch", comp: "V, S", dur: "Instant", desc: "Melee spell attack, 3d10 necrotic damage. Schaalt +1d10 per slot." },
                { name: "Protection from Evil and Good", time: "1 action", range: "Touch", comp: "V, S, M (heilig water)", dur: "Concentration, 10 min", desc: "Aberrations, celestials, elementals, fey, fiends, undead: disadvantage op attacks tegen target." },
                { name: "Sanctuary", time: "1 bonus action", range: "30ft", comp: "V, S, M (zilveren spiegel)", dur: "1 min", desc: "WIS save vereist om target aan te vallen. Eindigt als target aanvalt of schade doet." },
                { name: "Shield of Faith", time: "1 bonus action", range: "60ft", comp: "V, S, M (perkament met heilige tekst)", dur: "Concentration, 10 min", desc: "+2 AC voor een creature binnen 60ft." }
            ],
            2: [
                { name: "Aid", time: "1 action", range: "30ft", comp: "V, S, M (wit linnen)", dur: "8 uur", desc: "Tot 3 creatures: max HP en huidige HP verhogen met 5. Schaalt +5 per slot." },
                { name: "Calm Emotions", time: "1 action", range: "60ft", comp: "V, S", dur: "Concentration, 1 min", desc: "20ft radius. CHA save of charmed/frightened onderdrukt, of maak hostile creature indifferent." },
                { name: "Hold Person", time: "1 action", range: "60ft", comp: "V, S, M (ijzer)", dur: "Concentration, 1 min", desc: "WIS save of humanoid is paralyzed. Save elke beurt. Schaalt +1 target." },
                { name: "Lesser Restoration", time: "1 action", range: "Touch", comp: "V, S", dur: "Instant", desc: "Verwijder een ziekte of condition: blinded, deafened, paralyzed, of poisoned." },
                { name: "Prayer of Healing", time: "10 minutes", range: "30ft", comp: "V", dur: "Instant", desc: "Tot 6 creatures: herstel 2d8 + modifier HP. Casting time 10 min. Schaalt +1d8." },
                { name: "Silence", time: "1 action", range: "120ft", comp: "V, S", dur: "Concentration, 10 min", desc: "Ritual. 20ft radius stilte. Geen geluid, immuun voor thunder damage, geen V-component spells." },
                { name: "Spiritual Weapon", time: "1 bonus action", range: "60ft", comp: "V, S", dur: "1 min", desc: "Spectral wapen. Bonus action melee spell attack: 1d8 + modifier force. Verplaats 20ft. Schaalt +1d8 per 2 slots." },
                { name: "Zone of Truth", time: "1 action", range: "60ft", comp: "V, S", dur: "10 min", desc: "15ft radius. CHA save of kan niet liegen. Je weet wie faalt." }
            ],
            3: [
                { name: "Beacon of Hope", time: "1 action", range: "30ft", comp: "V, S", dur: "Concentration, 1 min", desc: "Gekozen creatures: advantage op WIS saves en death saves, en healing spells geven max HP." },
                { name: "Bestow Curse", time: "1 action", range: "Touch", comp: "V, S", dur: "Concentration, 1 min", desc: "WIS save of kies een curse: disadvantage op checks/attacks, waste turn, extra 1d8 necrotic." },
                { name: "Daylight", time: "1 action", range: "60ft", comp: "V, S", dur: "1 uur", desc: "60ft radius bright light op een punt of object. Verdrijft magische duisternis van 3rd level of lager." },
                { name: "Dispel Magic", time: "1 action", range: "120ft", comp: "V, S", dur: "Instant", desc: "Beëindig magisch effect van 3rd level of lager. Hogere: ability check DC 10 + level." },
                { name: "Mass Healing Word", time: "1 bonus action", range: "60ft", comp: "V", dur: "Instant", desc: "Tot 6 creatures: herstel 1d4 + modifier HP. Bonus action. Schaalt +1d4." },
                { name: "Revivify", time: "1 action", range: "Touch", comp: "V, S, M (300gp diamant)", dur: "Instant", desc: "Breng een creature terug dat max 1 minuut dood is met 1 HP. Verbruikt 300gp diamant." },
                { name: "Sending", time: "1 action", range: "Unlimited", comp: "V, S, M (koperdraad)", dur: "1 ronde", desc: "Stuur een bericht van max 25 woorden naar een bekend creature. Het kan antwoorden." },
                { name: "Spirit Guardians", time: "1 action", range: "Self (15ft)", comp: "V, S, M (heilig symbool)", dur: "Concentration, 10 min", desc: "15ft radius om jou. Vijanden: halve speed en WIS save of 3d8 radiant/necrotic. Schaalt +1d8." },
                { name: "Tongues", time: "1 action", range: "Touch", comp: "V, M (kleimodel ziggurat)", dur: "1 uur", desc: "Target begrijpt elke gesproken taal en kan begrepen worden door iedereen." }
            ],
            4: [
                { name: "Banishment", time: "1 action", range: "60ft", comp: "V, S, M (weerzinwekkend item)", dur: "Concentration, 1 min", desc: "CHA save of target verdwijnt naar een demiplane. Buitenplanaire creatures blijven weg. Schaalt +1 target." },
                { name: "Death Ward", time: "1 action", range: "Touch", comp: "V, S", dur: "8 uur", desc: "Eenmalig: als target naar 0 HP gaat, gaat het naar 1 HP in plaats daarvan." },
                { name: "Freedom of Movement", time: "1 action", range: "Touch", comp: "V, S, M (leren band)", dur: "1 uur", desc: "Target wordt niet gehinderd door difficult terrain, en kan 5ft besteden om uit restraints/grapple te komen." },
                { name: "Guardian of Faith", time: "1 action", range: "30ft", comp: "V", dur: "8 uur", desc: "Spectrale bewaker. Vijandige creatures binnen 10ft: DEX save of 20 radiant. Verdwijnt na 60 damage." }
            ],
            5: [
                { name: "Commune", time: "1 minute", range: "Self", comp: "V, S, M (wierook)", dur: "1 min", desc: "Ritual. Stel 3 ja/nee-vragen aan je godheid. Correcte antwoorden, maar cryptisch mogelijk." },
                { name: "Contagion", time: "1 action", range: "Touch", comp: "V, S", dur: "7 dagen", desc: "Melee spell attack. Target wordt ziek: kies een disease (blinding, filth fever, etc.). Na 3 failed CON saves: effect 7 dagen." },
                { name: "Greater Restoration", time: "1 action", range: "Touch", comp: "V, S, M (100gp diamantstof)", dur: "Instant", desc: "Verwijder: 1 level exhaustion, charmed/petrified/curse, of herstel ability score/HP max reductie." },
                { name: "Holy Weapon", time: "1 bonus action", range: "Touch", comp: "V, S", dur: "Concentration, 1 uur", desc: "Wapen doet +2d8 radiant damage per hit. Bonus action om te beëindigen: 4d8 radiant burst, blinded." },
                { name: "Mass Cure Wounds", time: "1 action", range: "60ft", comp: "V, S", dur: "Instant", desc: "Tot 6 creatures binnen 30ft radius: herstel 3d8 + modifier HP. Schaalt +1d8." },
                { name: "Raise Dead", time: "1 hour", range: "Touch", comp: "V, S, M (500gp diamant)", dur: "Instant", desc: "Breng een creature terug dat max 10 dagen dood is. Verbruikt 500gp diamant. -4 penalty op d20 rolls, verdwijnt per long rest." }
            ]
        }
    }
};
