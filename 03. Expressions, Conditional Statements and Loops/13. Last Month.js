function lastMonth(input) {
    let date = new Date(Number(input[2]), Number(input[1] - 1), Number(0));
    console.log(date.getDate());
}