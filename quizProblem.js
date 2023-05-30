const questions = [{
        question: "Age of Umesh will be 4 times the age of Reena in 6 years from today. If ages of Umesh and Mahesh are 7 times and 6 times the age of Reena respectively, what is present age of Umesh? ",
        answer: [
            { text: "64 years", correct: false },
            { text: "30 years", correct: false },
            { text: "48 years", correct: false },
            { text: "42 years", correct: true }
        ]
    },
    {
        question: " Age of Umesh will be 4 times the age of Reena in 6 years from today. If ages of Umesh and Mahesh are 7 times and 6 times the age of Reena respectively, what is present age of Umesh? ",
        answer: [
            { text: "56 years", correct: false },
            { text: "83 years", correct: true },
            { text: "27 years", correct: false },
            { text: "can not determined", correct: false }
        ]
    },
    {
        question: " The average age of 10 students and their teacher is 15 years. The average age of the first seven students is 15 yr and that of the last three is 11 yr. What is the teacher's age?",
        answer: [
            { text: "33 years", correct: false },
            { text: "30 years", correct: false },
            { text: "27 years", correct: true },
            { text: "24 years", correct: false }
        ]
    },
    {
        question: "  The average age of 10 students and their teacher is 15 years. The average age of the first seven students is 15 yr and that of the last three is 11 yr. What is the teacher's age?",
        answer: [
            { text: " 29 years", correct: true },
            { text: "31 years", correct: false },
            { text: "59 years", correct: false },
            { text: "45 years", correct: false }
        ]
    },
    {
        question: " The present ages of Aman and Nina are 59 and 37 years, respectively. What was the ratio of the ages of Nina and Aman 13 years ago?",
        answer: [
            { text: "3:2", correct: false },
            { text: "46:25", correct: false },
            { text: "12:23", correct: true },
            { text: "8:3", correct: false }
        ]
    },
    {
        question: "Rohan is as much younger than Ajay as he is older than Meena. The sum of ages of Ajay and Meena is 108 years. How old is Rohan?",
        answer: [
            { text: "32 years", correct: false },
            { text: "64 years", correct: false },
            { text: "52 years", correct: true },
            { text: "36 years", correct: false }
        ]
    },
    {
        question: " Average age of a family of 4 members was 19 years, 4 years back. Birth of a new child kept the average age of the family same even today. How old is the child today?",
        answer: [
            { text: "4 years", correct: false },
            { text: "1 years", correct: false },
            { text: "2 years", correct: false },
            { text: "3 years", correct: true }
        ]
    },
    {
        question: "12 years ago, age of P was 3 times the age of Q. After 12 years, ratio of ages of Q to P will be 2:3. What is the present age of P?",
        answer: [
            { text: "54 years", correct: false },
            { text: "36 years", correct: true },
            { text: "24 years", correct: false },
            { text: "144 years", correct: false }
        ]
    },
    {
        question: "The present ages of A and B are 42 and 36 years, respectively. After K years, the ratio of ages of B to A will be 15:17.What is value of K?",
        answer: [
            { text: "9 years", correct: true },
            { text: "12 years", correct: false },
            { text: "5 years", correct: false },
            { text: "3 years", correct: false }
        ]
    },
    {
        question: "The present ages of A and B are 42 and 36 years, respectively. After K years, the ratio of ages of B to A will be 15:17.What is value of K?",
        answer: [
            { text: "50", correct: false },
            { text: "72", correct: false },
            { text: "68", correct: false },
            { text: "65", correct: true }
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