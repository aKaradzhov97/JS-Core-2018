function cookingByNumbers(input) {
    let number = Number(input[0]);

    for (var i = 1; i <= 5; i++) {
        let command = input[i];
        if (command === "chop") {
            number = chop(number);
            console.log(number);
        } else if (command === "dice") {
            number = dice(number);
            console.log(number);
        } else if (command === "spice") {
            number = spice(number);
            console.log(number);
        } else if (command === "bake") {
            number = bake(number);
            console.log(number);
        } else if (command === "fillet") {
            number = fillet(number);
            console.log(number);
        }
    }
    //Commands
    function chop(num) {
        num = Number(num);
        return num / 2;
    }
    function dice(num) {
        num = Number(num);
        return Math.sqrt(num);
    }
    function spice(num) {
        num = Number(num);
        return num + 1;
    }
    function bake(num) {
        num = Number(num);
        return num * 3;
    }
    function fillet(num) {
        num = Number(num);
        return num * 0.80;
    }
    //END OF Commands
}