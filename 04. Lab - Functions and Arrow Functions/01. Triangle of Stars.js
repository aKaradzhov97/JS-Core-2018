function triangleOfStars(n) {
    n = Number(n);
    if (n === 1) {
        console.log("*");
    } else {
        for (var i = 1; i <= n; i++) {
            console.log("*".repeat(i));
        }
        for (var j = n - 1; j > 0; j--) {
            console.log("*".repeat(j));
        }
    }
}