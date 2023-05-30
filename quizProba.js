const questions = [{
        question: "What is the probability of an impossible event? ",
        answer: [
            { text: "1", correct: false },
            { text: "0", correct: true },
            { text: "insufficient data", correct: false },
            { text: "Not defined", correct: false }
        ]
    },
    {
        question: " Two unbiased coins are tossed. What is the probability of getting at most one head? ",
        answer: [
            { text: "3/4", correct: true },
            { text: "1/6", correct: false },
            { text: "1/3", correct: false },
            { text: "1/2", correct: false }
        ]
    },
    {
        question: " Who provided the definition for probability? ",
        answer: [
            { text: "Archemedes", correct: false },
            { text: "Eienstin", correct: false },
            { text: "Euclid", correct: false },
            { text: "Simon Laplace", correct: true }
        ]
    },
    {
        question: " Which of the following is a table with all possible values of a random variable and its corresponding probabilities? ",
        answer: [
            { text: " Probability Density Function", correct: false },
            { text: "Probability Mass Function", correct: false },
            { text: "Probability Distribution", correct: true },
            { text: "Cumulative distribution function", correct: false }
        ]
    },
    {
        question: " The probability that at least one of the events Q and R occur is 0.6. If Q and R have probability of occurring together as 0.2, then P(Q) + P(R) is? ",
        answer: [
            { text: "1.2", correct: true },
            { text: "0.8", correct: false },
            { text: "0.4", correct: false },
            { text: " Indeterminate", correct: false }
        ]
    },
    {
        question: " Let there be two newly launched phones A and B. The probability that phone A has good battery life is 0.7 and the probability that phone B has a good battery life is 0.8. Then find the probability that a phone has good battery life.",
        answer: [
            { text: "0.45", correct: false },
            { text: "0.85", correct: false },
            { text: "0.75", correct: true },
            { text: "0.65", correct: false }
        ]
    },
    {
        question: "Which of the following mentioned standard Probability density functions is applicable to discrete Random Variables? ",
        answer: [
            { text: " Rayleigh Distribution", correct: false },
            { text: "Exponential Distribution", correct: false },
            { text: "Poisson Distribution", correct: true },
            { text: " Gaussian Distribution", correct: false }
        ]
    },
    {
        question: "In a discrete probability distribution, the sum of all probabilities is always?",
        answer: [
            { text: "1", correct: true },
            { text: "0", correct: false },
            { text: "undefine", correct: false },
            { text: "infinite", correct: false }
        ]
    },
    {
        question: "In a discrete probability distribution, the sum of all probabilities is always? ",
        answer: [
            { text: "0.3, 0.16", correct: false },
            { text: "0.3, 0.21", correct: true },
            { text: " 0.6, 0.16", correct: false },
            { text: "0.6, 0.24", correct: false }
        ]
    },
    {
        question: "What is the probability of a sure event?",
        answer: [
            { text: "1", correct: false },
            { text: "0", correct: true },
            { text: "1/4", correct: false },
            { text: "1/2", correct: false }
        ]
    },

];
question.style.fontSize = "30px"
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let CurrentQuestionIndex = 0;
let Score = 0;

function startQuiz() {
    CurrentQuestionIndex = 0;
    Score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion() {
    resetState();
    let CurrentQuestion = questions[CurrentQuestionIndex];
    let questionNo = CurrentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + CurrentQuestion.question;

    CurrentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", SelectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function SelectAnswer(e) {
    const selecedBtn = e.target;
    const isCrrect = selecedBtn.dataset.correct === "true";
    if (isCrrect) {
        selecedBtn.classList.add("correct");
        Score++;
    } else {
        selecedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (selecedBtn.dataset.correct === "true") {
            selecedBtn.classList.add("correct");

        }
        button.disabled = "true";
    });
    nextButton.style.display = "block"
}

function showScore() {
    resetState();
    questionElement.innerHTML = `your score ${Score} / ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    nextButton.style.width = "400px";
    nextButton.style.marginTop = "150px"
    nextButton.style.fontSize = "50px"
    questionElement.style.fontSize = "60px";
    questionElement.style.background = "aqua";
}

function handeleNextButton() {
    CurrentQuestionIndex++;
    if (CurrentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (CurrentQuestionIndex < questions.length) {
        handeleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();