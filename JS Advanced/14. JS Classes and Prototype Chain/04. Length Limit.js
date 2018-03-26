class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = Number(innerLength);
        this.originalLength = innerLength;
    }
    increase (length) {
        length = Number(length);
        this.innerLength += length;
    }
    decrease (length) {
        length = Number(length);
        if (this.innerLength - length < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= length;
        }
    }
    toString() {
        let currentLength = this.innerLength;
        let originalLength = this.originalLength;
        if (currentLength === 0) {
            return `...`;
        }
        if (currentLength < originalLength) {
            return `${this.innerString.slice(0, originalLength - currentLength)}...`
        }
        return this.innerString;
    }
}
let test = new Stringer("Test", 5);

//test1
console.log(test.toString()); //Test

//test2
////test.decrease(3);
////console.log(test.toString()); //Te...

//test3
//test.decrease(5);
//console.log(test.toString()); //...

//test4
test.increase(4);
console.log(test.toString()); //Test