// Energy Hero - Web Edition
// Preserves all Java Swing features, questions, badges, and sound effects

const QUESTIONS = {
  easy: [
    { text: "What is the main focus of SDG 7?", opts: ["Clean Water", "Affordable and Clean Energy", "Climate Action", "Quality Education"], ans: 1 },
    { text: "Energy is the ability to:", opts: ["Produce water", "Create matter", "Do work or cause change", "Stop movement"], ans: 2 },
    { text: "Which of the following is a form of energy?", opts: ["Plastic", "Thermal Energy", "Metal", "Glass"], ans: 1 },
    { text: "Which sector depends on energy?", opts: ["Healthcare", "Transportation", "Industry", "All of the above"], ans: 3 },
    { text: "Which is a renewable energy source?", opts: ["Coal", "Oil", "Solar", "Natural Gas"], ans: 2 },
    { text: "Renewable energy comes from sources that are:", opts: ["Limited", "Continuously replenished", "Imported", "Artificial"], ans: 1 },
    { text: "Which renewable source uses sunlight?", opts: ["Biomass", "Wind", "Solar", "Hydro"], ans: 2 },
    { text: "Which is a non-renewable energy source?", opts: ["Wind", "Hydro", "Coal", "Solar"], ans: 2 },
    { text: "Energy conservation helps to:", opts: ["Waste electricity", "Increase pollution", "Reduce electricity costs", "Increase fuel use"], ans: 2 },
    { text: "Which appliance is usually more energy-efficient?", opts: ["LED Light", "Incandescent Bulb", "Oil Lamp", "Candle"], ans: 0 },
    { text: "Energy can be created and destroyed.", opts: ["True", "False"], ans: 1 },
    { text: "Energy is essential for daily life.", opts: ["True", "False"], ans: 0 },
    { text: "Electrical energy is a form of energy.", opts: ["True", "False"], ans: 0 },
    { text: "Renewable energy has lower environmental impact.", opts: ["True", "False"], ans: 0 },
    { text: "Wind energy is renewable.", opts: ["True", "False"], ans: 0 },
    { text: "Coal is a renewable energy source.", opts: ["True", "False"], ans: 1 },
    { text: "Turning off unused devices conserves energy.", opts: ["True", "False"], ans: 0 },
    { text: "Solar energy comes from sunlight.", opts: ["True", "False"], ans: 0 },
    { text: "Energy powers communication systems.", opts: ["True", "False"], ans: 0 },
    { text: "Renewable energy sources will never be replenished.", opts: ["True", "False"], ans: 1 }
  ],
  medium: [
    { text: "Energy sources are generally classified into:", opts: ["Liquid and Solid", "Renewable and Non-renewable", "Cheap and Expensive", "Large and Small"], ans: 1 },
    { text: "Which form of energy is stored due to position?", opts: ["Kinetic", "Thermal", "Potential", "Electrical"], ans: 2 },
    { text: "Which energy source relies on moving air?", opts: ["Solar", "Wind", "Biomass", "Coal"], ans: 1 },
    { text: "Why is renewable energy considered sustainable?", opts: ["It is imported", "It is naturally replenished", "It is unlimited electricity", "It is always cheap"], ans: 1 },
    { text: "Which is NOT a renewable energy source?", opts: ["Hydro", "Solar", "Natural Gas", "Wind"], ans: 2 },
    { text: "Fossil fuels contribute to:", opts: ["Climate Change", "Air Pollution", "Greenhouse Gas Emissions", "All of the above"], ans: 3 },
    { text: "Which technology improves energy distribution and management?", opts: ["Smart Grid", "Calculator", "Generator Only", "Battery Charger"], ans: 0 },
    { text: "What is a disadvantage of renewable energy?", opts: ["Pollution", "Limited Resources", "Weather Dependence", "Toxic Waste"], ans: 2 },
    { text: "Which action supports energy conservation?", opts: ["Leaving lights on", "Using efficient appliances", "Wasting electricity", "Running unused devices"], ans: 1 },
    { text: "Biomass is classified as:", opts: ["Renewable Energy", "Non-renewable Energy", "Fossil Fuel", "Nuclear Fuel"], ans: 0 },
    { text: "Renewable energy sources include biomass.", opts: ["True", "False"], ans: 0 },
    { text: "Fossil fuels produce greenhouse gases.", opts: ["True", "False"], ans: 0 },
    { text: "Natural gas is renewable.", opts: ["True", "False"], ans: 1 },
    { text: "Energy conservation reduces energy waste.", opts: ["True", "False"], ans: 0 },
    { text: "Smart grids are part of future energy development.", opts: ["True", "False"], ans: 0 },
    { text: "Renewable energy always works regardless of weather.", opts: ["True", "False"], ans: 1 },
    { text: "Hydropower uses water to generate energy.", opts: ["True", "False"], ans: 0 },
    { text: "Energy supports education and healthcare.", opts: ["True", "False"], ans: 0 },
    { text: "Non-renewable resources can be replaced quickly.", opts: ["True", "False"], ans: 1 },
    { text: "Using LED lights can improve energy efficiency.", opts: ["True", "False"], ans: 0 }
  ],
  hard: [
    { text: "Which statement best describes the law of energy conservation?", opts: ["Energy can be created", "Energy can be destroyed", "Energy can only be converted between forms", "Energy disappears after use"], ans: 2 },
    { text: "Why are non-renewable resources considered unsustainable?", opts: ["They are weather dependent", "They take millions of years to form", "They are always expensive", "They cannot produce electricity"], ans: 1 },
    { text: "Which combination consists entirely of renewable energy sources?", opts: ["Coal, Solar, Wind", "Oil, Hydro, Biomass", "Solar, Wind, Hydro", "Natural Gas, Wind, Solar"], ans: 2 },
    { text: "Which factor makes non-renewable energy widely used?", opts: ["Low pollution", "Unlimited supply", "High output and reliability", "No environmental impact"], ans: 2 },
    { text: "Which energy source contributes least to greenhouse gas emissions during operation?", opts: ["Coal", "Oil", "Natural Gas", "Wind"], ans: 3 },
    { text: "Which technology is important for storing renewable energy?", opts: ["Batteries", "Candles", "Transformers Only", "Diesel Engines"], ans: 0 },
    { text: "What is one major goal of the global energy transition?", opts: ["Increase pollution", "Reduce renewable energy", "Reduce environmental impact", "Increase fossil fuel use"], ans: 2 },
    { text: "Which sector benefits directly from reliable energy access?", opts: ["Healthcare", "Industry", "Communication", "All of the above"], ans: 3 },
    { text: "Which energy source is dependent on weather conditions?", opts: ["Coal", "Solar", "Natural Gas", "Uranium"], ans: 1 },
    { text: "Which is NOT a benefit of energy conservation?", opts: ["Reduced costs", "Reduced pollution", "Increased waste", "Resource preservation"], ans: 2 },
    { text: "Renewable energy helps reduce greenhouse gas emissions.", opts: ["True", "False"], ans: 0 },
    { text: "A stable energy supply contributes to economic growth.", opts: ["True", "False"], ans: 0 },
    { text: "Fossil fuels have no effect on climate change.", opts: ["True", "False"], ans: 1 },
    { text: "Energy storage technologies can improve renewable energy reliability.", opts: ["True", "False"], ans: 0 },
    { text: "Renewable energy sources generally have lower environmental impacts than fossil fuels.", opts: ["True", "False"], ans: 0 },
    { text: "Coal, oil, and natural gas are all examples of non-renewable energy.", opts: ["True", "False"], ans: 0 },
    { text: "The future of energy focuses on sustainable systems.", opts: ["True", "False"], ans: 0 },
    { text: "Renewable energy sources are always cheaper to install initially than fossil fuel systems.", opts: ["True", "False"], ans: 1 },
    { text: "Energy conservation can help achieve environmental sustainability.", opts: ["True", "False"], ans: 0 },
    { text: "Long-term energy security can be supported by increasing renewable energy adoption.", opts: ["True", "False"], ans: 0 }
  ]
};

