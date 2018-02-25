function validityChecker(args) {
    let x1 = Number(args[0]);
    let y1 = Number(args[1]);
    let x2 = Number(args[2]);
    let y2 = Number(args[3]);
    function xytoZeroZero(x, y) {
        x = Number(x);
        y = Number(y);

        let distance = Number(Math.sqrt(Math.pow((0 - x), 2) + Math.pow((0 - y), 2)));
        if (distance % 1 === 0) {
            return "valid";
        } else {
            return "invalid";
        }
    }
    function x1y1Tox2y2(x1, y1, x2, y2) {
        x1 = Number(x1);
        y1 = Number(y1);
        x2 = Number(x2);
        y2 = Number(y2);
        let distance = Number(Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)));
        if (distance % 1 === 0) {
            return "valid";
        } else {
            return "invalid";
        }
    }
    console.log(`{${x1}, ${y1}} to {0, 0} is ${xytoZeroZero(x1, y1)}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${xytoZeroZero(x2, y2)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${x1y1Tox2y2(x1, y1, x2, y2)}`);
}