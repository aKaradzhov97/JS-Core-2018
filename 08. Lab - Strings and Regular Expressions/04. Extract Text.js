function extractText(inputText) {
    let start = inputText.indexOf('(');
    let result = [];

    while (start !== -1) {
        let end = inputText.indexOf(')', start + 1);
        if (end === -1) {
            break;
        }
        result.push(inputText.substring(start + 1, end));
        start = inputText.indexOf('(', end + 1);
    }

    console.log(result.join(", "));
}