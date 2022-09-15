const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputAngle = document.querySelector("#output-angle");

function isTriangle() {
    if (Number(inputs[0].value) > 0 && Number(inputs[1].value) > 0 && Number(inputs[2].value) > 0) {
        const sumofAngles = calcSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
        console.log(sumofAngles)
        if (sumofAngles === 180) {
            outputAngle.innerText = "Hurray! Angles form a triangle🎉"
        } else {
            outputAngle.innerText = "Angles given don't form a triangle😢"
        }
    }
    else if (Number(inputs[0].value) <= 0 || Number(inputs[1].value) <= 0 || Number(inputs[2].value) <= 0) {
        outputAngle.innerText = "Angles cannot be negative or zero. Please Enter values again."
    }
    else {
        outputAngle.innerText = "Please enter all the fields"
    }

}
function calcSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

isTriangleBtn.addEventListener("click", isTriangle);