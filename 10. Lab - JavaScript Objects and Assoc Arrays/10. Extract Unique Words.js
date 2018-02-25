function extractUniqueWords(arr) {
    let uniqueWords = new Set();

    for (let str of arr) {
        let words = str.split(/[^a-zA-Z0-9_]+/).filter(w => w !== "");
        for (let w of words) {
            uniqueWords.add(w.toLowerCase());
        }
    }
    console.log([...uniqueWords.values()].join(", "));
}