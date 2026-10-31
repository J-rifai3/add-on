//DOM elements
const counterButton = document.querySelector("#counter-button");
const counterDisplay = document.querySelector("#counter-display");
const resetButton = document.querySelector("#reset-counter-button");
const counterThreeButton = document.querySelector('#counter-three-button')
const counterFiveButton = document.querySelector('#counter-five-button')
const counterTenButton = document.querySelector('#counter-ten-button')
const counterHundredButton = document.querySelector('#counter-hundred-button')
const openShopButton = document.querySelector('#open-shop-button')
const buyBlueBackButton = document.querySelector('#buy-blue-back-button')
const itemShopDiv = document.querySelector('#item-shop-div')
const timeDisplay = document.querySelector("#time");
const dateDisplay = document.querySelector("#date");
const body = document.querySelector('body');

//Parameters
let count = 0;

function updateCount() {
    counterDisplay.textContent = `Count: ${count}`;

    if (count >= 2000) {
        counterHundredButton.classList.remove('hidden');
    } else if (count >= 500) {
        counterTenButton.classList.remove('hidden');
    } else if (count >= 100) {
        counterFiveButton.classList.remove('hidden');
    } else if (count >= 20) {
        counterThreeButton.classList.remove('hidden');
    }

}

function alterCount(newCount) {
    count = newCount;
    updateCount();
}

counterButton.addEventListener("click", () => {
    count++;
    updateCount();
})

counterThreeButton.addEventListener("click", () => {
    count += 3;
    updateCount();
})

counterFiveButton.addEventListener("click", () => {
    count += 5;
    updateCount();
})

counterTenButton.addEventListener("click", () => {
    count += 10;
    updateCount();
})

counterHundredButton.addEventListener("click", () => {
    count += 100;
    updateCount();
})

resetButton.addEventListener("click", () => {
    count = 0;
    counterThreeButton.classList.add("hidden");
    counterFiveButton.classList.add("hidden");
    counterTenButton.classList.add("hidden");
    counterHundredButton.classList.add("hidden");
    updateCount();
})


openShopButton.addEventListener("click", () => {
    if (itemShopDiv.classList.contains("hidden")) {
        openShopButton.textContent = "Close Item Shop";
        itemShopDiv.classList.remove("hidden");
    } else {
        openShopButton.textContent = "Open Item Shop";
        itemShopDiv.classList.add("hidden");
    }
})

buyBlueBackButton.addEventListener("click", () => {
    if (count >= 500) {
        if (body.classList.contains('blue-back')) {
            body.classList.remove('blue-back');
            buyBlueBackButton.textContent = 'Blue Background'
        } else {
            body.classList.add('blue-back');
            buyBlueBackButton.textContent = 'Regular Background'
        }

        alterCount(count - 500);
    }
})

setInterval(() => {
    let time = new Date().toLocaleTimeString();
    let date = new Date().toLocaleDateString();
    timeDisplay.textContent = `Time: ${time}`
    dateDisplay.textContent = `Date: ${date}`
}, 1000);


