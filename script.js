const questions = [
    {
    question: "What environments do you work best in?",
    options: ["Quiet and minimal", "Busy and loud", "Outdoors in nature", "Cozy and personal"]
    },
    {
    question: "When starting a new project, what’s the first thing you do?",
    options: ["Make a plan", "Sketch or brainstorm", "Start immediately", "Seek inspiration"]
    },
    {
    question: "What time of day are you most inspired?",
    options: ["Morning", "Afternoon", "Evening", "Late night"]
    },
    {
    question: "Do you work best under structure or spontaneity?",
    options: ["Structure", "Spontaneity"]
    },
    {
    question: "Do you enjoy working alone or with others?",
    options: ["Alone", "With others", "A mix of both"]
    }
    ];
    
    const results = {
    Explorer: {
    description: "You thrive in new and unpredictable environments. You're inspired by change and experimentation.",
    tips: "Try changing your scenery or learning a new skill."
    },
    Dreamer: {
    description: "You are imaginative and intuitive. You find beauty in the abstract and the undefined.",
    tips: "Journal, doodle, and follow your feelings."
    },
    Strategist: {
    description: "You love systems and structure. Planning helps you channel your creativity.",
    tips: "Use timelines, to-do lists, and goal boards."
    }
    };
    
    let currentQuestion = 0;
    let scores = { Explorer: 0, Dreamer: 0, Strategist: 0 };
    
    const quizContainer = document.getElementById("quiz-container");
    
    function showQuestion() {
    const q = questions[currentQuestion];
    quizContainer.innerHTML = `
    <div class="question">
    <h2>Q${currentQuestion + 1}: ${q.question}</h2>
    ${q.options.map((opt, i) => `<button onclick="selectAnswer(${i})">${opt}</button>`).join("<br><br>")}
    </div>
    `;
    }
    
    function selectAnswer(index) {
    if (index === 0) scores.Strategist++;
    if (index === 1) scores.Dreamer++;
    if (index === 2) scores.Explorer++;
    if (index === 3) scores.Dreamer++;
    
    currentQuestion++;
    if (currentQuestion < questions.length) {
    showQuestion();
    } else {
    showResult();
    }
    }
    
    function showResult() {
    const topType = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    const res = results[topType];
    
    quizContainer.innerHTML = `
    <div class="result">
    <h2>You are: ${topType}</h2>
    <p>${res.description}</p>
    <p><strong>Tip:</strong> ${res.tips}</p>
    <button onclick="restartQuiz()">Retake Quiz</button>
    </div>
    `;
    }
    
    function restartQuiz() {
    currentQuestion = 0;
    scores = { Explorer: 0, Dreamer: 0, Strategist: 0 };
    showQuestion();
    }
    
    showQuestion();
    