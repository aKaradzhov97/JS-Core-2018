function smallestTwoNumbers(inputNumbers) {
    inputNumbers.sort(function (a, b) {
        return a - b;
    })
    console.log(inputNumbers[0] + " " + inputNumbers[1]);
}