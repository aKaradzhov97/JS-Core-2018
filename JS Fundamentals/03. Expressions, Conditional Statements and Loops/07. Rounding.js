function rounding(input) {
    let number = Number(input[0]);
    let digitsAfterPoint = Number(input[1]);

    let factor = Math.pow(10, digitsAfterPoint);
    console.log(Math.round(number * factor) / factor);
}