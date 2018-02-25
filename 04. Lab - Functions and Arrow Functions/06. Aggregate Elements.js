function aggregateElements(input) {
    let sum = 0;
    let sumOfTheInverseElements = 0;
    let concatenatedStr = "";
    for (var i = 0; i < input.length; i++) {
        sum += Number(input[i]);
        sumOfTheInverseElements += (1 / Number(input[i]));
        concatenatedStr += input[i];
    }
    console.log(sum);
    console.log(sumOfTheInverseElements);
    console.log(concatenatedStr);
}