const LEARNING_PAGES = [
  {
    title: "Energy Overview",
    image: "images/sdg7.jpeg",
    content: "Energy Overview\n\nIt is linked to Sustainable Development Goal 7 (SDG 7), which focuses on ensuring access to affordable, reliable, sustainable, and modern energy for all.\n\nEnergy powers homes, transport, industries, healthcare, and communication, making it vital for sustainable development."
  },
  {
    title: "What is Energy?",
    image: "images/energy.jpeg",
    content: "Energy is the ability to do work or cause change. It cannot be created or destroyed, only converted from one form to another.\n\nIt exists in many forms such as electrical, thermal, chemical, kinetic, and potential energy.\n\nEnergy is used in everyday life, from powering electronic devices and vehicles to supporting natural and biological processes."
  },
  {
    title: "Importance of Energy",
    image: "images/why.jpeg",
    content: "Energy is essential for supporting daily life and modern development.\n\nIt powers key sectors such as transportation, healthcare, education, communication, and industry.\n\nA stable energy supply improves quality of life and drives economic growth and technological progress."
  },
  {
    title: "Energy Sources",
    image: "images/types.jpeg",
    content: "Energy is obtained from various natural resources that are used to generate power.\n\nThey are commonly classified into renewable and non-renewable sources based on their availability and sustainability.\n\nUnderstanding energy sources helps in choosing more efficient and sustainable energy solutions."
  },
  {
    title: "Renewable Energy",
    image: "images/renewable.jpeg",
    content: "Renewable energy comes from natural sources that are continuously replenished.\n\nIt is considered a clean and sustainable energy option with lower environmental impact.\n\nCommon sources include sunlight, wind, water, and biomass."
  },
  {
    title: "Non-Renewable Energy",
    image: "images/nonrenewable.jpeg",
    content: "Non-renewable energy comes from natural resources that are limited and cannot be replaced quickly.\n\nThese energy sources take millions of years to form and will eventually be depleted.\n\nThey are widely used due to their high energy output and reliability."
  },
  {
    title: "Renewable vs Non-Renewable",
    image: "images/comparison.jpeg",
    isCompare: true
  },
  {
    title: "Environmental Impact",
    image: "images/environment.jpeg",
    content: "Energy production affects the environment in different ways.\n\nFossil fuels release greenhouse gases that contribute to climate change and air pollution.\n\nRenewable energy sources such as solar, wind, and hydro produce cleaner energy with lower environmental impact.\n\nUsing energy efficiently and adopting renewable energy helps protect the environment."
  },
  {
    title: "Energy Conservation",
    image: "images/saveenergy.jpeg",
    content: "Energy conservation means using energy efficiently and reducing unnecessary waste.\n\nIt can be achieved by using energy-efficient appliances, turning off unused devices, and adopting sustainable habits.\n\nEffective energy conservation helps reduce electricity costs and protects the environment."
  },
  {
    title: "Future of Energy",
    image: "images/future.jpeg",
    content: "The future of energy focuses on developing clean, efficient, and sustainable energy systems.\n\nAdvancements in technology such as solar power, wind energy, smart grids, and energy storage are improving energy reliability and accessibility.\n\nA global shift toward renewable energy is essential to reduce environmental impact and ensure long-term energy security."
  }
];

