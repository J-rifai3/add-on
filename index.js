//DOM elements
const counterButton = document.querySelector("#counter-button");
const counterDisplay = document.querySelector("#counter-display");
const resetButton = document.querySelector("#reset-counter-button");

const timeDisplay = document.querySelector("#time");
const dateDisplay = document.querySelector("#date");

//Parameters
let count = 0;

counterButton.addEventListener("click", () => {
    count++;
    counterDisplay.textContent = `Count: ${count}`
})

resetButton.addEventListener("click", () => {
    count = 0;
    counterDisplay.textContent = `Count: ${count}`
})

setInterval(() => {
    let time = new Date().toLocaleTimeString();
    let date = new Date().toLocaleDateString();
    timeDisplay.textContent = `Time: ${time}`
    dateDisplay.textContent = `Date: ${date}`
}, 1000);
