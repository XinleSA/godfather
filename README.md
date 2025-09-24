# Guardians of the Dafeng - RPG Maker MZ Game

![Game Logo](https://img.shields.io/badge/RPG%20Maker-MZ-blue) ![Language Support](https://img.shields.io/badge/Languages-4-green) ![License](https://img.shields.io/badge/License-MIT-yellow)

A comprehensive RPG Maker MZ game based on the Chinese series "Guardians of the Dafeng" (大奉打更人), featuring authentic cultivation systems, investigation mechanics, and multilingual support.

## 🎮 Game Overview

**Publisher**: Xinle, LLC  
**Engine**: RPG Maker MZ  
**Genre**: Investigation RPG with Cultivation Elements  
**Languages**: English, Chinese (Simplified), Japanese, Spanish  
**Development Status**: In Development  

### Story

Experience the world of the Dafeng Dynasty as Xu Qi'an, a modern man transported to an ancient world where he becomes a Night Watchman (Guardian). Use your modern knowledge and investigative skills to solve mysteries, navigate court intrigue, and master ancient cultivation techniques.

### Key Features

- **Authentic Cultivation Systems**: Eight complete cultivation paths including Warrior, Taoist, Confucian, Buddhist, Warlock, Shaman, and Gu Master systems
- **Investigation Mechanics**: Unique gameplay combining modern forensic techniques with ancient mystery-solving
- **Multilingual Support**: Full localization in 4 languages with cultural adaptations
- **Faction Reputation**: Dynamic relationship system affecting story outcomes
- **Character Specializations**: Four distinct classes with unique abilities and progression paths

## 🏗️ Project Structure

```
guardians-dafeng-rpg/
├── game/                          # RPG Maker MZ game files
│   ├── data/                      # Game database files
│   │   ├── Actors.json           # Character definitions
│   │   ├── Classes.json          # Character classes
│   │   ├── Skills.json           # Abilities and techniques
│   │   ├── Items.json            # Items and cultivation aids
│   │   ├── Weapons.json          # Weapons and equipment
│   │   ├── Armors.json           # Armor and protective gear
│   │   ├── Enemies.json          # Antagonists and creatures
│   │   ├── States.json           # Status effects and conditions
│   │   ├── CommonEvents.json     # Game events and mechanics
│   │   └── System.json           # Game configuration
│   ├── js/plugins/               # Custom plugins
│   │   ├── MultilingualSupport.js # Language system
│   │   └── GuardiansGameplay.js  # Core gameplay mechanics
│   └── js/plugins.js             # Plugin configuration
├── docs/                         # Documentation
├── PROJECT_TIMELINE.md           # Development timeline
├── cultivation_systems_research.md # Series research
└── README.md                     # This file
```

## 🎯 Character Classes

### Guardian (Xu Qi'an)
- **Specialization**: Investigation and Modern Knowledge
- **Unique Skills**: Logic Analysis, Scientific Analysis, Psychological Insight
- **Cultivation Path**: Warrior with Modern Knowledge enhancement
- **Equipment**: Investigation tools, Guardian weapons

### Royal (Princess Lin'an)
- **Specialization**: Imperial Authority and Diplomacy
- **Unique Skills**: Royal Presence, Diplomatic Immunity, Imperial Command
- **Cultivation Path**: Confucian with Royal enhancement
- **Equipment**: Ceremonial weapons, Imperial regalia

### Strategist (Wei Yuan)
- **Specialization**: Military Tactics and Leadership
- **Unique Skills**: Tactical Analysis, Battle Formation, Master Tactician
- **Cultivation Path**: Confucian with Strategic focus
- **Equipment**: War fans, Strategic manuals

### Scholar (Xu Xinnian)
- **Specialization**: Academic Knowledge and Research
- **Unique Skills**: Academic Knowledge, Research, Military Strategy
- **Cultivation Path**: Confucian traditional
- **Equipment**: Scholar's staff, Academic texts

## ⚔️ Cultivation Systems

The game features eight authentic cultivation systems from the series:

### 1. Warriors (武者)
- **9th Grade**: Refining Essence (炼精) - Endless stamina
- **8th Grade**: Refining Qi (炼气) - Enhanced strength, wall-running
- **7th Grade**: Refining Spirit (炼神) - Danger sense, enhanced intuition
- **6th Grade**: Copper Skin Iron Bones (铜皮铁骨)
- **Higher Grades**: Force Transformation, Artistic Conception, Immortal Body
- **Transcendent**: Martial God (武神)

### 2. Taoists (道门)
- **9th Grade**: Foundation Building (筑基)
- **8th Grade**: Consecration (开光)
- **7th Grade**: Qi Consumption (食气)
- **5th Grade**: Golden Core (金丹)
- **Transcendent**: Dao Sovereign (道尊)

### 3. Confucians (儒家)
- **9th Grade**: Enlightenment (开窍)
- **8th Grade**: Self-Cultivation (修身)
- **7th Grade**: Benevolent One (仁者)
- **Transcendent**: Confucian Sage (儒圣)

### 4. Buddhists (佛门)
- **Chan Path**: Meditation and enlightenment
- **Martial Path**: Physical cultivation and Vajra techniques
- **Transcendent**: Buddha (佛陀)

*[Additional systems: Warlocks, Shamans, Gu Masters documented in cultivation_systems_research.md]*

## 🔍 Investigation System

### Core Mechanics
- **Scene Examination**: Search for physical evidence and clues
- **Witness Interviews**: Use psychological insight to detect deception
- **Evidence Analysis**: Apply scientific knowledge to materials
- **Deduction**: Connect clues to solve mysteries

### Modern Knowledge Skills (Unique to Xu Qi'an)
- **Logic Analysis**: Identify contradictions in testimonies
- **Scientific Analysis**: Analyze poisons, materials, and physical evidence
- **Psychological Insight**: Read body language and emotional states

## 🌍 Multilingual Support

### Supported Languages
- **English (en)**: Default language
- **Chinese Simplified (zh)**: 中文简体 - Original series language
- **Japanese (ja)**: 日本語 - With proper character readings
- **Spanish (es)**: Español - Full localization

### Features
- **Dynamic Language Switching**: Change language in-game through options menu
- **Cultural Adaptations**: Character names properly localized for each culture
- **Complete Translation**: All text including skills, items, dialog, and system messages
- **Extensible System**: Easy to add additional languages

## 🏛️ Faction System

### Major Factions
- **Night Watchmen**: Law enforcement organization
- **Imperial Court**: Royal government and nobility
- **Confucian Academy**: Scholarly institution
- **Taoist Sect**: Mystical cultivation group
- **Buddhist Temple**: Religious organization
- **Gu Masters**: Mysterious insect cultivators

### Reputation Levels
- **Revered** (200+): Maximum trust and special privileges
- **Trusted** (100+): High standing with faction benefits
- **Friendly** (50+): Positive relationship
- **Neutral** (0): No special standing
- **Unfriendly** (-50): Negative relationship
- **Hostile** (-100): Active opposition
- **Hated** (-200): Maximum enmity

## 🛠️ Technical Features

### RPG Maker MZ Integration
- **Custom Plugins**: Modular system architecture
- **Event System**: Complex investigation and story mechanics
- **Database Integration**: Series-authentic items, skills, and enemies
- **Save System**: Progress tracking and faction reputation persistence

### Plugin Architecture
- **MultilingualSupport.js**: Complete localization system
- **GuardiansGameplay.js**: Core game mechanics and progression
- **InvestigationSystem.js**: Mystery-solving gameplay
- **CultivationSystem.js**: Breakthrough and advancement mechanics

## 📋 Development Status

### Completed Phases ✅
1. **Database Implementation**: Complete game data with series-authentic content
2. **Core Mechanics**: Investigation system, cultivation progression, faction reputation
3. **Multilingual Support**: 4-language system with cultural adaptations

### Current Phase 🔄
4. **Story Content**: Creating game scenarios and narrative events

### Upcoming Phases 📅
5. **Alpha Testing**: Core functionality validation
6. **Beta Testing**: Feature completion and balancing
7. **Documentation**: Comprehensive guides with screenshots
8. **WordPress Article**: Marketing and release content
9. **Production Build**: Final release preparation

## 🎮 Installation & Setup

### Requirements
- RPG Maker MZ (for development)
- Modern web browser (for playing)
- 2GB free disk space

### Development Setup
1. Clone the repository
2. Open `Game.rpgproject` in RPG Maker MZ
3. Enable all plugins in the Plugin Manager
4. Test play to verify functionality

### Playing the Game
1. Open `index.html` in a web browser
2. Select your preferred language
3. Start with "New Game"
4. Follow the tutorial for investigation mechanics

## 📖 Documentation

- **[Project Timeline](PROJECT_TIMELINE.md)**: Development schedule and credit estimates
- **[Cultivation Research](cultivation_systems_research.md)**: Series-accurate system documentation
- **[Plugin Documentation](docs/plugins.md)**: Technical plugin reference
- **[Gameplay Guide](docs/gameplay.md)**: Player instructions and mechanics

## 🤝 Contributing

This project is developed by Xinle, LLC. For questions or suggestions:
- Create an issue in the GitHub repository
- Follow development progress through commits
- Check the project timeline for upcoming features

## 📄 License

MIT License - Copyright (c) 2025 Xinle, LLC

## 🙏 Acknowledgments

- **Original Series**: "Guardians of the Dafeng" (大奉打更人) creators and publishers
- **RPG Maker MZ**: Gotcha Gotcha Games for the development platform
- **Community**: RPG Maker community for plugins and resources
- **Translators**: Community contributors for localization support

## 📊 Project Statistics

- **Total Files**: 50+ game data and code files
- **Lines of Code**: 3,000+ lines of JavaScript
- **Database Entries**: 200+ skills, items, enemies, and equipment
- **Languages Supported**: 4 complete localizations
- **Development Time**: 6+ months planned
- **Estimated Credits**: 5,865 total (see PROJECT_TIMELINE.md)

---

**Note**: This is a fan-made game based on the "Guardians of the Dafeng" series. All trademarks and copyrights belong to their respective owners. This project is created for educational and entertainment purposes.