// Audio Management
class AudioManager {
  constructor() {
    this.currentTrack = null;
    this.muted = localStorage.getItem('energy_hero_muted') === 'true';
    this.bgmAudio = new Audio();
    this.bgmAudio.loop = true;
    this.sfxAudio = new Audio();
  }

  playBGM(path) {
    if (this.currentTrack === path && !this.bgmAudio.paused) return;
    this.currentTrack = path;
    this.bgmAudio.src = path;
    this.bgmAudio.muted = this.muted;
    this.bgmAudio.play().catch(() => {
      // Audio autoplay restrictions handled on first click
    });
  }

  stopBGM() {
    this.bgmAudio.pause();
    this.bgmAudio.currentTime = 0;
    this.currentTrack = null;
  }

  playSFX(path) {
    if (this.muted) return;
    const sfx = new Audio(path);
    sfx.play().catch(() => {});
  }

  toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem('energy_hero_muted', this.muted);
    this.bgmAudio.muted = this.muted;
    this.updateMuteButtons();
  }

  updateMuteButtons() {
    document.querySelectorAll('.btn-mute').forEach(btn => {
      btn.textContent = this.muted ? "🔇 Unmute Audio" : "🔊 Mute Audio";
    });
  }
}

const audio = new AudioManager();

// Global App State
const state = {
  playerName: '',
  difficulty: 'easy',
  learningIndex: 0,
  quizQuestions: [],
  currentIndex: 0,
  score: 0,
  answeredCorrectly: [],
  timerInterval: null,
  timeLeft: 20
};

