(function arrayExtension() {
    let arr = [1, 2, 3];
    Array.prototype.last = function () {
        return this[this.length - 1];
    }
    Array.prototype.skip = function (n) {
        let newArr = [];
        for (var i = n; i < this.length; i++) {
            newArr.push(this[i]);
        }
        return newArr;
    }
    Array.prototype.take = function (n) {
        let newArr = [];
        for (var i = 0; i < n; i++) {
            newArr.push(this[i]);
        }
        return newArr;
    }
    Array.prototype.sum = function () {
        let sum = 0;
        for (var i = 0; i < this.length; i++) {
            let currentNum = Number(this[i]);
            sum += currentNum;
        }
        return sum;
    }
    Array.prototype.average = function () {
        let sum = 0;
        let avg;
        for (var i = 0; i < this.length; i++) {
            let currentNum = Number(this[i]);
            sum += currentNum;
        }
        avg = sum / Number(this.length);
        return avg;
    }
})();