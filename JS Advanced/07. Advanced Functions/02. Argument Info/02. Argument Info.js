function result() {
    let argumentTypes = {};

    for (var i = 0; i < arguments.length; i++) {
        var argumentValue = arguments[i];
        console.log(`${typeof argumentValue}: ${argumentValue}`);

        if (!argumentTypes.hasOwnProperty(typeof argumentValue)) {
            argumentTypes[typeof argumentValue] = 0;
        }
        argumentTypes[typeof argumentValue]++;
    }
    let sortedArr = [];

    for (let argType in argumentTypes) {
        let count = argumentTypes[argType];
        sortedArr.push([argType, count]);
    }
    sortedArr = sortedArr.sort((a, b) => {
        return b[1] - a[1];
    });

    for (var i = 0; i < sortedArr.length; i++) {
        var element = sortedArr[i];
        let argumentType = element[0];
        let argumentCount = element[1];
        console.log(`${argumentType} = ${argumentCount}`)
    }
}