function capitalizeWords(inputString) {
    //Avoiding input like "wHo WiLL WriTE tHIs?",
    //by converting all characters in the words first to lowercase.
    inputString = inputString.replace(/\b\w+/g, function (wToLow) { return wToLow.toLowerCase() });

    //Now converting only the first character in the words to uppercase.
    console.log(inputString.replace(/\b\w/g, function (wToUp) { return wToUp.toUpperCase() }));
}