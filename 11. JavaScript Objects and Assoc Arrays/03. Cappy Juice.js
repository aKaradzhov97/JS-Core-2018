function cappyJuice(input) {
    let bottles = {};
    let resultObj = {};

    for (let line of input) {
        let tokens = line.split(" => ").filter(w => w !== "");
        let fruit = tokens[0];
        let juiceQuantity = Number(tokens[1]);
        if (bottles.hasOwnProperty(fruit)) {
            bottles[fruit] += juiceQuantity;
        } else {
            bottles[fruit] = juiceQuantity;
        }
        if (bottles[fruit] >= 1000) {
            resultObj[fruit] = Math.floor(Number(bottles[fruit]) / 1000);
        }
    }
    for (let key of Object.keys(resultObj)) {
        console.log(key + " => " + resultObj[key]);
    }
}