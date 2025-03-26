const form = document.getElementById("calc");
const calcInput = document.getElementById("input");
const resultMsg = document.getElementById("resmsg");

calcInput.addEventListener("input", function (event) {
    if (calcInput.validity.valid) {
        hideMsg();
    } 
    else {
        showErrorMsg();
    }
});

function hideMsg() {
    resultMsg.textContent = "";
    resultMsg.className = "resDefault"
}

function showErrorMsg() {
    resultMsg.textContent = "Введите число"
    resultMsg.className = "resError"
}

function showResMsg() {
    resultMsg.textContent = (calcInput.value / 30).toFixed(2)
    resultMsg.className = "resDone"
}

form.addEventListener("submit", function (event) {
    if (!calcInput.validity.valid) {
        showErrorMsg();
        event.preventDefault();
    }
    else {
        showResMsg();
        event.preventDefault();
    }
    event.preventDefault();
});