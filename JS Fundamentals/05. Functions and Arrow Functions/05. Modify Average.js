function modifyAverage(inputNumber) {
    function avgReturn(number) {
        let numAsString = "" + number;
        let sum = 0;
        let digits = numAsString.length + 1;
        for (var i = 0; i < numAsString.length; i++) {
            sum += Number(numAsString[i]);
        }
        return sum / digits;
    }
    while (avgReturn(inputNumber) < 5) {
        inputNumber = inputNumber + "" + 9;
    }
    inputNumber = inputNumber.slice(0, -1);
    console.log(inputNumber);
}