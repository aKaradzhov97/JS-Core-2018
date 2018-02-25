function townsToJSON(arr) {
    let result = [];
    let keys = arr[0].split(/\s*\|\s*/).filter(st => st !== '');
    for (let str of arr.slice(1)) {
        let obj = {};
        let [town, lat, long] = str.split(/\s*\|\s*/).filter(st => st !== '');
        obj[keys[0]] = town;
        obj[keys[1]] = Number(lat);
        obj[keys[2]] = Number(long);
        result.push(obj);
    }
    console.log(JSON.stringify(result));
}