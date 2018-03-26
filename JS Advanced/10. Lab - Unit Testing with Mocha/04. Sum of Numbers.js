function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}

module.exports = sum;
//SUBMIT TO JUDGE SOLUTION FROM TEST FOLDER