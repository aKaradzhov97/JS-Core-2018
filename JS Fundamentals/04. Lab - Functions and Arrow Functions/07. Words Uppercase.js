function wordsUppercase(input) {
    var outString = input.split(/\W+/g); //The /\w+/ pattern specifies to match one or more of any of the following characters: A-Z, a-z, 0-9, and the underscore character    g global more than one

    let arr = [];
    for (let each of outString) {
        each = each.toUpperCase();
        each && arr.push(each)
    }
    outString = arr;  // outString is object
    console.log(outString.join(', '));
}