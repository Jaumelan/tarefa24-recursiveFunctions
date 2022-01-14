function validateInteger(num) {
    if (num > 0 && typeof num === "number" && Number.isInteger(num)) {
        
        return true;
    } else {
        console.log("Ingresse um número inteiro positivo");
        return false;
    }
    return false;
}

function factorialCalculation(num) {
    let result = 1;
    if (num > 1) {
        
        return result = num * factorialCalculation(num - 1);
    }
    return result;
}

function factorial(inputNumber) {
    if (validateInteger(inputNumber)) {
        return factorialCalculation(inputNumber)
    } 
}
