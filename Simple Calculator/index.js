let op1_element = document.getElementById("operand1")
let op2_element = document.getElementById("operand2")

/*  Variables a and b are initialized inside the functions
 as their values should only be initialized once they 
 are set by the user in the input fields */

function add() {
    let a = parseInt(op1_element.value)
    let b = parseInt(op2_element.value)
    let answer = a + b
    document.getElementById("answer").value = answer
    console.log("Your answer is: ", answer)
}

function subtract() {
    let a = parseInt(op1_element.value)
    let b = parseInt(op2_element.value)
    let answer = a - b
    document.getElementById("answer").value = answer
    console.log("Your answer is: ", answer)
}

function multiply() {
    let a = parseInt(op1_element.value)
    let b = parseInt(op2_element.value)
    let answer = a * b
    document.getElementById("answer").value = answer
    console.log("Your answer is: ", answer)
}

function divide() {
    let a = parseInt(op1_element.value)
    let b = parseInt(op2_element.value)
    let answer = a / b
    document.getElementById("answer").value = answer
    console.log("Your answer is: ", answer)
}