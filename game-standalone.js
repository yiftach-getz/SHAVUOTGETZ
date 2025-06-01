// נתוני המשחק - שבועות
const gameData = {
    questions: [
        { question: "מהו השם הנוסף של חג השבועות?", options: ["חג הקציר", "חג הביכורים", "חג מתן תורה", "כל התשובות נכונות"], correctAnswer: 3 },
        { question: "כמה ימים אחרי פסח חל חג השבועות?", options: ["7 ימים", "49 ימים", "50 ימים", "30 ימים"], correctAnswer: 1 },
        { question: "מה אוכלים בחג השבועות?", options: ["מצות", "סופגניות", "מוצרי חלב", "תפוח בדבש"], correctAnswer: 2 },
        { question: "מהו המנהג העיקרי בליל שבועות?", options: ["אכילת מצות", "תיקון ליל שבועות", "הדלקת נרות", "נטילת לולב"], correctAnswer: 1 },
        { question: "מה מסמלים שני הלחם שהיו מובאים לבית המקדש בחג השבועות?", options: ["שני לוחות הברית", "שני המזבחות", "שני הבתים", "שני השבטים"], correctAnswer: 0 },
        { question: "מהו השם העברי של מגילת רות?", options: ["מגילת הקציר", "מגילת הביכורים", "מגילת השבועות", "מגילת החיטה"], correctAnswer: 0 },
        { question: "מי כתב את מגילת רות?", options: ["משה", "שמואל", "דוד המלך", "לא ידוע"], correctAnswer: 1 },
        { question: "מהו המנהג של קישוט בתי הכנסת בחג השבועות?", options: ["עם פרחים", "עם פירות", "עם עלים", "עם ענפים"], correctAnswer: 0 },
        { question: "מהו השם העברי של שבועות?", options: ["חג הקציר", "חג הביכורים", "חג מתן תורה", "כל התשובות נכונות"], correctAnswer: 3 },
        { question: "מהו המנהג של אכילת מאכלי חלב בחג השבועות?", options: ["לזכר מתן תורה", "לזכר הביכורים", "לזכר הקציר", "לזכר המקדש"], correctAnswer: 0 },
        { question: "מהו השם של המגילה שקוראים בחג השבועות?", options: ["מגילת אסתר", "מגילת רות", "מגילת איכה", "מגילת קהלת"], correctAnswer: 1 },
        { question: "מהו המנהג של תיקון ליל שבועות?", options: ["לימוד תורה כל הלילה", "תפילה כל הלילה", "שירה כל הלילה", "ריקודים כל הלילה"], correctAnswer: 0 },
        { question: "מהו השם של המנהג לאכול מאכלי חלב בחג השבועות?", options: ["סעודת חלב", "סעודת שבועות", "סעודת תורה", "סעודת ביכורים"], correctAnswer: 0 },
        { question: "מהו השם של המנהג לקרוא את מגילת רות בחג השבועות?", options: ["קריאת רות", "קריאת שבועות", "קריאת תורה", "קריאת ביכורים"], correctAnswer: 0 },
        { question: "מהו השם של המנהג לקשט את בתי הכנסת בחג השבועות?", options: ["קישוט שבועות", "קישוט תורה", "קישוט ביכורים", "קישוט קציר"], correctAnswer: 0 },
        { question: "מהו השם של המנהג להביא ביכורים לבית המקדש בחג השבועות?", options: ["הבאת ביכורים", "הבאת שבועות", "הבאת תורה", "הבאת קציר"], correctAnswer: 0 },
        { question: "מהו השם של המנהג לאכול מאכלי חלב בחג השבועות?", options: ["סעודת חלב", "סעודת שבועות", "סעודת תורה", "סעודת ביכורים"], correctAnswer: 0 },
        { question: "מהו השם של המנהג לקרוא את מגילת רות בחג השבועות?", options: ["קריאת רות", "קריאת שבועות", "קריאת תורה", "קריאת ביכורים"], correctAnswer: 0 },
        { question: "מהו השם של המנהג לקשט את בתי הכנסת בחג השבועות?", options: ["קישוט שבועות", "קישוט תורה", "קישוט ביכורים", "קישוט קציר"], correctAnswer: 0 },
        { question: "מהו השם של המנהג להביא ביכורים לבית המקדש בחג השבועות?", options: ["הבאת ביכורים", "הבאת שבועות", "הבאת תורה", "הבאת קציר"], correctAnswer: 0 },
        { question: "מהו השם של המנהג לאכול מאכלי חלב בחג השבועות?", options: ["סעודת חלב", "סעודת שבועות", "סעודת תורה", "סעודת ביכורים"], correctAnswer: 0 },
        { question: "מהו השם של המנהג לקרוא את מגילת רות בחג השבועות?", options: ["קריאת רות", "קריאת שבועות", "קריאת תורה", "קריאת ביכורים"], correctAnswer: 0 }
    ],
    terms: [
        "שבועות", "חג הביכורים", "חג הקציר", "חג מתן תורה", "מגילת רות", "ביכורים", "שני הלחם", "תיקון ליל שבועות", "סעודת חלב", "קישוט בית הכנסת", "קציר", "חיטה", "שעורה", "מתן תורה", "הר סיני", "לוחות הברית", "עשרת הדברות", "משה רבנו", "בית המקדש", "כהן גדול"
    ],
    locations: [
        "בית לחם", "מואב", "שדה בועז", "גורן", "שער העיר", "בית נעמי", "שדה החיטים", "בית המלך", "שדה השעורים", "בית אלימלך"
    ]
};

