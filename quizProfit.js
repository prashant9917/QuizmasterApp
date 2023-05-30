const questions = [{
        question: "A person sold a stove for Rs. 423 and incurred a loss of 6%. At what price would it be sold so as to earn a profit of 8%? ",
        answer: [
            { text: "525", correct: false },
            { text: "500", correct: false },
            { text: "490", correct: false },
            { text: "486", correct: true }
        ]
    },
    {
        question: " A fruit seller buys lemons at 2 for a rupee and sells then at 5 for three rupees. His gain percent is ",
        answer: [
            { text: "10%", correct: false },
            { text: "15%", correct: false },
            { text: "20%", correct: true },
            { text: "25%", correct: false }
        ]
    },
    {
        question: " A sells a car to B at 10% loss. If B sells it for Rs. 54000 and gains 20%, the cost price of the car for A was ",
        answer: [
            { text: "Rs.25000 ", correct: false },
            { text: "Rs.50000 ", correct: true },
            { text: "Rs. 37500", correct: false },
            { text: "Rs. 60000", correct: false }
        ]
    },
    {
        question: " If selling price of 40 articles is equal to cost price of 50 articles, the loss or gain percent is ",
        answer: [
            { text: "25% loss", correct: false },
            { text: "20% loss", correct: false },
            { text: "25% gain", correct: true },
            { text: "20% gain", correct: false }
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
        question: " Two bicycles were sold for Rs. 3990 each, gaining 5% on one and losing 5% on the other. The gain or loss percent on the whole transaction is",
        answer: [
            { text: "Neither gain nor loss", correct: false },
            { text: "2.5% gain", correct: false },
            { text: "2.5% loss", correct: false },
            { text: "0.25% loss", correct: true }
        ]
    },
    {
        question: "  The ratio of cost price and selling price is 4:5. The profit percent is ",
        answer: [
            { text: "10%", correct: false },
            { text: "20%", correct: false },
            { text: "25%", correct: true },
            { text: " 30%", correct: false }
        ]
    },
    {
        question: "If a person sells a ‘sari’ for Rs. 5200, making a profit of 30%, then the cost price of the sari is",
        answer: [
            { text: "Rs. 4420", correct: false },
            { text: "Rs. 4000", correct: true },
            { text: "Rs. 3900", correct: false },
            { text: "Rs. 3800", correct: false }
        ]
    },
    {
        question: "  A shopkeeper earns a profit of 15% after selling a book at 20% discount on the printed price. The ratio of the cost price and printed price of the book is?",
        answer: [
            { text: "20:23", correct: false },
            { text: "23:20", correct: false },
            { text: "16:23", correct: true },
            { text: "23:16", correct: false }
        ]
    },
    {
        question: "Simran bought pet food worth Rs. 56000. She then sold 1/3rd of it incurring a loss of 40%. What profit she must earn on rest of the supplies to nullify this loss?What is the probability of a sure event?",
        answer: [
            { text: "25%", correct: false },
            { text: "20%", correct: true },
            { text: "45%", correct: false },
            { text: "50%", correct: false }
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