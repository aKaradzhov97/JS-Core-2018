function expressionSplit(inputCode) {
    inputCode.split(/[\s(),;\.]/).filter(word => word != "").forEach(word => console.log(word));
}