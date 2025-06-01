import gameData from './shavuot_game_data.js';

class ShavuotGame {
    constructor() {
        this.score = 0;
        this.currentQuestionIndex = 0;
        this.currentLevel = 1;
        this.questions = [...gameData.questions];
        this.playerName = '';
        this.achievements = {
            firstWin: false,
            perfectScore: false,
            speedRunner: false,
            powerUser: false,
            master: false
        };
        this.powerUps = {
            fiftyFifty: true,
            hint: true,
            skip: true
        };
        this.initializeElements();
        this.addEventListeners();
        this.loadHighScore();
    }

    initializeElements() {
        // מסכים
        this.startScreen = document.getElementById('start-screen');
        this.gameScreen = document.getElementById('game-screen');
        this.endScreen = document.getElementById('end-screen');
        this.instructionsScreen = document.getElementById('instructions-screen');
        this.leaderboardScreen = document.getElementById('leaderboard-screen');

        // כפתורים
        this.startButton = document.getElementById('start-game');
        this.instructionsButton = document.getElementById('show-instructions');
        this.playAgainButton = document.getElementById('play-again');
        this.backToStartButton = document.getElementById('back-to-start');
        this.leaderboardButton = document.getElementById('show-leaderboard');
        this.backToStartFromLeaderboardButton = document.getElementById('back-to-start-from-leaderboard');
        this.shareScoreButton = document.getElementById('share-score');

        // אלמנטים במסך המשחק
        this.playerNameInput = document.getElementById('player-name');
        this.playerNameDisplay = document.getElementById('player-name-display');
        this.questionText = document.getElementById('question-text');
        this.optionsContainer = document.getElementById('options-container');
        this.scoreElement = document.getElementById('score');
        this.feedbackText = document.getElementById('feedback-text');
        this.finalScoreElement = document.getElementById('final-score');
        this.highScoreElement = document.getElementById('high-score');
        this.levelNumber = document.getElementById('level-number');
        this.progressFill = document.getElementById('progress-fill');
        this.achievementsList = document.getElementById('achievements-list');
        this.leaderboardList = document.getElementById('leaderboard-list');

        // כפתורי עזרה
        this.fiftyFiftyButton = document.getElementById('fifty-fifty');
        this.hintButton = document.getElementById('hint');
        this.skipButton = document.getElementById('skip');
    }

    addEventListeners() {
        this.startButton.addEventListener('click', () => this.startGame());
        this.instructionsButton.addEventListener('click', () => this.showInstructions());
        this.playAgainButton.addEventListener('click', () => this.resetGame());
        this.backToStartButton.addEventListener('click', () => this.showStartScreen());
        this.leaderboardButton.addEventListener('click', () => this.showLeaderboard());
        this.backToStartFromLeaderboardButton.addEventListener('click', () => this.showStartScreen());
        this.shareScoreButton.addEventListener('click', () => this.shareScore());

        // כפתורי עזרה
        this.fiftyFiftyButton.addEventListener('click', () => this.useFiftyFifty());
        this.hintButton.addEventListener('click', () => this.useHint());
        this.skipButton.addEventListener('click', () => this.skipQuestion());
    }

    startGame() {
        this.playerName = this.playerNameInput.value.trim() || 'שחקן';
        this.playerNameDisplay.textContent = this.playerName;
        this.score = 0;
        this.currentQuestionIndex = 0;
        this.currentLevel = 1;
        this.questions = this.shuffleArray([...gameData.questions]);
        this.updateScore();
        this.updateLevel();
        this.resetPowerUps();
        this.showGameScreen();
        this.showQuestion();
    }

    showInstructions() {
        this.hideAllScreens();
        this.instructionsScreen.classList.remove('hidden');
    }

    showStartScreen() {
        this.hideAllScreens();
        this.startScreen.classList.remove('hidden');
    }

    showGameScreen() {
        this.hideAllScreens();
        this.gameScreen.classList.remove('hidden');
    }

    showEndScreen() {
        this.hideAllScreens();
        this.endScreen.classList.remove('hidden');
        this.finalScoreElement.textContent = this.score;
        this.highScoreElement.textContent = this.getHighScore();
        this.updateAchievements();
        this.showAchievements();
        this.saveHighScore();
        this.updateLeaderboard();
    }

    showLeaderboard() {
        this.hideAllScreens();
        this.leaderboardScreen.classList.remove('hidden');
        this.updateLeaderboard();
    }

    hideAllScreens() {
        this.startScreen.classList.add('hidden');
        this.gameScreen.classList.add('hidden');
        this.endScreen.classList.add('hidden');
        this.instructionsScreen.classList.add('hidden');
        this.leaderboardScreen.classList.add('hidden');
    }

    showQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        this.questionText.textContent = question.question;
        this.optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => this.handleAnswer(index));
            this.optionsContainer.appendChild(optionElement);
        });

        this.updateProgress();
    }

    handleAnswer(selectedIndex) {
        const question = this.questions[this.currentQuestionIndex];
        const options = this.optionsContainer.children;
        
        // מניעת לחיצות נוספות
        for (let option of options) {
            option.style.pointerEvents = 'none';
        }

        if (selectedIndex === question.correctAnswer) {
            options[selectedIndex].classList.add('correct');
            this.score += this.currentLevel === 5 ? 20 : 10; // כפול נקודות בשלב 5
            this.feedbackText.textContent = 'כל הכבוד! תשובה נכונה!';
            this.feedbackText.style.color = '#2ecc71';
        } else {
            options[selectedIndex].classList.add('wrong');
            options[question.correctAnswer].classList.add('correct');
            this.feedbackText.textContent = 'לא נכון. התשובה הנכונה היא: ' + question.options[question.correctAnswer];
            this.feedbackText.style.color = '#e74c3c';
        }

        this.updateScore();

        setTimeout(() => {
            this.currentQuestionIndex++;
            if (this.currentQuestionIndex < this.questions.length) {
                if (this.currentQuestionIndex % 6 === 0) {
                    this.currentLevel++;
                    this.updateLevel();
                    this.resetPowerUps();
                }
                this.showQuestion();
                this.feedbackText.textContent = '';
            } else {
                this.showEndScreen();
            }
        }, 2000);
    }

    updateScore() {
        this.scoreElement.textContent = this.score;
    }

    updateLevel() {
        this.levelNumber.textContent = this.currentLevel;
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex % 6) / 6) * 100;
        this.progressFill.style.width = `${progress}%`;
    }

    resetGame() {
        this.startGame();
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    useFiftyFifty() {
        if (!this.powerUps.fiftyFifty) return;

        const question = this.questions[this.currentQuestionIndex];
        const options = this.optionsContainer.children;
        let wrongOptions = [];

        for (let i = 0; i < options.length; i++) {
            if (i !== question.correctAnswer) {
                wrongOptions.push(i);
            }
        }

        // מערבב את התשובות השגויות
        wrongOptions = this.shuffleArray(wrongOptions);

        // מסתיר 2 תשובות שגויות
        for (let i = 0; i < 2; i++) {
            options[wrongOptions[i]].style.visibility = 'hidden';
        }

        this.powerUps.fiftyFifty = false;
        this.fiftyFiftyButton.disabled = true;
    }

    useHint() {
        if (!this.powerUps.hint) return;

        const question = this.questions[this.currentQuestionIndex];
        const correctAnswer = question.options[question.correctAnswer];
        
        this.feedbackText.textContent = `רמז: התשובה קשורה ל${correctAnswer.split(' ')[0]}...`;
        this.feedbackText.style.color = '#f1c40f';

        this.powerUps.hint = false;
        this.hintButton.disabled = true;
    }

    skipQuestion() {
        if (!this.powerUps.skip) return;

        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < this.questions.length) {
            if (this.currentQuestionIndex % 6 === 0) {
                this.currentLevel++;
                this.updateLevel();
                this.resetPowerUps();
            }
            this.showQuestion();
        } else {
            this.showEndScreen();
        }

        this.powerUps.skip = false;
        this.skipButton.disabled = true;
    }

    resetPowerUps() {
        this.powerUps = {
            fiftyFifty: true,
            hint: true,
            skip: true
        };
        this.fiftyFiftyButton.disabled = false;
        this.hintButton.disabled = false;
        this.skipButton.disabled = false;
    }

    updateAchievements() {
        // הישג: ניצחון ראשון
        this.achievements.firstWin = true;

        // הישג: ניקוד מושלם
        if (this.score === 300) {
            this.achievements.perfectScore = true;
        }

        // הישג: שימוש בכל כפתורי העזרה
        if (!this.powerUps.fiftyFifty && !this.powerUps.hint && !this.powerUps.skip) {
            this.achievements.powerUser = true;
        }

        // הישג: שיא אישי
        if (this.score > this.getHighScore()) {
            this.achievements.master = true;
        }
    }

    showAchievements() {
        this.achievementsList.innerHTML = '';
        const achievements = [
            { id: 'firstWin', title: 'ניצחון ראשון', description: 'סיימת את המשחק בפעם הראשונה' },
            { id: 'perfectScore', title: 'ניקוד מושלם', description: 'השגת 300 נקודות' },
            { id: 'powerUser', title: 'משתמש מתקדם', description: 'השתמשת בכל כפתורי העזרה' },
            { id: 'master', title: 'מאסטר', description: 'שברת את השיא האישי שלך' }
        ];

        achievements.forEach(achievement => {
            const div = document.createElement('div');
            div.className = `achievement ${this.achievements[achievement.id] ? '' : 'locked'}`;
            div.innerHTML = `
                <h4>${achievement.title}</h4>
                <p>${achievement.description}</p>
            `;
            this.achievementsList.appendChild(div);
        });
    }

    getHighScore() {
        return localStorage.getItem('highScore') || 0;
    }

    saveHighScore() {
        const currentHighScore = this.getHighScore();
        if (this.score > currentHighScore) {
            localStorage.setItem('highScore', this.score);
            localStorage.setItem('highScorePlayer', this.playerName);
        }
    }

    updateLeaderboard() {
        this.leaderboardList.innerHTML = '';
        const leaderboard = JSON.parse(localStorage.getItem('leaderboard') || '[]');
        
        leaderboard.sort((a, b) => b.score - a.score);
        
        leaderboard.slice(0, 10).forEach((entry, index) => {
            const div = document.createElement('div');
            div.className = 'leaderboard-item';
            div.innerHTML = `
                <span>${index + 1}. ${entry.player}</span>
                <span>${entry.score} נקודות</span>
            `;
            this.leaderboardList.appendChild(div);
        });
    }

    shareScore() {
        const text = `השגתי ${this.score} נקודות במשחק שבועות - משפחת גץ כבוד!`;
        if (navigator.share) {
            navigator.share({
                title: 'משחק שבועות',
                text: text
            });
        } else {
            alert(text);
        }
    }

    loadHighScore() {
        // מטענת ניקוד מקודד מסודר
        const highScore = localStorage.getItem('highScore');
        if (highScore) {
            this.highScoreElement.textContent = highScore;
        }
    }
}

// יצירת משחק חדש כשהדף נטען
document.addEventListener('DOMContentLoaded', () => {
    new ShavuotGame();
}); 