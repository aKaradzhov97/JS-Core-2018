function carFactory(order) {
    let resultCar = {
        model: order.model,
        engine: engine(order.power),
        carriage: carriageAndColor(order.carriage, order.color),
        wheels: wheelSize(order.wheelsize)
    }

    function wheelSize(inches) {
        inches = Number(inches);
        let result = [];
        if (inches % 2 === 0) {
            inches--;
        }
        for (var i = 1; i <= 4; i++) {
            result.push(inches);
        }
        return result;
    }
    function carriageAndColor(carriage, color) {
        let result = {
            type: carriage,
            color: color
        }
        return result;
    }
    function engine(power) {
        let smallEngine = {
            power: 90,
            volume: 1800
        }
        let normalEngine = {
            power: 120,
            volume: 2400
        }
        let monsterEngine = {
            power: 200,
            volume: 3500
        }
        if (power <= 90) {
            return smallEngine;
        } else if (power <= 120) {
            return normalEngine;
        } else {
            return monsterEngine;
        }
    }
    return resultCar;
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));