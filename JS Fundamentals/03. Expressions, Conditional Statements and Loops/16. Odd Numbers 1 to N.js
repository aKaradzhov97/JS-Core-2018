function oddNumbersFromOneToN(n) {
    n = Number(n);
    for (var i = 1; i <= n; i++) {
        if (i % 2 === 1) {
            console.log(i)
        }
    }
}