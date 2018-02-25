function primeNumberChecker(number) {
    number = Number(number);
    let notPrime = true;

    if (number === 0 || number === 1) {
        notPrime = false;
    }
    else if (number > 1) {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                notPrime = false;
            }
        }
    } else {
        notPrime = false;
    }

    if (notPrime === true) {
        console.log("true");
    } else {
        console.log("false");
    }
}