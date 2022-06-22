const dateOfBirth = document.querySelector("#date-of-birth")
const luckyNumber = document.querySelector("#lucky-number")
const checkButton = document.querySelector("#check-button")
const outputBox = document.querySelector("#output-box")

checkButton.addEventListener('click', clickHandler)

function clickHandler() {
    // log values to check if everything works
    console.log(dateOfBirth.value, luckyNumber.value)
}