// UI Navigation
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active');
  }

  // Audio routing based on screen
  if (screenId === 'screen-dashboard') {
    audio.playBGM('music/maindashboard.wav');
  } else if (screenId === 'screen-learning') {
    audio.playBGM('music/backgroundsound.wav');
  } else if (screenId === 'screen-lobby') {
    audio.playBGM('music/quizLobby.wav');
  } else if (screenId === 'screen-quiz') {
    audio.playBGM('music/inQuiz.wav');
  } else if (screenId === 'screen-badges') {
    audio.playBGM('music/badge.wav');
  } else if (screenId === 'screen-result') {
    audio.stopBGM();
    audio.playSFX('music/endQuiz.wav');
  }
}

// ---------------- LEARNING MODULE ----------------
function renderLearningPage(index) {
  state.learningIndex = Math.max(0, Math.min(index, LEARNING_PAGES.length - 1));
  const page = LEARNING_PAGES[state.learningIndex];

  document.getElementById('learning-page-title').textContent = page.title;
  document.getElementById('learning-img').src = page.image;

  const contentBox = document.getElementById('learning-text');
  const compareBox = document.getElementById('learning-compare');

  if (page.isCompare) {
    contentBox.style.display = 'none';
    compareBox.style.display = 'grid';
  } else {
    contentBox.style.display = 'block';
    compareBox.style.display = 'none';
    contentBox.textContent = page.content;
  }

  document.getElementById('learning-prev-btn').disabled = state.learningIndex === 0;
  document.getElementById('learning-next-btn').disabled = state.learningIndex === LEARNING_PAGES.length - 1;
}

// ---------------- QUIZ SYSTEM ----------------
function startQuiz() {
  const nameInput = document.getElementById('player-name-input').value.trim();
  if (!nameInput) {
    alert("Please enter your name first!");
    return;
  }

  state.playerName = nameInput;
  // Clone and shuffle 20 questions
  state.quizQuestions = [...QUESTIONS[state.difficulty]].sort(() => Math.random() - 0.5);
  state.currentIndex = 0;
  state.score = 0;
  state.answeredCorrectly = new Array(state.quizQuestions.length).fill(false);

  showScreen('screen-quiz');
  renderQuestion(0);
}

function renderQuestion(index) {
  clearInterval(state.timerInterval);
  state.currentIndex = index;

  const q = state.quizQuestions[index];
  const total = state.quizQuestions.length;

  document.getElementById('quiz-progress').textContent = `Q ${index + 1} / ${total}`;
  document.getElementById('quiz-progress-bar').style.width = `${((index + 1) / total) * 100}%`;
  document.getElementById('quiz-question-text').textContent = q.text;

  const feedback = document.getElementById('quiz-feedback');
  feedback.textContent = '';
  feedback.className = 'feedback-badge';

  const optionsContainer = document.getElementById('quiz-options');
  optionsContainer.innerHTML = '';
  optionsContainer.className = q.opts.length === 2 ? 'options-grid tf-mode' : 'options-grid';

  q.opts.forEach((optText, i) => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.textContent = optText;
    btn.onclick = () => selectAnswer(i, btn);
    optionsContainer.appendChild(btn);
  });

  document.getElementById('quiz-next-btn').disabled = false;
  document.getElementById('quiz-prev-btn').disabled = index === 0;

  // Start 20s countdown
  state.timeLeft = 20;
  const timerLabel = document.getElementById('quiz-timer');
  timerLabel.textContent = `Time: ${state.timeLeft}`;

  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    timerLabel.textContent = `Time: ${state.timeLeft}`;
    if (state.timeLeft <= 0) {
      clearInterval(state.timerInterval);
      nextQuestion();
    }
  }, 1000);
}

function selectAnswer(chosenIndex, selectedBtn) {
  clearInterval(state.timerInterval);

  const q = state.quizQuestions[state.currentIndex];
  const isCorrect = chosenIndex === q.ans;
  const feedback = document.getElementById('quiz-feedback');

  // Disable all options during feedback
  document.querySelectorAll('.opt-btn').forEach(btn => btn.disabled = true);
  document.getElementById('quiz-next-btn').disabled = true;

  selectedBtn.classList.add('selected');

  if (isCorrect) {
    feedback.textContent = "[CORRECT]";
    feedback.className = "feedback-badge correct";
    audio.playSFX('music/correct.wav');

    if (!state.answeredCorrectly[state.currentIndex]) {
      state.score++;
      state.answeredCorrectly[state.currentIndex] = true;
    }
  } else {
    feedback.textContent = "[WRONG]";
    feedback.className = "feedback-badge wrong";
    audio.playSFX('music/wrong.wav');

    if (state.answeredCorrectly[state.currentIndex]) {
      state.score--;
      state.answeredCorrectly[state.currentIndex] = false;
    }
  }

  setTimeout(() => {
    nextQuestion();
  }, 800);
}

