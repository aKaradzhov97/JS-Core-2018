function lastKNumbersSequence(n, k) {
    n = Number(n);
    k = Number(k);

    let arr = [1];

    for (var i = 1; i < n; i++) {
        let newNum = 0;
        for (var j = k; j > 0; j--) {
            if (i - j >= 0) {
                newNum += Number(arr[i - j]);
            }
            arr[i] = newNum;
        }
    }
    console.log(arr.join(" "));
}