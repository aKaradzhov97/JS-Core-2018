function secretData(arr) {
    let patterns = {
        nameRegex: /(\*[A-Z]{1}[A-Za-z]*)(?= |\t|$)/g,
        phoneRegex: /(\+[0-9\-]{10})(?= |\t|$)/g,
        idRegex: /(\![a-zA-Z0-9]+)(?= |\t|$)/g,
        baseRegex: /(\_[a-zA-Z0-9]+)(?= |\t|$)/g
    }

    let output = "";
    for (let str of arr) {
        for (const pattern of Object.values(patterns)) {
            str = str.replace(pattern, function (match) {
                return "|".repeat(match.length);
            });
        }
        output += str + '\n';
    }
    console.log(output);
}