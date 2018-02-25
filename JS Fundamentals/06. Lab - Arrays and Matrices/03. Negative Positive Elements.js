function negativePositiveNumbers(inputNumbers) {
    let resultArr = [];
    for (var i = 0; i < inputNumbers.length; i++) {
        let currentNumber = Number(inputNumbers[i]);
        if (currentNumber >= 0) {
            resultArr.push(currentNumber);
        } else {
            resultArr.unshift(currentNumber);
        }
    }
    for (let number of resultArr) {
        console.log(number);
    }
}