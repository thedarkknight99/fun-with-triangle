const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const outputAnswer = document.querySelector("#output-answer");

const correctAnswers = ["90°", "right-angled"]

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm)
    for (let value of formResults.values()) {
        // console.log(value)
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    //console.log(score)
    outputAnswer.innerText = "Your score is " + score;
}

submitBtn.addEventListener("click", calculateScore)