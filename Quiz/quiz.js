const questions = [
    {
        question: "Who is the first Governer General of Pakistan",
        answer: [
            { text: "Liaquat Ali Khan", correct: false },
            { text: "Quaid-e-Azam Muhammad Ali Jinnah", correct: true },
            { text: "Iskander Mirza", correct: false },
        ]
    },
    {
        question: "Who is the First Prime Minister Of Pakistan",
        answer: [
            { text: "Liaquat Ali Khan", correct: true },
            { text: "Imran Khan", correct: false },
            { text: "Nawaz Sharif", correct: false }
        ]
    },
    {
        question: "Who is The Founder of Atomic Nuclear Bomb in Pakistan",
        answer: [
            { text: "Abdul Salam", correct: false },
            { text: "Dr Abdul Qadeer Khan", correct: true },
            { text: "Dr. Munir Ahmad Khan", correct: false }
        ]
    }
    
];

// DOM elements
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    let q = questions[currentQuestionIndex];
    // textContent: Iska matlab hai us element ke andar jo plain text hai, usko set karna.
    questionElement.textContent = q.question;
    answerButtons.innerHTML = "";

    q.answer.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option.text;
        // classlist  line se button element me ek CSS class "btn" add ki ja rahi hai, jisse styling apply ho sake.
        btn.classList.add("btn");
        btn.addEventListener("click", () => selectAnswer(option));
        
        // .appendChild(btn):Yeh method kisi HTML element ke andar ek naya child (element) add karta hai.
        answerButtons.appendChild(btn);
    });
}

function selectAnswer(option) {
    if (option.correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    questionElement.textContent = "Quiz Finished!";
    answerButtons.innerHTML = `Your score is ${score} out of ${questions.length}`;
    nextButton.style.display = "none";
}

// Start the quiz
showQuestion();
