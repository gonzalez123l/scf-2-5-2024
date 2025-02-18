function CalculateTwoNumbers(){
    let number1 = parseInt(document.getElementById("FirstNumber").value);
    let number2 = parseInt(document.getElementById("SecondNumber").value);
    let operationType = document.getElementById("OperationType").value;

    if(operationType == "Add"){
        let result = AddTwoNumbers(num1, num2);
        document.getElementById("Result").innerText = result;

    }
    else if(operationType == "Subtract"){
        let result = SubtractTwoNumbers(num1, num2)
        document.getElementById("Result").innerText = result;
    }
    else if(operationType == "Multiply"){
        let result = MultiplyTwoNumbers(num1, num2);
        document.getElementById("Result").innerText = result;    }
    else{
        let result = DivideTwoNumbers(num1, num2);
        document.getElementById("Result").innerText = result;
    }

 
} 

function AddTwoNumbers(num1, num2){
    return num1 + num2;
}
function SubtractTwoNumbers(num1, num2){
    return num1 - num2;
}
function MultiplyTwoNumbers(num1, num2){
    return num1 * num2;
}
function DivideTwoNumbers(num1, num2){
    return num1 / num2;
}