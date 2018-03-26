function sortArray(array, orderType) {
    if (orderType === "asc") {
        return array.sort((a, b) => {
            return a - b;
        });
    } else {
        return array.sort((a, b) => {
            return b - a;
        });
    }
}