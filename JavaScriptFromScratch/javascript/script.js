var userAge;

//Trggered when the button is clicked.
function getValue() {

    //Gets the valuse of the text box.
    userAge = document.getElementById('UserAge').value;
    generateReturnMessage(userAge)
}

//Generates a return string based on the inputted value into the text box.
function generateReturnMessage(userAge) {
    if (userAge <= 40) {
        returnText("You are only " + userAge + "!", "output")
    } else {
        returnText("You are over 40, but only " + userAge + " years young!", "output")
    }
}

//Send the return value to the html tag with the provided ID.
function returnText(valueToReturn, idTag) {
    document.getElementById(idTag).innerHTML = valueToReturn;
}