function tripLength(args) {
    let [x1, y1, x2, y2, x3, y3] = args.map(Number);
    let distance12 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    let distance13 = Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2));
    let distance23 = Math.sqrt(Math.pow(x3 - x2, 2) + Math.pow(y3 - y2, 2));

    if (distance12 <= distance13 && distance13 >= distance23) {
        let firstCase = distance12 + distance23;
        console.log("1->2->3: " + firstCase);
    } else if (distance12 <= distance23 && distance13 < distance23) {
        let secondCase = distance12 + distance13;
        console.log("2->1->3: " + secondCase);
    } else {
        let lastCase = distance13 + distance23;
        console.log("1->3->2: " + lastCase);
    }
}