const dateOfBirth = document.querySelector("#date-of-birth")
const luckyNumber = document.querySelector("#lucky-number")
const checkButton = document.querySelector("#check-button")
const outputBox = document.querySelector("#output-box")

checkButton.addEventListener('click', clickHandler)

function clickHandler() {
    var dob = dateOfBirth.value
    const sum = calculateSum(dob)
    console.log(sum)
}

function calculateSum (dob) {
    dob = dob.replaceAll("-","")
    let sum = 0
    for(i=0;i<dob.length;i++){
        sum = sum + Number(dob.charAt(i))
    }
    return sum
}