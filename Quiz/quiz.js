const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const outputAnswer = document.querySelector("#output-answer");

const correctAnswers = ["90°", "right-angled", "equilateral", "isosceles", "true", "28", "3"]

function calculateScore() {
    let score = 0;
    let index = 0;
    let count = 0;
    const formResults = new FormData(quizForm)
    for (let value of formResults.values()) {
        //console.log(index, value)
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
        count++;
    }
    //console.log(score)
    if (count == 7) {
        outputAnswer.innerText = "Your score is " + score + " 🎉";
    }
    else {
        outputAnswer.innerText = "All questions are compulsory😎";
    }

}

submitBtn.addEventListener("click", calculateScore)