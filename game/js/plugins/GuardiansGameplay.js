//=============================================================================
// GuardiansGameplay.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc [v1.0.0] Core Gameplay Systems for Guardians of the Dafeng
 * @author Xinle, LLC
 * @url 
 * @help GuardiansGameplay.js
 * 
 * This plugin implements the core gameplay systems specific to
 * Guardians of the Dafeng, including:
 * 
 * - Faction Reputation System
 * - Character Class Specializations
 * - Experience and Leveling Modifications
 * - Equipment Restrictions and Bonuses
 * - Story Progress Tracking
 * 
 * Features:
 * - Dynamic faction reputation affecting story outcomes
 * - Class-specific skill trees and abilities
 * - Cultivation-based progression system
 * - Investigation mechanics integration
 * - Royal authority and strategic command systems
 * 
 * License: MIT
 * Copyright (c) 2025 Xinle, LLC
 */

(() => {
    'use strict';
    
    const pluginName = 'GuardiansGameplay';
    
    // Faction reputation system
    window.FactionManager = {
        factions: {
            nightWatchmen: { id: 9, name: 'Night Watchmen', reputation: 0 },
            imperialCourt: { id: 10, name: 'Imperial Court', reputation: 0 },
            confucianAcademy: { id: 11, name: 'Confucian Academy', reputation: 0 },
            taoistSect: { id: 12, name: 'Taoist Sect', reputation: 0 },
            buddhistTemple: { id: 13, name: 'Buddhist Temple', reputation: 0 },
            guMasters: { id: 14, name: 'Gu Masters', reputation: 0 }
        },
        
        addReputation: function(factionKey, amount) {
            if (this.factions[factionKey]) {
                const faction = this.factions[factionKey];
                faction.reputation += amount;
                $gameVariables.setValue(faction.id, faction.reputation);
                
                // Show reputation change message
                const message = `${faction.name} reputation ${amount > 0 ? 'increased' : 'decreased'} by ${Math.abs(amount)}!`;
                $gameMessage.add(message);
                
                // Check for reputation milestones
                this.checkReputationMilestones(factionKey);
            }
        },
        
        getReputation: function(factionKey) {
            if (this.factions[factionKey]) {
                return $gameVariables.value(this.factions[factionKey].id);
            }
            return 0;
        },
        
        checkReputationMilestones: function(factionKey) {
            const reputation = this.getReputation(factionKey);
            const faction = this.factions[factionKey];
            
            // Reputation milestones
            if (reputation >= 100 && !$gameSwitches.value(20 + Object.keys(this.factions).indexOf(factionKey))) {
                $gameSwitches.setValue(20 + Object.keys(this.factions).indexOf(factionKey), true);
                $gameMessage.add(`You have gained the trust of the ${faction.name}!`);
            } else if (reputation <= -100 && !$gameSwitches.value(30 + Object.keys(this.factions).indexOf(factionKey))) {
                $gameSwitches.setValue(30 + Object.keys(this.factions).indexOf(factionKey), true);
                $gameMessage.add(`The ${faction.name} now considers you an enemy!`);
            }
        },
        
        getReputationLevel: function(factionKey) {
            const reputation = this.getReputation(factionKey);
            if (reputation >= 200) return 'Revered';
            if (reputation >= 100) return 'Trusted';
            if (reputation >= 50) return 'Friendly';
            if (reputation >= 0) return 'Neutral';
            if (reputation >= -50) return 'Unfriendly';
            if (reputation >= -100) return 'Hostile';
            return 'Hated';
        }
    };
    
    // Class specialization system
    window.ClassManager = {
        classSpecializations: {
            1: { // Guardian
                name: 'Guardian',
                specialSkills: [10, 11, 12, 13, 14], // Modern Knowledge + Investigation
                cultivationPath: 'warrior',
                uniqueAbilities: ['modernKnowledge', 'investigation']
            },
            2: { // Royal
                name: 'Royal',
                specialSkills: [15, 16, 17], // Royal Authority skills
                cultivationPath: 'confucian',
                uniqueAbilities: ['royalAuthority', 'diplomaticImmunity']
            },
            3: { // Strategist
                name: 'Strategist',
                specialSkills: [18, 19, 20, 21, 22], // Tactical skills
                cultivationPath: 'confucian',
                uniqueAbilities: ['tacticalAnalysis', 'battleFormation']
            },
            4: { // Scholar
                name: 'Scholar',
                specialSkills: [23, 24, 25], // Academic skills
                cultivationPath: 'confucian',
                uniqueAbilities: ['academicKnowledge', 'research']
            }
        },
        
        getClassSpecialization: function(classId) {
            return this.classSpecializations[classId] || null;
        },
        
        canLearnSkill: function(actor, skillId) {
            const specialization = this.getClassSpecialization(actor.classId);
            if (!specialization) return true;
            
            // Check if skill is in class specialization
            if (specialization.specialSkills.includes(skillId)) {
                return true;
            }
            
            // Check cultivation requirements
            return this.checkCultivationRequirement(actor, skillId);
        },
        
        checkCultivationRequirement: function(actor, skillId) {
            const cultivationLevel = $gameVariables.value(8); // Cultivation Grade variable
            
            // Skill cultivation requirements
            const skillRequirements = {
                30: 9, // Refining Essence - 9th Grade
                31: 8, // Refining Qi - 8th Grade
                32: 7, // Refining Spirit - 7th Grade
                40: 9, // Foundation Building - 9th Grade
                41: 8, // Consecration - 8th Grade
                42: 5, // Golden Core - 5th Grade
                50: 9, // Enlightenment - 9th Grade
                51: 8, // Self-Cultivation - 8th Grade
                52: 7, // Righteous Aura - 7th Grade
                60: 9, // Novice Meditation - 9th Grade
                61: 7, // Dharma Teaching - 7th Grade
                62: 3  // Vajra Body - 3rd Grade
            };
            
            const requiredGrade = skillRequirements[skillId];
            if (requiredGrade) {
                return cultivationLevel <= requiredGrade; // Lower numbers = higher grades
            }
            
            return true;
        }
    };
    
    // Experience and leveling modifications
    const _Game_Actor_gainExp = Game_Actor.prototype.gainExp;
    Game_Actor.prototype.gainExp = function(exp) {
        const lastLevel = this._level;
        _Game_Actor_gainExp.call(this, exp);
        
        // Check for cultivation breakthrough
        if (this._level > lastLevel) {
            this.checkCultivationBreakthrough();
        }
        
        // Add faction reputation for defeating enemies
        if (exp > 0) {
            FactionManager.addReputation('nightWatchmen', Math.floor(exp / 50));
        }
    };
    
    Game_Actor.prototype.checkCultivationBreakthrough = function() {
        const currentGrade = $gameVariables.value(8);
        const newGrade = Math.max(1, 10 - Math.floor(this._level / 5)); // Higher level = lower grade number
        
        if (newGrade < currentGrade) {
            $gameVariables.setValue(8, newGrade);
            $gameSwitches.setValue(10, true); // Trigger breakthrough event
            
            // Learn new cultivation skills based on class
            const specialization = ClassManager.getClassSpecialization(this._classId);
            if (specialization) {
                this.learnCultivationSkills(specialization.cultivationPath, newGrade);
            }
        }
    };
    
    Game_Actor.prototype.learnCultivationSkills = function(path, grade) {
        const skillsByPath = {
            warrior: {
                9: [30], // Refining Essence
                8: [31], // Refining Qi
                7: [32], // Refining Spirit
                6: [33], // Copper Skin Iron Bones
                5: [34]  // Force Transformation
            },
            confucian: {
                9: [50], // Enlightenment
                8: [51], // Self-Cultivation
                7: [52], // Righteous Aura
                6: [53], // Scholar
                5: [54]  // Virtue
            },
            taoist: {
                9: [40], // Foundation Building
                8: [41], // Consecration
                7: [42], // Qi Consumption
                6: [43], // Yin Spirit
                5: [44]  // Golden Core
            },
            buddhist: {
                9: [60], // Novice Meditation
                8: [61], // Warrior Monk
                7: [62], // Dharma Teaching
                6: [63], // Zen Master
                5: [64]  // Vinaya Master
            }
        };
        
        const skills = skillsByPath[path];
        if (skills && skills[grade]) {
            skills[grade].forEach(skillId => {
                if (!this.hasSkill(skillId)) {
                    this.learnSkill(skillId);
                    const skill = $dataSkills[skillId];
                    $gameMessage.add(`${this._name} learned ${skill.name}!`);
                }
            });
        }
    };
    
    // Equipment restrictions and bonuses
    const _Game_Actor_canEquip = Game_Actor.prototype.canEquip;
    Game_Actor.prototype.canEquip = function(item) {
        if (!_Game_Actor_canEquip.call(this, item)) {
            return false;
        }
        
        // Class-specific equipment restrictions
        const specialization = ClassManager.getClassSpecialization(this._classId);
        if (specialization && item.note) {
            // Check for class restrictions in item notes
            if (item.note.includes(`<classOnly:${specialization.name}>`) || 
                item.note.includes(`<classRestrict:${specialization.name}>`)) {
                return item.note.includes(`<classOnly:${specialization.name}>`);
            }
        }
        
        // Cultivation grade requirements
        const cultivationGrade = $gameVariables.value(8);
        if (item.note && item.note.includes('<gradeReq:')) {
            const match = item.note.match(/<gradeReq:(\d+)>/);
            if (match) {
                const requiredGrade = parseInt(match[1]);
                return cultivationGrade <= requiredGrade;
            }
        }
        
        return true;
    };
    
    // Story progress tracking
    window.StoryManager = {
        storyFlags: {
            sangboLakeMystery: 25,
            corruptionInvestigation: 24,
            mainStoryProgress: 26
        },
        
        advanceStory: function(flagKey, value) {
            if (this.storyFlags[flagKey]) {
                $gameVariables.setValue(this.storyFlags[flagKey], value);
                this.checkStoryMilestones(flagKey, value);
            }
        },
        
        getStoryProgress: function(flagKey) {
            if (this.storyFlags[flagKey]) {
                return $gameVariables.value(this.storyFlags[flagKey]);
            }
            return 0;
        },
        
        checkStoryMilestones: function(flagKey, value) {
            // Story milestone rewards
            if (flagKey === 'mainStoryProgress') {
                if (value >= 10) {
                    FactionManager.addReputation('nightWatchmen', 50);
                }
                if (value >= 20) {
                    FactionManager.addReputation('imperialCourt', 30);
                }
                if (value >= 30) {
                    // Unlock special abilities or items
                    $gameSwitches.setValue(40, true);
                }
            }
        }
    };
    
    // Plugin Commands
    PluginManager.registerCommand(pluginName, "addReputation", args => {
        const faction = args.faction;
        const amount = parseInt(args.amount);
        FactionManager.addReputation(faction, amount);
    });
    
    PluginManager.registerCommand(pluginName, "advanceStory", args => {
        const flag = args.flag;
        const value = parseInt(args.value);
        StoryManager.advanceStory(flag, value);
    });
    
    PluginManager.registerCommand(pluginName, "checkCultivation", args => {
        const actorId = parseInt(args.actorId) || 1;
        const actor = $gameActors.actor(actorId);
        if (actor) {
            actor.checkCultivationBreakthrough();
        }
    });
    
    // Initialize systems on game start
    const _DataManager_onLoad = DataManager.onLoad;
    DataManager.onLoad = function(object) {
        _DataManager_onLoad.call(this, object);
        
        if (object === $dataSystem) {
            // Initialize faction reputations
            Object.keys(FactionManager.factions).forEach(key => {
                const faction = FactionManager.factions[key];
                if ($gameVariables && $gameVariables.value(faction.id) === 0) {
                    $gameVariables.setValue(faction.id, 0);
                }
            });
        }
    };
    
})();
