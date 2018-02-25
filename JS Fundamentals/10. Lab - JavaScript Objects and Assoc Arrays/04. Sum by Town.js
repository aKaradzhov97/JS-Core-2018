function sumByTown(arr) {
    let obj = {};
    for (var i = 0; i < arr.length; i += 2) {
        if (obj.hasOwnProperty(arr[i])) {
            obj[arr[i]] += Number(arr[i + 1]);
        } else {
            obj[arr[i]] = Number(arr[i + 1]);
        }
    }
    console.log(JSON.stringify(obj));
}