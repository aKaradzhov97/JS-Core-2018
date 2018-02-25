function cityMarkets(arr) {
    let towns = new Map();

    for (let str of arr) {
        let [town, item, value] = str.split(/\s*->\s*/);
        let multiply = value.split(/\s*:\s*/)
            .map(s => Number(s))
            .reduce((a, b) => a * b);
        if (towns.has(town)) {
            if (towns.get(town).has(item)) {
                towns.get(town).set(item, towns.get(item) + multiply);
            } else {
                towns.get(town).set(item, multiply);
            }
        } else {
            let itemsMap = new Map();
            itemsMap.set(item, multiply);
            towns.set(town, itemsMap);
        }
    }
    for (let [key, value] of towns) {
        console.log(`Town - ${key}`);
        for (let [item, multiply] of towns.get(key)) {
            console.log(`$$$${item} : ${multiply}`);
        }
    }
}