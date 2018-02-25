function rotateArray(arr) {
    let rotations = Number(arr.pop());
    //No need to rotate like 1000000000 times..
    rotations %= arr.length;

    for (var i = 0; i < rotations; i++) {
        let lastEl = arr.pop();
        arr.unshift(lastEl);
    }

    console.log(arr.join(" "));
}