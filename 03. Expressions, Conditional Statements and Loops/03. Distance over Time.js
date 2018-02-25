function distanceOverTime(input) {
    obj1Speed = Number(input[0]);
    obj2Speed = Number(input[1]);
    seconds = Number(input[2]);

    let obj1Distance = obj1Speed / 3.6 * seconds;
    let obj2Distance = obj2Speed / 3.6 * seconds;

    console.log(Math.abs((obj1Distance - obj2Distance).toFixed(0)));
}