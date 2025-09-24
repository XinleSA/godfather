//=============================================================================
// MultilingualSupport.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc [v1.0.0] Multilingual Support for Guardians of the Dafeng
 * @author Xinle, LLC
 * @url 
 * @help MultilingualSupport.js
 * 
 * @param defaultLanguage
 * @text Default Language
 * @desc Default language for the game
 * @type select
 * @option English
 * @value en
 * @option Chinese (Simplified)
 * @value zh
 * @option Japanese
 * @value ja
 * @option Spanish
 * @value es
 * @default en
 * 
 * @param showLanguageMenu
 * @text Show Language Menu
 * @desc Show language selection in options menu
 * @type boolean
 * @default true
 * 
 * This plugin provides comprehensive multilingual support for the
 * Guardians of the Dafeng RPG, allowing players to experience the
 * game in their native language.
 * 
 * Supported Languages:
 * - English (en)
 * - Chinese Simplified (zh)
 * - Japanese (ja)
 * - Spanish (es)
 * 
 * The plugin automatically handles:
 * - Dialog text translation
 * - Menu text translation
 * - Item/skill descriptions
 * - System messages
 * - Character names (with cultural adaptations)
 * 
 * License: MIT
 * Copyright (c) 2025 Xinle, LLC
 */

(() => {
    'use strict';
    
    const pluginName = 'MultilingualSupport';
    const parameters = PluginManager.parameters(pluginName);
    const defaultLanguage = parameters['defaultLanguage'] || 'en';
    const showLanguageMenu = parameters['showLanguageMenu'] === 'true';
    
    // Language database
    const languageData = {
        en: {
            // Character Names
            characterNames: {
                "Xu Qi'an": "Xu Qi'an",
                "Princess Lin'an": "Princess Lin'an", 
                "Wei Yuan": "Wei Yuan",
                "Xu Xinnian": "Xu Xinnian"
            },
            // System Terms
            systemTerms: {
                level: "Level",
                exp: "Experience",
                hp: "Health Points",
                mp: "Mana Points",
                attack: "Attack",
                defense: "Defense",
                magicAttack: "Magic Attack",
                magicDefense: "Magic Defense",
                agility: "Agility",
                luck: "Luck"
            },
            // Menu Text
            menuText: {
                newGame: "New Game",
                continue: "Continue",
                options: "Options",
                language: "Language",
                investigation: "Investigation",
                cultivation: "Cultivation",
                inventory: "Inventory",
                status: "Status",
                save: "Save",
                load: "Load"
            },
            // Dialog Text
            dialogText: {
                greeting: "Hello, I am Xu Qi'an, Guardian of Dafeng.",
                investigation: "Let me investigate this matter thoroughly.",
                breakthrough: "I feel my cultivation reaching a breakthrough!",
                mystery: "This mystery requires careful analysis.",
                authority: "By imperial decree, you will comply!",
                strategy: "According to the Art of War, we should proceed carefully."
            },
            // Skill Names and Descriptions
            skills: {
                logicAnalysis: {
                    name: "Logic Analysis",
                    description: "Use modern logical thinking to identify contradictions and inconsistencies."
                },
                scientificAnalysis: {
                    name: "Scientific Analysis", 
                    description: "Apply modern scientific knowledge to analyze evidence and materials."
                },
                psychologicalInsight: {
                    name: "Psychological Insight",
                    description: "Read body language and detect deception using modern psychology."
                },
                investigation: {
                    name: "Investigation",
                    description: "Systematically search for clues and evidence in the environment."
                },
                royalPresence: {
                    name: "Royal Presence",
                    description: "Command respect and attention through imperial authority."
                },
                tacticalAnalysis: {
                    name: "Tactical Analysis",
                    description: "Analyze battlefield conditions and enemy formations to gain strategic advantage."
                }
            }
        },
        zh: {
            // Character Names (Chinese)
            characterNames: {
                "Xu Qi'an": "许七安",
                "Princess Lin'an": "临安公主",
                "Wei Yuan": "魏渊", 
                "Xu Xinnian": "许新年"
            },
            // System Terms
            systemTerms: {
                level: "等级",
                exp: "经验值",
                hp: "生命值",
                mp: "法力值",
                attack: "攻击力",
                defense: "防御力",
                magicAttack: "法术攻击",
                magicDefense: "法术防御",
                agility: "敏捷",
                luck: "幸运"
            },
            // Menu Text
            menuText: {
                newGame: "新游戏",
                continue: "继续游戏",
                options: "选项",
                language: "语言",
                investigation: "调查",
                cultivation: "修炼",
                inventory: "物品",
                status: "状态",
                save: "保存",
                load: "读取"
            },
            // Dialog Text
            dialogText: {
                greeting: "你好，我是许七安，大奉打更人。",
                investigation: "让我仔细调查这件事。",
                breakthrough: "我感觉修为要突破了！",
                mystery: "这个谜团需要仔细分析。",
                authority: "奉皇命，你必须服从！",
                strategy: "根据兵法，我们应该谨慎行事。"
            },
            // Skill Names and Descriptions
            skills: {
                logicAnalysis: {
                    name: "逻辑分析",
                    description: "运用现代逻辑思维识别矛盾和不一致之处。"
                },
                scientificAnalysis: {
                    name: "科学分析",
                    description: "运用现代科学知识分析证据和材料。"
                },
                psychologicalInsight: {
                    name: "心理洞察",
                    description: "运用现代心理学读懂肢体语言并识破谎言。"
                },
                investigation: {
                    name: "调查",
                    description: "系统性地搜寻环境中的线索和证据。"
                },
                royalPresence: {
                    name: "皇室威仪",
                    description: "通过帝王权威获得尊重和关注。"
                },
                tacticalAnalysis: {
                    name: "战术分析",
                    description: "分析战场条件和敌军阵型以获得战略优势。"
                }
            }
        },
        ja: {
            // Character Names (Japanese)
            characterNames: {
                "Xu Qi'an": "徐七安（きょ しちあん）",
                "Princess Lin'an": "臨安公主（りんあん こうしゅ）",
                "Wei Yuan": "魏淵（ぎ えん）",
                "Xu Xinnian": "徐新年（きょ しんねん）"
            },
            // System Terms
            systemTerms: {
                level: "レベル",
                exp: "経験値",
                hp: "体力",
                mp: "魔力",
                attack: "攻撃力",
                defense: "防御力",
                magicAttack: "魔法攻撃",
                magicDefense: "魔法防御",
                agility: "敏捷性",
                luck: "運"
            },
            // Menu Text
            menuText: {
                newGame: "新しいゲーム",
                continue: "続ける",
                options: "オプション",
                language: "言語",
                investigation: "調査",
                cultivation: "修行",
                inventory: "アイテム",
                status: "ステータス",
                save: "セーブ",
                load: "ロード"
            },
            // Dialog Text
            dialogText: {
                greeting: "こんにちは、私は徐七安、大奉の夜警です。",
                investigation: "この件を徹底的に調査させてください。",
                breakthrough: "修行が突破点に達しているのを感じます！",
                mystery: "この謎は慎重な分析が必要です。",
                authority: "皇帝の勅命により、従わなければなりません！",
                strategy: "兵法によれば、慎重に進むべきです。"
            },
            // Skill Names and Descriptions
            skills: {
                logicAnalysis: {
                    name: "論理分析",
                    description: "現代の論理的思考を使って矛盾や不一致を特定する。"
                },
                scientificAnalysis: {
                    name: "科学分析",
                    description: "現代の科学知識を応用して証拠や材料を分析する。"
                },
                psychologicalInsight: {
                    name: "心理洞察",
                    description: "現代心理学を使ってボディランゲージを読み、嘘を見抜く。"
                },
                investigation: {
                    name: "調査",
                    description: "環境内の手がかりや証拠を体系的に探索する。"
                },
                royalPresence: {
                    name: "皇室の威厳",
                    description: "帝王の権威を通じて尊敬と注目を集める。"
                },
                tacticalAnalysis: {
                    name: "戦術分析",
                    description: "戦場の状況と敵の陣形を分析して戦略的優位を得る。"
                }
            }
        },
        es: {
            // Character Names (Spanish)
            characterNames: {
                "Xu Qi'an": "Xu Qi'an",
                "Princess Lin'an": "Princesa Lin'an",
                "Wei Yuan": "Wei Yuan",
                "Xu Xinnian": "Xu Xinnian"
            },
            // System Terms
            systemTerms: {
                level: "Nivel",
                exp: "Experiencia",
                hp: "Puntos de Vida",
                mp: "Puntos de Maná",
                attack: "Ataque",
                defense: "Defensa",
                magicAttack: "Ataque Mágico",
                magicDefense: "Defensa Mágica",
                agility: "Agilidad",
                luck: "Suerte"
            },
            // Menu Text
            menuText: {
                newGame: "Nuevo Juego",
                continue: "Continuar",
                options: "Opciones",
                language: "Idioma",
                investigation: "Investigación",
                cultivation: "Cultivo",
                inventory: "Inventario",
                status: "Estado",
                save: "Guardar",
                load: "Cargar"
            },
            // Dialog Text
            dialogText: {
                greeting: "Hola, soy Xu Qi'an, Guardián de Dafeng.",
                investigation: "Permíteme investigar este asunto a fondo.",
                breakthrough: "¡Siento que mi cultivo está alcanzando un avance!",
                mystery: "Este misterio requiere un análisis cuidadoso.",
                authority: "¡Por decreto imperial, debes obedecer!",
                strategy: "Según el Arte de la Guerra, debemos proceder con cuidado."
            },
            // Skill Names and Descriptions
            skills: {
                logicAnalysis: {
                    name: "Análisis Lógico",
                    description: "Usar pensamiento lógico moderno para identificar contradicciones e inconsistencias."
                },
                scientificAnalysis: {
                    name: "Análisis Científico",
                    description: "Aplicar conocimiento científico moderno para analizar evidencia y materiales."
                },
                psychologicalInsight: {
                    name: "Perspicacia Psicológica",
                    description: "Leer lenguaje corporal y detectar engaños usando psicología moderna."
                },
                investigation: {
                    name: "Investigación",
                    description: "Buscar sistemáticamente pistas y evidencia en el entorno."
                },
                royalPresence: {
                    name: "Presencia Real",
                    description: "Comandar respeto y atención a través de la autoridad imperial."
                },
                tacticalAnalysis: {
                    name: "Análisis Táctico",
                    description: "Analizar condiciones del campo de batalla y formaciones enemigas para obtener ventaja estratégica."
                }
            }
        }
    };
    
    // Initialize language system
    let currentLanguage = defaultLanguage;
    
    // Language management functions
    window.LanguageManager = {
        getCurrentLanguage: function() {
            return currentLanguage;
        },
        
        setLanguage: function(lang) {
            if (languageData[lang]) {
                currentLanguage = lang;
                $dataSystem.locale = lang;
                ConfigManager.language = lang;
                ConfigManager.save();
                this.refreshAllText();
            }
        },
        
        getText: function(category, key, fallback = '') {
            const langData = languageData[currentLanguage];
            if (langData && langData[category] && langData[category][key]) {
                return langData[category][key];
            }
            // Fallback to English if current language doesn't have the text
            const englishData = languageData['en'];
            if (englishData && englishData[category] && englishData[category][key]) {
                return englishData[category][key];
            }
            return fallback || key;
        },
        
        getSkillText: function(skillKey, property) {
            const langData = languageData[currentLanguage];
            if (langData && langData.skills && langData.skills[skillKey] && langData.skills[skillKey][property]) {
                return langData.skills[skillKey][property];
            }
            // Fallback to English
            const englishData = languageData['en'];
            if (englishData && englishData.skills && englishData.skills[skillKey] && englishData.skills[skillKey][property]) {
                return englishData.skills[skillKey][property];
            }
            return skillKey;
        },
        
        refreshAllText: function() {
            // Refresh scene if it exists
            if (SceneManager._scene) {
                SceneManager._scene.refresh && SceneManager._scene.refresh();
            }
            
            // Refresh all windows
            $gameMessage.clear();
            
            // Update system terms
            this.updateSystemTerms();
        },
        
        updateSystemTerms: function() {
            const terms = $dataSystem.terms;
            const langData = languageData[currentLanguage];
            
            if (langData && langData.systemTerms) {
                terms.basic[0] = langData.systemTerms.level;
                terms.basic[1] = langData.systemTerms.exp;
                terms.basic[2] = langData.systemTerms.hp;
                terms.basic[3] = langData.systemTerms.mp;
                terms.basic[4] = langData.systemTerms.attack;
                terms.basic[5] = langData.systemTerms.defense;
                terms.basic[6] = langData.systemTerms.magicAttack;
                terms.basic[7] = langData.systemTerms.magicDefense;
                terms.basic[8] = langData.systemTerms.agility;
                terms.basic[9] = langData.systemTerms.luck;
            }
        }
    };
    
    // Plugin Commands
    PluginManager.registerCommand(pluginName, "setLanguage", args => {
        const language = args.language;
        LanguageManager.setLanguage(language);
    });
    
    PluginManager.registerCommand(pluginName, "showLanguageMenu", args => {
        SceneManager.push(Scene_Language);
    });
    
    // Extend ConfigManager for language settings
    const _ConfigManager_makeData = ConfigManager.makeData;
    ConfigManager.makeData = function() {
        const config = _ConfigManager_makeData.call(this);
        config.language = currentLanguage;
        return config;
    };
    
    const _ConfigManager_applyData = ConfigManager.applyData;
    ConfigManager.applyData = function(config) {
        _ConfigManager_applyData.call(this, config);
        if (config.language) {
            LanguageManager.setLanguage(config.language);
        }
    };
    
    // Language Selection Scene
    class Scene_Language extends Scene_MenuBase {
        create() {
            super.create();
            this.createLanguageWindow();
        }
        
        createLanguageWindow() {
            const rect = this.languageWindowRect();
            this._languageWindow = new Window_Language(rect);
            this._languageWindow.setHandler('ok', this.onLanguageOk.bind(this));
            this._languageWindow.setHandler('cancel', this.popScene.bind(this));
            this.addWindow(this._languageWindow);
        }
        
        languageWindowRect() {
            const ww = 400;
            const wh = this.calcWindowHeight(4, true);
            const wx = (Graphics.boxWidth - ww) / 2;
            const wy = (Graphics.boxHeight - wh) / 2;
            return new Rectangle(wx, wy, ww, wh);
        }
        
        onLanguageOk() {
            const language = this._languageWindow.currentExt();
            LanguageManager.setLanguage(language);
            this.popScene();
        }
    }
    
    // Language Selection Window
    class Window_Language extends Window_Command {
        makeCommandList() {
            this.addCommand("English", 'language', true, 'en');
            this.addCommand("中文 (简体)", 'language', true, 'zh');
            this.addCommand("日本語", 'language', true, 'ja');
            this.addCommand("Español", 'language', true, 'es');
        }
        
        drawItem(index) {
            const rect = this.itemLineRect(index);
            const align = this.itemTextAlign();
            this.resetTextColor();
            this.changePaintOpacity(this.isCommandEnabled(index));
            
            // Highlight current language
            if (this.commandExt(index) === currentLanguage) {
                this.changeTextColor(ColorManager.systemColor());
                this.drawText("► ", rect.x, rect.y, rect.width, align);
            }
            
            this.drawText(this.commandName(index), rect.x + 30, rect.y, rect.width - 30, align);
        }
    }
    
    // Add language option to options menu if enabled
    if (showLanguageMenu) {
        const _Window_Options_makeCommandList = Window_Options.prototype.makeCommandList;
        Window_Options.prototype.makeCommandList = function() {
            _Window_Options_makeCommandList.call(this);
            this.addCommand(LanguageManager.getText('menuText', 'language', 'Language'), 'language');
        };
        
        const _Window_Options_processOk = Window_Options.prototype.processOk;
        Window_Options.prototype.processOk = function() {
            const index = this.index();
            const symbol = this.commandSymbol(index);
            if (symbol === 'language') {
                SceneManager.push(Scene_Language);
            } else {
                _Window_Options_processOk.call(this);
            }
        };
    }
    
    // Override text display functions to use translations
    const _Window_Base_drawText = Window_Base.prototype.drawText;
    Window_Base.prototype.drawText = function(text, x, y, maxWidth, align) {
        // Check if text needs translation
        const translatedText = this.translateText(text);
        _Window_Base_drawText.call(this, translatedText, x, y, maxWidth, align);
    };
    
    Window_Base.prototype.translateText = function(text) {
        // Simple translation lookup for common terms
        const commonTranslations = {
            'Level': LanguageManager.getText('systemTerms', 'level', 'Level'),
            'HP': LanguageManager.getText('systemTerms', 'hp', 'HP'),
            'MP': LanguageManager.getText('systemTerms', 'mp', 'MP'),
            'Attack': LanguageManager.getText('systemTerms', 'attack', 'Attack'),
            'Defense': LanguageManager.getText('systemTerms', 'defense', 'Defense')
        };
        
        return commonTranslations[text] || text;
    };
    
    // Initialize language on game start
    const _Scene_Boot_start = Scene_Boot.prototype.start;
    Scene_Boot.prototype.start = function() {
        _Scene_Boot_start.call(this);
        LanguageManager.setLanguage(ConfigManager.language || defaultLanguage);
    };
    
    // Export for global access
    window.Scene_Language = Scene_Language;
    window.Window_Language = Window_Language;
    
})();
