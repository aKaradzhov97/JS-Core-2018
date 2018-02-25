function dnaHelix(num) {
    let sequence = "ATCGTTAGGG";
    let seqLen = sequence.length;
    let index = -1;
    for (var i = 1; i <= num; i++) {
        index = getIndex(++index, seqLen);
        let firstSymbol = sequence.charAt(getIndex(index));
        index = getIndex(++index, seqLen);
        let secondSymbol = sequence.charAt(getIndex(index));

        if (i % 4 === 1) {
            console.log(`**${firstSymbol}${secondSymbol}**`);
            //Execute when row is FIRST
        } else if (i % 4 === 2 || i % 4 === 0) {
            console.log(`*${firstSymbol}--${secondSymbol}*`);
            //Execute when row is SECOND OR FORTH
        } else {
            console.log(`${firstSymbol}----${secondSymbol}`);
            //Execute when row is THIRD
        }
    }
    function getIndex(index, len) {
        if (index >= len) {
            index = 0;
        }
        return index;
    }
}