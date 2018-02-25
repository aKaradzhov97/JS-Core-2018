function matchAllWords(str) {
    const regex = /\w+/gm;
    let m;
    let resultArr = [];

    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            resultArr.push(m);
        });
    }
    console.log(resultArr.join("|"));
}