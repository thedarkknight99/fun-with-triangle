const inputs = document.querySelectorAll(".triangle-input");
const calculateBtn = document.querySelector(".submit-btn");
const output = document.querySelector("#output");


function calculateArea() {
    if (Number(inputs[0].value) > 0 && Number(inputs[1].value > 0)) {
        const area = 0.5 * Number(inputs[0].value) * Number(inputs[1].value)
        output.innerText = `Area of triangle is ${area.toFixed(2)} cm²`;
    }
    else if (Number(inputs[0].value) <= 0 || Number(inputs[1].value <= 0)) {
        output.innerText = "Sides of triangle cannot be negative."
    }
    else {
        output.innerText = "Please enter both the fields"
    }

}


calculateBtn.addEventListener("click", calculateArea);