const inputs = document.querySelectorAll(".triangle-input");
const calculateBtn = document.querySelector(".submit-btn");
const output = document.querySelector("#output");

function calculateSUmOfSquares(a, b) {
    const sumofSquares = a * a + b * b;
    return sumofSquares;
}

function calculateHypotenuse() {
    if (Number(inputs[0].value) > 0 && Number(inputs[1].value > 0)) {
        //console.log(Number(inputs[0].value), Number(inputs[1].value))
        const sumofSquares = calculateSUmOfSquares(Number(inputs[0].value), Number(inputs[1].value));
        const lengthHypotenuse = Math.sqrt(sumofSquares);
        output.innerText = `Hypotenuse for given sides is ${lengthHypotenuse.toFixed(2)} cm`;
    }
    else if (Number(inputs[0].value) <= 0 || Number(inputs[1].value <= 0)) {
        output.innerText = "Sides of triangle cannot be negative or zero."
    }
    else {
        output.innerText = "Please enter both the fields"
    }

}



calculateBtn.addEventListener("click", calculateHypotenuse);