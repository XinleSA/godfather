# Game Design Document: Guardians of the Dafeng

## 1. Introduction

| | |
|---|---|
| **Game Title** | Guardians of the Dafeng |
| **Engine** | RPG Maker MZ |
| **Genre** | Detective RPG with fantasy elements |
| **Target Audience** | Fans of the "Guardians of the Dafeng" series, RPG enthusiasts, and players who enjoy investigation and mystery-solving games. |
| **Logline** | A modern-day police academy graduate is transported to a mystical ancient dynasty. He must use his detective skills to solve crimes, navigate political intrigue, and uncover a conspiracy that threatens the entire realm. |

## 2. Game Concept

The core of "Guardians of the Dafeng" is a narrative-driven detective RPG that blends the rich world of the source material with engaging investigation mechanics. The player will step into the shoes of Xu Qi'an, a man with a modern mind in an ancient world, and use his unique perspective to bring justice to the Dafeng Dynasty.

### Core Gameplay Loop

The gameplay is structured around a compelling loop of investigation, deduction, and resolution:

1.  **Receive a Case**: The player, as Xu Qi'an, is assigned a case by the Guardians or stumbles upon a mystery through exploration and interaction with the world.
2.  **Investigation**: Players will gather clues by exploring detailed environments, engaging in dialogue with a wide cast of characters, and utilizing special "investigation" skills that draw upon Xu Qi'an's modern knowledge.
3.  **Deduction**: A key feature of the game is the "Deduction Board," a visual interface where players can connect clues, identify contradictions, and form a coherent hypothesis about the case.
4.  **Confrontation**: Once a solid case has been built, the player confronts the suspect(s) and presents their evidence in a dramatic showdown of wits.
5.  **Resolution**: Solving a case leads to rewards, significant story progression, and the unlocking of new, more complex cases.

### Key Features

*   **Dual Identity**: The player character, Xu Qi'an, retains his modern knowledge, which translates into unique skills and dialogue options that set him apart from the other inhabitants of the Dafeng Dynasty.
*   **Deep Investigation System**: A dedicated system for gathering and analyzing clues, featuring a "Deduction Board" and unique skills based on modern forensic science and psychology.
*   **Dynamic Faction System**: The player can gain favor with different factions (Confucians, Taoists, Buddhists, etc.), unlocking special quests, items, and abilities. Choices will have a tangible impact on the player's standing with these groups.
*   **Full Multilingual Support**: The game will be designed from the ground up to support multiple languages, with a system for easily switching between them at any time.
*   **Rich, Branching Narrative**: A faithful adaptation of the "Guardians of the Dafeng" story, with branching dialogues and multiple endings that reflect the player's choices and successes (or failures) as a detective.

## 3. Game Structure

The game's narrative will be divided into a prologue, three main acts, and an epilogue, following Xu Qi'an's journey from a disgraced prisoner to a legendary figure in the Dafeng Dynasty.

*   **Prologue**: Introduces Yang Ling in the modern world and his transportation to the Dafeng Dynasty as Xu Qi'an. He wakes up in prison and must solve the case of the stolen tax money to save his family, serving as a tutorial for the game's core mechanics.
*   **Act 1: The Rookie Guardian**: Xu Qi'an joins the Guardians and solves a series of smaller cases, learning the ropes of the organization and the world. He is introduced to the main cast and the central conflict.
*   **Act 2: The Sangbo Lake Conspiracy**: Xu Qi'an is tasked with investigating the Sangbo Lake explosion. This act will be a major turning point in the story, revealing a larger conspiracy that threatens the stability of the dynasty.
*   **Act 3: The Unseen Hand**: Xu Qi'an realizes he is a pawn in a much larger game and decides to take control of his destiny. He confronts the hidden powers behind the conspiracy, leading to a climactic series of investigations and battles.
*   **Epilogue**: The resolution of the main conflict and a glimpse into the future of the Dafeng Dynasty, with the state of the world reflecting the player's choices throughout the game.

## 4. Game Mechanics

### Investigation System

*   **Clue Gathering**: Clues can be found by examining objects in the environment, engaging in detailed conversations with NPCs, and using special skills to uncover hidden information.
*   **"Modern Knowledge" Skills**:
    *   **"Logic"**: Allows the player to see logical inconsistencies in NPC testimonies, opening up new lines of questioning.
    *   **"Science"**: Allows the player to analyze evidence from a scientific perspective (e.g., identifying poisons, analyzing materials), providing concrete proof.
    *   **"Psychology"**: Allows the player to read an NPC's body language and detect lies, giving the player an edge in interrogations.
*   **Deduction Board**: A visual interface where the player can connect clues to form a coherent theory. This will be a central puzzle element of the game.

### Combat System

*   A classic turn-based combat system, familiar to fans of the RPG genre, but with unique twists based on the game's world.
*   **Skills**: A mix of martial arts and supernatural abilities based on the different factions and the player's choices.
*   **Party Members**: The player can recruit various characters from the series to join their party, each with unique skills and abilities that can be used in both combat and investigation.

### Faction System

*   The player's actions and choices will affect their reputation with different factions.
*   High reputation with a faction will unlock special quests, items, and abilities, as well as unique story content.
*   Low reputation can lead to negative consequences, such as being attacked by faction members or being locked out of certain quests.

## 5. Database Design (RPG Maker MZ)

| Category | Details |
|---|---|
| **Actors** | Xu Qi'an (protagonist with "Modern Knowledge" skills), Princess Lin'an (support/healing), Wei Yuan (powerful NPC), and other recruitable characters from the series. |
| **Classes** | Guardian (balanced), Scholar (support/investigation), Martial Artist (physical combat), Sorcerer (magical abilities). |
| **Skills** | Investigation skills ("Logic", "Science", "Psychology") and combat skills based on factions and classes. |
| **Items** | Clues (key items for investigation), consumables (potions, food), and equipment (weapons, armor, accessories). |
| **Enemies** | Corrupt officials, bandits, rival faction members, and supernatural creatures (demons, etc.). |
| **States** | Standard RPG states (Poison, Silence, etc.) and special investigation-related states (e.g., "Suspicious", "Lying"). |

## 6. Multilingual Support

A dedicated plugin will be used to manage all translations. All game text, from dialogues and item descriptions to UI elements, will be stored in external JSON files, allowing for easy localization and language switching.

## 7. Art and Sound

*   **Art Style**: A visually appealing mix of traditional Chinese art and anime-style character sprites to create a unique and memorable aesthetic.
*   **Music**: A full original soundtrack that combines traditional Chinese musical instruments and melodies with modern orchestral arrangements to create an epic and immersive soundscape.
*   **Sound Effects**: High-quality sound effects for combat, investigation, and UI interactions to provide satisfying feedback to the player.

