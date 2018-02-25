function captureTheNumbers(arr) {
    const regex = /[0-9]+/g;
    //Solution on one line:
    console.log(arr.join(" ").match(regex).join(" "));
    //Extended solution.
    //let text = arr.join(" ");
    //let numbers = text.match(regex);
    //console.log(numbers.join(" "));
}