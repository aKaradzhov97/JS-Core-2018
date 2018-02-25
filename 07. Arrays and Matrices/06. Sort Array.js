function sortArrayByTwoCriteria(arr) {
    console.log(arr.sort(compareEl).join('\n'));
    function compareEl(a, b) {
        if (a.length < b.length) {
            return -1;
        } else if (a.length > b.length) {
            return 1;
        } else {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } else {
                return 0;
            }
        }
        return 0;
    }
}