function compoundInterest(input) {
    let P = Number(input[0]);
    let i = Number(input[1]) / 100;
    let n = Number(input[2]);
    let t = Number(input[3]);

    let result = P * Math.pow(1 + (i / (12 / n)),12 / n * t);
    console.log(result.toFixed(2));
}