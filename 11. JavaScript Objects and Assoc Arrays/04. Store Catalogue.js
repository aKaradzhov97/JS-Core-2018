function storeCatalogue(arr) {
    let catalogue = new Map();

    for (let line of arr) {
        let tokens = line.split(" : ").filter(w => w !== "");
        let product = tokens[0];
        let price = Number(tokens[1]);
        catalogue.set(product, price);
    }
    let initials = new Set();
    Array.from(catalogue.keys()).forEach(k => initials.add(k[0]));

    for (let char of Array.from(initials.keys()).sort()) {
        console.log(char);
        for (let product of Array.from(catalogue.keys()).sort()) {
            if (product.startsWith(char)) {
                console.log(`  ${product}: ${catalogue.get(product)}`)
            }
        }
    }
}