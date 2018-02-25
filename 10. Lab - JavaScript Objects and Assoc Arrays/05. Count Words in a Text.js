function countWordsInText(arr) {
    let obj = {};
    for (let str of arr) {
        let currentWords = str.split(/[^0-9a-zA-Z_]/)
            .filter(a => a !== "");
        for (let word of currentWords) {
            if (obj.hasOwnProperty([word])) {
                obj[word] += 1;
            } else {
                obj[word] = 1;
            }
        }
    }
    console.log(JSON.stringify(obj));
}