function nextQuestion() {
  if (state.currentIndex + 1 < state.quizQuestions.length) {
    renderQuestion(state.currentIndex + 1);
  } else {
    showResults();
  }
}

function prevQuestion() {
  if (state.currentIndex > 0) {
    renderQuestion(state.currentIndex - 1);
  }
}

// ---------------- RESULTS & GAMIFICATION ----------------
function showResults() {
  clearInterval(state.timerInterval);
  const total = state.quizQuestions.length;
  const percent = Math.round((state.score * 100) / total);

  // Gamification formulas identical to Java classes
  let badge, starFile, starCount, level, titleMsg, detailedMsg, quoteMsg, borderColor;

  if (percent >= 80) {
    titleMsg = "Outstanding!";
    badge = "Gold Energy Hero";
    starFile = "images/GoldStar.png";
    starCount = 5;
    level = "Level 5 - SDG Champion";
    detailedMsg = "Congratulations! You have demonstrated excellent knowledge of SDG 7 and sustainable energy concepts. Keep up the great work and continue being an Energy Hero!";
    quoteMsg = "You powered up the future with clean energy knowledge!";
    borderColor = "#daa520";
  } else if (percent >= 60) {
    titleMsg = "That's good!";
    badge = "Silver Saver";
    starFile = "images/SilverStar.png";
    starCount = 4;
    level = "Level 4 - Eco Warrior";
    detailedMsg = "You have a good understanding of SDG 7. Keep learning about clean and affordable energy to reach the next level!";
    quoteMsg = "Good progress! Your energy knowledge is growing.";
    borderColor = "#a0a0a0";
  } else if (percent >= 40) {
    titleMsg = "Good try!";
    badge = "Bronze Learner";
    starFile = "images/BronzeStar.png";
    starCount = 3;
    level = "Level 3 - Green Learner";
    detailedMsg = "You understand some energy concepts, but there is still room for improvement. Review the learning module and try again.";
    quoteMsg = "Keep charging your knowledge and try again.";
    borderColor = "#b87333";
  } else if (percent >= 20) {
    titleMsg = "You can do better!";
    badge = "Rookie Explorer";
    starFile = "images/BronzeStar.png";
    starCount = 2;
    level = "Level 2 - Beginner";
    detailedMsg = "You can improve by revisiting the SDG 7 learning materials. Every attempt brings you closer to becoming an Energy Hero.";
    quoteMsg = "Every Energy Hero starts with one small step.";
    borderColor = "#e67e22";
  } else {
    titleMsg = "Don't give up!";
    badge = "Rookie Explorer";
    starFile = "images/BronzeStar.png";
    starCount = 1;
    level = "Level 1 - Rookie";
    detailedMsg = "Do not give up. Learning takes time. Review the sustainable energy notes and try the quiz again.";
    quoteMsg = "Every Energy Hero starts with one small step.";
    borderColor = "#e74c3c";
  }

  // Populate UI
  document.getElementById('result-title').textContent = titleMsg;
  document.getElementById('result-score').textContent = `Final Score: ${state.score} / ${total} (${percent}%)`;
  document.getElementById('result-badge').textContent = `Badge: ${badge}`;
  document.getElementById('result-badge').style.color = borderColor;
  document.getElementById('result-level').textContent = `Level: ${level}`;
  document.getElementById('result-motivation').textContent = detailedMsg;
  document.getElementById('result-quote').textContent = quoteMsg;
  document.getElementById('result-card').style.borderColor = borderColor;

  const starsContainer = document.getElementById('result-stars');
  starsContainer.innerHTML = '';
  for (let i = 0; i < starCount; i++) {
    const starImg = document.createElement('img');
    starImg.src = starFile;
    starImg.className = 'star-icon';
    starsContainer.appendChild(starImg);
  }

  // Save to Leaderboard
  saveLeaderboardEntry(state.playerName, state.score, state.difficulty, percent, badge);

  showScreen('screen-result');
}

// ---------------- LEADERBOARD & PERSISTENCE ----------------
function getLeaderboard() {
  try {
    return JSON.parse(localStorage.getItem('energy_hero_leaderboard') || '[]');
  } catch (e) {
    return [];
  }
}

