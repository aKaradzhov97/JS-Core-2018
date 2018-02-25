function countWordsWithMaps(arr) {
    let mapp = new Map();
    for (let str of arr) {
        let words = str.split(/[^0-9a-zA-Z_]+/)
            .filter(w => w.trim() !== '');
        for (let word of words) {
            word = word.toLowerCase();
            if (mapp.has(word)) {
                mapp.set(word, (mapp.get(word) + 1));
            } else {
                mapp.set(word, 1);
            }
        }
    }
    let sortedKeys = Array.from(mapp.keys()).sort((a, b) => a.localeCompare(b));
    for (let key of sortedKeys) {
        console.log(`'${key}' -> ${mapp.get(key)} times`);
    }
}