function firstAndLastKNumbers(inputNumbers) {
    //Program reads the input as array of numbers.

    //The first number in the array is the number, which
    //indicates the count of elements to take from the start and from the end.
    let countOfElementsToTake = Number(inputNumbers[0]);
    //The next X numbers are the elements of the array to work with.
    let arr = [];
    //Making new array to save those elements.

    for (var i = 1; i < inputNumbers.length; i++) {
        //Pushing (Adding) elements to our new array.
        arr.push(Number(inputNumbers[i]));
    }

    //Printing the first K elements of our array. :)
    console.log(arr.slice(0, countOfElementsToTake).join(" "));
    //Now printing the last K elements of our array. :)
    //We use "-countOfElementsToTake", to start from the end of array.
    console.log(arr.slice(-countOfElementsToTake).join(" "));
}