// כל הלוגיקה של המשחק (כמו ב-class, אבל ב-global scope)
(function() {
    let score = 0;
    let currentQuestionIndex = 0;
    let currentLevel = 1;
    let questions = [];
    let playerName = '';
    let achievements = {
        firstWin: false,
        perfectScore: false,
        powerUser: false,
        master: false
    };
    let powerUps = {
        fiftyFifty: true,
        hint: true,
        skip: true
    };

    // אלמנטים
    let startScreen, gameScreen, endScreen, instructionsScreen, leaderboardScreen;
    let startButton, instructionsButton, playAgainButton, backToStartButton, leaderboardButton, backToStartFromLeaderboardButton, shareScoreButton;
    let playerNameInput, playerNameDisplay, questionText, optionsContainer, scoreElement, feedbackText, finalScoreElement, highScoreElement, levelNumber, progressFill, achievementsList, leaderboardList;
    let fiftyFiftyButton, hintButton, skipButton;

    document.addEventListener('DOMContentLoaded', function() {
        // קישור אלמנטים
        startScreen = document.getElementById('start-screen');
        gameScreen = document.getElementById('game-screen');
        endScreen = document.getElementById('end-screen');
        instructionsScreen = document.getElementById('instructions-screen');
        leaderboardScreen = document.getElementById('leaderboard-screen');

        startButton = document.getElementById('start-game');
        instructionsButton = document.getElementById('show-instructions');
        playAgainButton = document.getElementById('play-again');
        backToStartButton = document.getElementById('back-to-start');
        leaderboardButton = document.getElementById('show-leaderboard');
        backToStartFromLeaderboardButton = document.getElementById('back-to-start-from-leaderboard');
        shareScoreButton = document.getElementById('share-score');

        playerNameInput = document.getElementById('player-name');
        playerNameDisplay = document.getElementById('player-name-display');
        questionText = document.getElementById('question-text');
        optionsContainer = document.getElementById('options-container');
        scoreElement = document.getElementById('score');
        feedbackText = document.getElementById('feedback-text');
        finalScoreElement = document.getElementById('final-score');
        highScoreElement = document.getElementById('high-score');
        levelNumber = document.getElementById('level-number');
        progressFill = document.getElementById('progress-fill');
        achievementsList = document.getElementById('achievements-list');
        leaderboardList = document.getElementById('leaderboard-list');

        fiftyFiftyButton = document.getElementById('fifty-fifty');
        hintButton = document.getElementById('hint');
        skipButton = document.getElementById('skip');

        // אירועים
        startButton.addEventListener('click', startGame);
        instructionsButton.addEventListener('click', showInstructions);
        playAgainButton.addEventListener('click', resetGame);
        backToStartButton.addEventListener('click', showStartScreen);
        leaderboardButton.addEventListener('click', showLeaderboard);
        backToStartFromLeaderboardButton.addEventListener('click', showStartScreen);
        shareScoreButton.addEventListener('click', shareScore);
        fiftyFiftyButton.addEventListener('click', useFiftyFifty);
        hintButton.addEventListener('click', useHint);
        skipButton.addEventListener('click', skipQuestion);

        loadHighScore();
    });

    function startGame() {
        playerName = playerNameInput.value.trim() || 'שחקן';
        playerNameDisplay.textContent = playerName;
        score = 0;
        currentQuestionIndex = 0;
        currentLevel = 1;
        questions = shuffleArray(gameData.questions.slice());
        updateScore();
        updateLevel();
        resetPowerUps();
        showGameScreen();
        showQuestion();
    }

    function showInstructions() {
        hideAllScreens();
        instructionsScreen.classList.remove('hidden');
    }

    function showStartScreen() {
        hideAllScreens();
        startScreen.classList.remove('hidden');
    }

    function showGameScreen() {
        hideAllScreens();
        gameScreen.classList.remove('hidden');
    }

    function showEndScreen() {
        hideAllScreens();
        endScreen.classList.remove('hidden');
        finalScoreElement.textContent = score;
        highScoreElement.textContent = getHighScore();
        updateAchievements();
        showAchievements();
        saveHighScore();
        updateLeaderboard();
    }

    function showLeaderboard() {
        hideAllScreens();
        leaderboardScreen.classList.remove('hidden');
        updateLeaderboard();
    }

    function hideAllScreens() {
        startScreen.classList.add('hidden');
        gameScreen.classList.add('hidden');
        endScreen.classList.add('hidden');
        instructionsScreen.classList.add('hidden');
        leaderboardScreen.classList.add('hidden');
    }

    function showQuestion() {
        const question = questions[currentQuestionIndex];
        questionText.textContent = question.question;
        optionsContainer.innerHTML = '';
        question.options.forEach(function(option, index) {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option;
            optionElement.addEventListener('click', function() { handleAnswer(index); });
            optionsContainer.appendChild(optionElement);
        });
        updateProgress();
    }

    function handleAnswer(selectedIndex) {
        const question = questions[currentQuestionIndex];
        const options = optionsContainer.children;
        for (let option of options) {
            option.style.pointerEvents = 'none';
        }
        if (selectedIndex === question.correctAnswer) {
            options[selectedIndex].classList.add('correct');
            score += currentLevel === 5 ? 20 : 10;
            feedbackText.textContent = 'כל הכבוד! תשובה נכונה!';
            feedbackText.style.color = '#2ecc71';
        } else {
            options[selectedIndex].classList.add('wrong');
            options[question.correctAnswer].classList.add('correct');
            feedbackText.textContent = 'לא נכון. התשובה הנכונה היא: ' + question.options[question.correctAnswer];
            feedbackText.style.color = '#e74c3c';
        }
        updateScore();
        setTimeout(function() {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                if (currentQuestionIndex % 6 === 0) {
                    currentLevel++;
                    updateLevel();
                    resetPowerUps();
                }
                showQuestion();
                feedbackText.textContent = '';
            } else {
                showEndScreen();
            }
        }, 2000);
    }

    function updateScore() {
        scoreElement.textContent = score;
    }
    function updateLevel() {
        levelNumber.textContent = currentLevel;
    }
    function updateProgress() {
        const progress = ((currentQuestionIndex % 6) / 6) * 100;
        progressFill.style.width = progress + '%';
    }
    function resetGame() {
        startGame();
    }
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    function useFiftyFifty() {
        if (!powerUps.fiftyFifty) return;
        const question = questions[currentQuestionIndex];
        const options = optionsContainer.children;
        let wrongOptions = [];
        for (let i = 0; i < options.length; i++) {
            if (i !== question.correctAnswer) wrongOptions.push(i);
        }
        wrongOptions = shuffleArray(wrongOptions);
        for (let i = 0; i < 2; i++) {
            options[wrongOptions[i]].style.visibility = 'hidden';
        }
        powerUps.fiftyFifty = false;
        fiftyFiftyButton.disabled = true;
    }
    function useHint() {
        if (!powerUps.hint) return;
        const question = questions[currentQuestionIndex];
        const correctAnswer = question.options[question.correctAnswer];
        feedbackText.textContent = `רמז: התשובה קשורה ל${correctAnswer.split(' ')[0]}...`;
        feedbackText.style.color = '#f1c40f';
        powerUps.hint = false;
        hintButton.disabled = true;
    }
    function skipQuestion() {
        if (!powerUps.skip) return;
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            if (currentQuestionIndex % 6 === 0) {
                currentLevel++;
                updateLevel();
                resetPowerUps();
            }
            showQuestion();
        } else {
            showEndScreen();
        }
        powerUps.skip = false;
        skipButton.disabled = true;
    }
    function resetPowerUps() {
        powerUps = { fiftyFifty: true, hint: true, skip: true };
        fiftyFiftyButton.disabled = false;
        hintButton.disabled = false;
        skipButton.disabled = false;
    }
    function updateAchievements() {
        achievements.firstWin = true;
        if (score === 300) achievements.perfectScore = true;
        if (!powerUps.fiftyFifty && !powerUps.hint && !powerUps.skip) achievements.powerUser = true;
        if (score > getHighScore()) achievements.master = true;
    }
    function showAchievements() {
        achievementsList.innerHTML = '';
        const achs = [
            { id: 'firstWin', title: 'ניצחון ראשון', description: 'סיימת את המשחק בפעם הראשונה' },
            { id: 'perfectScore', title: 'ניקוד מושלם', description: 'השגת 300 נקודות' },
            { id: 'powerUser', title: 'משתמש מתקדם', description: 'השתמשת בכל כפתורי העזרה' },
            { id: 'master', title: 'מאסטר', description: 'שברת את השיא האישי שלך' }
        ];
        achs.forEach(function(achievement) {
            const div = document.createElement('div');
            div.className = 'achievement ' + (achievements[achievement.id] ? '' : 'locked');
            div.innerHTML = `<h4>${achievement.title}</h4><p>${achievement.description}</p>`;
            achievementsList.appendChild(div);
        });
    }
    function getHighScore() {
        return localStorage.getItem('highScore') || 0;
    }
    function saveHighScore() {
        const currentHighScore = getHighScore();
        if (score > currentHighScore) {
            localStorage.setItem('highScore', score);
            localStorage.setItem('highScorePlayer', playerName);
        }
    }
    function updateLeaderboard() {
        leaderboardList.innerHTML = '';
        let leaderboard = JSON.parse(localStorage.getItem('leaderboard') || '[]');
        leaderboard.push({ player: playerName, score: score });
        leaderboard = leaderboard.sort(function(a, b) { return b.score - a.score; }).slice(0, 10);
        localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
        leaderboard.forEach(function(entry, index) {
            const div = document.createElement('div');
            div.className = 'leaderboard-item';
            div.innerHTML = `<span>${index + 1}. ${entry.player}</span><span>${entry.score} נקודות</span>`;
            leaderboardList.appendChild(div);
        });
    }
    function shareScore() {
        const text = `השגתי ${score} נקודות במשחק שבועות - משפחת גץ כבוד!`;
        if (navigator.share) {
            navigator.share({ title: 'משחק שבועות', text: text });
        } else {
            alert(text);
        }
    }
    function loadHighScore() {
        const highScore = localStorage.getItem('highScore');
        if (highScore && highScoreElement) highScoreElement.textContent = highScore;
    }
})(); 