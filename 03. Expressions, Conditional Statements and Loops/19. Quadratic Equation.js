function quadraticEquation(a, b, c) {
    a = Number(a);
    b = Number(b);
    c = Number(c);

    let x1 = 0;
    let x2 = 0;
    let discriminant = Math.pow(b, 2) - 4 * a * c;

    if (discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log(Math.min(x1, x2));
        console.log(Math.max(x1, x2));
    } else if (discriminant === 0) {
        x1 = -b / (2 * a);
        console.log(x1);
    } else if (discriminant < 0) {
        console.log("No");
    }
}