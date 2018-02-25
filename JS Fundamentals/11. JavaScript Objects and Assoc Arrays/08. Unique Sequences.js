function uniqueSequences(rows) {
    let uniqueSequences = [];
    for (let row of rows) {
        let numberArr = JSON.parse(row)
            .map(Number)
            .sort((a, b) => b - a);

        let currentSum = numberArr.reduce((a, b) => a + b);
        if (!uniqueSequences.find(arr => arr.reduce((a, b) => a + b) === currentSum)) {
            uniqueSequences.push(numberArr);
        }
    }

    uniqueSequences
        .sort((a, b) => a.length > b.length)
        .forEach(arr => console.log(`[${arr.join(', ')}]`));
}