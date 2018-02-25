function countOccurences(str, text) {
    let counter = 0;
    let index = text.indexOf(str);

    while (index !== -1) {
        index++;
        counter++;
        index = text.indexOf(str, index);
    }
    console.log(counter);
}