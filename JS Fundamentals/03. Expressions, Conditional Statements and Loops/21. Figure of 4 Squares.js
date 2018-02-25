function figureOfFourSquares(n) {
    n = Number(n);
    let rows = 0;

    if (n === 2) {
        console.log("+++");
    } else {
        console.log("+" + "-".repeat(n - 2) + "+" + "-".repeat(n - 2) + "+");

        if (n % 2 === 0) {
            rows = n / 2 - 2;
            for (var i = 1; i <= rows; i++) {
                console.log("|" + " ".repeat(n - 2) + "|" + " ".repeat(n - 2) + "|");
            }
            console.log("+" + "-".repeat(n - 2) + "+" + "-".repeat(n - 2) + "+");
            for (var j = 1; j <= rows; j++) {
                console.log("|" + " ".repeat(n - 2) + "|" + " ".repeat(n - 2) + "|");
            }
        } else {
            rows = Math.ceil(n / 2 - 2);
            for (var i = 1; i <= rows; i++) {
                console.log("|" + " ".repeat(n - 2) + "|" + " ".repeat(n - 2) + "|");
            }
            console.log("+" + "-".repeat(n - 2) + "+" + "-".repeat(n - 2) + "+");
            for (var j = 1; j <= rows; j++) {
                console.log("|" + " ".repeat(n - 2) + "|" + " ".repeat(n - 2) + "|");
            }
        }

        console.log("+" + "-".repeat(n - 2) + "+" + "-".repeat(n - 2) + "+");
    }
}