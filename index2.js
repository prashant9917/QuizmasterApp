const questions = [{
        question: "Two pipes A and B can fillXXXXXXXXXXXXXX respectively.Pipe C can empty in 2 hours.If all the three pipes are open in how many hours the cistern will be full ? ",
        answer: [
            { text: "30 hours", correct: true },
            { text: "can't be filled", correct: false },
            { text: "10 hours", correct: false },
            { text: "15 hours", correct: false }
        ]
    },
    {
        question: " A tank can be filled by pipe A in 2 hours and pipe B in 6 hours. At 10 A.M. pipe A was opened. At what time will the tank be filled if pipe B is opened at 11 A.M.? ",
        answer: [
            { text: "12 PM", correct: false },
            { text: "12:45 PM", correct: false },
            { text: "5 PM", correct: false },
            { text: "11:45 PM", correct: true }
        ]
    },
    {
        question: "A tap can empty a tank in one hour. A second tap can empty it in 30 minutes. If both the taps operate simultaneously, how much time is needed to empty the tank? ",
        answer: [
            { text: "45 minutes", correct: false },
            { text: "20 minutes", correct: true },
            { text: "30 minutes", correct: false },
            { text: "40 minutes", correct: false }
        ]
    },
    {
        question: " A water tank can be filled by a tap in 30 minutes and another tap can fill it in 60 minutes. If both the taps are kept open for 5 minutes and then the first tap is closed, how long will it take for the tank to be full ? ",
        answer: [
            { text: "45 minutes", correct: true },
            { text: "20 minutes", correct: false },
            { text: "30 minutes", correct: false },
            { text: "40 minutes", correct: false }
        ]
    },
    {
        question: " A pipe can fill a tank in ‘x’ hours and another pipe can empty it in‘y’ (y > x) hours. If both the pipes are open, in how many hours will the tank be filled ? ",
        answer: [
            { text: "xy/y − x hours", correct: true },
            { text: "(x - y ) hours", correct: false },
            { text: "(y - x ) hours", correct: false },
            { text: "xy/x -y hours", correct: false }
        ]
    },
    {
        question: "Two pipes can fill a cistern separately in 10 hours and 15 hours. They can together fill the cistern in? ",
        answer: [
            { text: "9 hours", correct: false },
            { text: "6 hours", correct: true },
            { text: "7 hours", correct: false },
            { text: "8 hours", correct: false }
        ]
    },
    {
        question: "A cistern is provided with two pipes A and B. A can fill it in 20 minutes and B can empty it in 30 minutes. If A and B be kept open alternately for one minute each, how soon will the cistern be filled ? ",
        answer: [
            { text: "120 minutes", correct: false },
            { text: "121 minutes", correct: false },
            { text: "110 minutes", correct: false },
            { text: "115 minutes", correct: true }
        ]
    },
    {
        question: "Three pipes A, B and C can fill a cistern in 6 hours. After working at it together for 2 hours, C is closed and A and B fill it in 7 hours more. The time taken by C alone to fill the cistern is ",
        answer: [
            { text: "17 hours", correct: false },
            { text: "16 hours", correct: false },
            { text: "14 hours", correct: true },
            { text: "15 hours", correct: false }
        ]
    },
    {
        question: "A tank is fitted with two taps. The first tap can fill the tank completely in 45 minutes and the second tap can empty the full tank in one hour. If both the taps are opened alternately for one minute, then in how many hours the empty tank will be filled completely ? ",
        answer: [
            { text: "5 hours 53 minutes", correct: true },
            { text: "4 hours 48 minutes", correct: false },
            { text: "2 hours 55 minutes", correct: false },
            { text: "3 hours 40 minutes", correct: false }
        ]
    },
    {
        question: "A pipe can fill a cistern in 9 hours. Due to a leak in its bottom, the cistern fills up in 10 hours. If the cistern is full, in how much time will it be emptied by the leak ?",
        answer: [
            { text: "100 hours", correct: false },
            { text: "90 hours", correct: true },
            { text: "70 hours", correct: false },
            { text: "80 hours", correct: false }
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