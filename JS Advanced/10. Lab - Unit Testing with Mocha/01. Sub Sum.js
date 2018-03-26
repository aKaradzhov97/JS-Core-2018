function subSum(arr, startIndex, endIndex) {
    if (!Array.isArray(arr)) {
        return NaN;
    }
    startIndex = startIndex < 0 ? 0 : startIndex;
    endIndex = endIndex >= arr.length ? arr.length - 1 : endIndex;

    let sum = 0;
    for (var i = startIndex; i <= endIndex; i++) {
        sum += Number(arr[i]);
    }
    return sum;
}