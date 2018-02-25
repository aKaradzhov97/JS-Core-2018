function concatenateReversed(input) {
    let str = "";
    for (var i = 0; i < input.length; i++) {
        str += input[i];
    }
    str = str.split('').reverse().join('');
    console.log(str);
}