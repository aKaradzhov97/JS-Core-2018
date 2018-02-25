function lowestPricesInCities(arr) {
    let products = new Map();

    for (let str of arr) {
        let [town, product, price] = str.split(" | ");
        if (!products.has(product)) {
            products.set(product, new Map());
        }
        products.get(product).set(town, Number(price));
    }
    for (let [product, innerMap] of products) {
        let lowestPrice = Number.POSITIVE_INFINITY;
        let townWithLowestPrice = "";
        for (let [town, price] of products.get(product)) {
            if (price < lowestPrice) {
                lowestPrice = price;
                townWithLowestPrice = town;
            }
        }
        console.log(`${product} -> ${lowestPrice} (${townWithLowestPrice})`);
    }
}