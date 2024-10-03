function calc(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Error: Invalid operator!";
    }
}


console.log(calc(5, 2, '+')); // 7
console.log(calc(5, 2, '-')); // 3
console.log(calc(5, 2, '*')); // 10
console.log(calc(5, 2, '/')); // 2.5
console.log(calc(5, 2, '&')); // Error: Invalid operator!
