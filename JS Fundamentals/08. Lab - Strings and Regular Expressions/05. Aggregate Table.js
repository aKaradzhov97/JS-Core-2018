function aggregateTable(inputLines) {
    let sum = 0;
    let arr = [];
    for (let inputLine of inputLines) {
        let data = inputLine.split("|");
        let city = data[1].trim();
        let income = Number(data[2].trim());
        arr.push(city);
        sum += income;
    }
    console.log(arr.join(", ") + "\n" + sum);
}