function saveLeaderboardEntry(name, score, difficulty, percent, badge) {
  const entries = getLeaderboard();
  const time = new Date().toLocaleString();
  entries.push({ name, score, difficulty, percent, badge, time });
  entries.sort((a, b) => b.score - a.score);
  localStorage.setItem('energy_hero_leaderboard', JSON.stringify(entries));
}

function renderLeaderboard() {
  const entries = getLeaderboard();
  const recordsContainer = document.getElementById('badges-records-list');
  const tableBody = document.getElementById('leaderboard-table-body');

  recordsContainer.innerHTML = '';
  tableBody.innerHTML = '';

  if (entries.length === 0) {
    recordsContainer.innerHTML = '<p style="text-align:center; color:#555; margin-top:40px;">No player records yet.<br>Play a quiz first to earn badges!</p>';
    tableBody.innerHTML = '<tr><td colspan="5" style="text-align:center; color:#666;">No entries yet.</td></tr>';
    return;
  }

  // Render Badge Cards
  entries.forEach(e => {
    const card = document.createElement('div');
    let borderClass = 'record-card-rookie';
    let badgeColor = '#333';
    let starFile = "images/BronzeStar.png";
    let starCount = 1;
    let quote = "Don't give up!";

    if (e.percent >= 80) {
      borderClass = 'record-card-gold';
      badgeColor = '#daa520';
      starFile = 'images/GoldStar.png';
      starCount = 5;
      quote = "Outstanding!";
    } else if (e.percent >= 60) {
      borderClass = 'record-card-silver';
      badgeColor = '#888888';
      starFile = 'images/SilverStar.png';
      starCount = 4;
      quote = "That's good!";
    } else if (e.percent >= 40) {
      borderClass = 'record-card-bronze';
      badgeColor = '#b87333';
      starFile = 'images/BronzeStar.png';
      starCount = 3;
      quote = "Good try!";
    } else if (e.percent >= 20) {
      borderClass = 'record-card-rookie';
      badgeColor = '#e67e22';
      starFile = 'images/BronzeStar.png';
      starCount = 2;
      quote = "You can do better!";
    }

    let starsHtml = '';
    for (let i = 0; i < starCount; i++) {
      starsHtml += `<img src="${starFile}" style="width:20px; height:20px; object-fit:contain; margin-right:4px;" alt="star">`;
    }

    card.className = `record-card ${borderClass}`;
    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span style="font-weight:700; font-size:14px; color:#222;">Player: ${e.name}</span>
        <span style="font-size:11px; font-weight:700; background:#eee; padding:2px 8px; border-radius:6px; color:#444;">${e.difficulty.toUpperCase()}</span>
      </div>
      <div style="font-size:12px; color:#555; margin-top:3px;">Score: ${e.score} (${e.percent}%)</div>
      <div style="font-size:13px; font-weight:700; margin:4px 0; color:${badgeColor};">Badge: ${e.badge}</div>
      <div style="display:flex; align-items:center; margin:6px 0;">${starsHtml}</div>
      <div style="font-size:11px; font-style:italic; color:#444;">"${quote}"</div>
      <div style="font-size:10px; color:#888; margin-top:4px;">Completed: ${e.time}</div>
    `;
    recordsContainer.appendChild(card);
  });

  // Render Table
  entries.forEach((e, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${e.name}</td>
      <td>${e.score}</td>
      <td>${e.difficulty}</td>
      <td>${e.time.split(',')[0]}</td>
    `;
    tableBody.appendChild(row);
  });
}

function clearLeaderboard() {
  if (confirm("Are you sure you want to clear all leaderboard records?")) {
    localStorage.removeItem('energy_hero_leaderboard');
    renderLeaderboard();
  }
}

// ---------------- INITIALIZATION ----------------
window.addEventListener('DOMContentLoaded', () => {
  audio.updateMuteButtons();

  // Difficulty selection
  document.querySelectorAll('.diff-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      state.difficulty = btn.dataset.diff;
    };
  });

  // Mute buttons
  document.querySelectorAll('.btn-mute').forEach(btn => {
    btn.onclick = () => audio.toggleMute();
  });

  // Tabs in Badge/Leaderboard view
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const isBadges = btn.dataset.tab === 'badges';
      document.getElementById('badges-records-list').style.display = isBadges ? 'flex' : 'none';
      document.getElementById('leaderboard-table-container').style.display = isBadges ? 'none' : 'block';
    };
  });

  // Initial screen
  showScreen('screen-dashboard');
});
