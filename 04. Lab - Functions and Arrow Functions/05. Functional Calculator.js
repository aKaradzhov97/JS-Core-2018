function functionalCalculator(a, b, operator) {
    a = Number(a);
    b = Number(b);
    if (operator === "+") {
        console.log(a + b);
    } else if (operator === "*") {
        console.log(a * b);
    } else if (operator === "/") {
        console.log(a / b);
    } else if (operator === "-") {
        console.log(a - b);
    }
}