function gradsToDegrees(grads) {
    grads = Number(grads);
    let degrees = (grads % 400) * 0.9;

    if (grads < 0) {
        console.log(360 + degrees)
    } else {
        console.log(degrees)
    }
}