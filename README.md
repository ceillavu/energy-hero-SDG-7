# Energy Hero - SDG 7 ⚡🌍

[![Java](https://img.shields.io/badge/Java-17%2B-ED8B00?logo=openjdk&logoColor=white)](https://www.oracle.com/java/)
[![GUI](https://img.shields.io/badge/GUI-Java%20Swing-blue)](https://docs.oracle.com/javase/tutorial/uiswing/)
[![SDG](https://img.shields.io/badge/UN%20SDG-Goal%207%3A%20Clean%20Energy-E5243B)](https://sdgs.un.org/goals/goal7)

**Energy Hero** is an interactive, smartphone-styled educational application designed to promote **United Nations Sustainable Development Goal 7 (Affordable and Clean Energy)**. 

Through interactive learning slides, timed quiz challenges, badge rewards, and a local leaderboard, players learn about energy types, renewable solutions, energy conservation, and sustainable futures.

---

## 🎮 Play Online (Web Edition)

> 🌐 **Play directly in your browser on phone or PC (No installation needed!):**  
> **`https://<YOUR-USERNAME>.github.io/<YOUR-REPO>/`**  
> *(Hosted via GitHub Pages — simply open `index.html` or visit your live GitHub Pages link!)*

---

## 📱 Features

### 1. 📚 Interactive Learning Module
* **10 Comprehensive Topics:** Covers Energy Fundamentals, Types of Energy, Renewable vs. Non-Renewable Energy, Environmental Impacts, Conservation Tips, and Smart Grids.
* **Side-by-side Comparisons:** Interactive comparison table highlighting advantages and trade-offs.
* **Visual & Audio Accompaniment:** Illustrated slides with dedicated background music and audio controls.

### 2. 🎯 Quiz Challenge
* **Three Difficulty Levels:** Easy, Medium, and Hard.
* **20 Questions per Difficulty:** Balanced mixture of 4-option Multiple Choice (MCQ) and True/False questions.
* **Dynamic Experience:** Questions are shuffled automatically each round.
* **Timer & Immediate Feedback:** 20-second countdown per question with instant correct/wrong visual indicators and sound effects.

### 3. 🏅 Gamification & Badge Rewards
* **Dynamic Star Rating:** Earn from 1 to 5 stars based on your score percentage.
* **Tiered Badges:**
  * 🥇 **Gold Energy Hero** (80% - 100%)
  * 🥈 **Silver Saver** (60% - 79%)
  * 🥉 **Bronze Learner** (40% - 59%)
  * 🔰 **Rookie Explorer** (< 40%)
* **Level Progression:** Advance from *Level 1 - Rookie* up to *Level 5 - SDG Champion*.

### 4. 🏆 Leaderboard & Score Tracking
* Records player names, raw scores, chosen difficulty, and completion timestamps.
* Persistent storage saved locally via `leaderboard.dat`.
* Built-in tools to sort, refresh, edit, or clear records.

### 5. 🎵 Sound & Music Management
* Individual background tracks for Dashboard, Lobby, Quiz, Learning, and Leaderboard.
* Responsive sound effects for correct answers, wrong answers, and quiz completion.
* Global one-click Mute / Unmute toggle.

---

## 📂 Project Structure

```text
Energy-Hero-SDG-7/
├── .vscode/                 # VS Code Java project configuration
├── bin/                     # Compiled .class bytecode
├── images/                  # UI backgrounds, badges, and illustrations
├── music/                   # Background tracks (.wav) and sound effects
├── src/                     # Java source code
│   ├── Main.java            # Application entry point
│   ├── MainGUI.java         # Main mobile-style dashboard interface
│   ├── LearningModule.java  # Educational lesson navigation & viewer
│   ├── QuizLobby.java       # Player name entry & difficulty selector
│   ├── QuizEngine.java      # Timer, question bank, and scoring logic
│   ├── Question.java        # Base Question class
│   ├── MCQQuestion.java     # Multiple-choice question subclass
│   ├── TrueFalseQuestion.java # True/False question subclass
│   ├── BadgeMenu.java       # Achievements and badge records viewer
│   ├── Leaderboard.java     # Leaderboard data storage & persistence
│   ├── LeaderboardWindow.java # Leaderboard viewer & editor GUI
│   ├── SoundManager.java    # Centralized audio player and SFX controller
│   └── ...                  # Additional gamification & helper classes
├── EnergyHero.jar           # Pre-built standalone runnable JAR
├── .gitignore               # Git ignore rules
└── README.md                # Project documentation
```

---

## 🚀 How to Run & Play

### Prerequisites
* **Java Development Kit (JDK) 17 or higher** installed on your system.
* Verify your Java installation by opening a terminal and running:
  ```bash
  java -version
  ```

---

### Option A: Run the Pre-Built Executable JAR (Easiest)

1. Make sure you are in the `Energy-Hero-SDG-7` directory (where `images/` and `music/` are located).
2. Double-click **`EnergyHero.jar`**, or open a terminal and run:
   ```bash
   java -jar EnergyHero.jar
   ```

---

### Option B: Run from Source Code (VS Code or Terminal)

1. **In Visual Studio Code:**
   * Open the `Energy-Hero-SDG-7` folder in VS Code.
   * Ensure the **Extension Pack for Java** is installed.
   * Open `src/Main.java` and click **Run** (or press <kbd>F5</kbd>).

2. **From the Command Line:**
   ```bash
   # 1. Compile source files into bin/
   javac -d bin src/*.java

   # 2. Run the application
   java -cp bin Main
   ```

---

## 🛠️ How to Rebuild the JAR File

If you make modifications to the Java source code, rebuild the runnable JAR with:

```bash
# 1. Compile
javac -d bin src/*.java

# 2. Package into EnergyHero.jar
jar cvfe EnergyHero.jar Main -C bin .
```

---

## 👥 Project Architecture & Roles

* **GUI & System Integration**  
  * Smartphone-style GUI design (360×780), layout responsiveness, module integration, custom exception handling, and audio synchronization.
* **Content & Learning Modules**  
  * Dashboard architecture, interactive 10-page Learning Module, and educational content.
* **Quiz Engine & Audio Controller**  
  * Dynamic quiz flow, Question/MCQ/TrueFalse polymorphic model, sound effects, and background music.
* **Gamification & Data Persistence**  
  * Leaderboard data file persistence, tiered badge unlocking system, star ratings, and result analytics.

---

## 📜 License & Acknowledgements
Developed as an educational interactive initiative focused on **UN Sustainable Development Goal 7 (SDG 7: Affordable and Clean Energy)**.
Content references international SDG 7 guidelines for educational purposes.
