function processOddNumbers(inputNumbers) {
    inputNumbers.map(e => Number(e));
    let resultArr = [];

    for (var i = 0; i < inputNumbers.length; i++) {
        let currentNumber = Number(inputNumbers[i]);
        if (i % 2 === 1) {
            currentNumber = doubleNum(currentNumber);
            resultArr.push(currentNumber);
        }
    }

    resultArr.reverse();
    console.log(resultArr.join(" "));

    function doubleNum(number) {
        return number * 2;
    }
}