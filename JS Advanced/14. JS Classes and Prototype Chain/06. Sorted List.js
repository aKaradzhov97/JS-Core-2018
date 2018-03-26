class SortedList {
    constructor(internalArr, size) {
        this.internalArray = [];
        this.size = 0;
    }
    add(element) {
        this.internalArray.push(element);
        this.size++;
        this.sort();
    }
    remove(index) {
        if (index >= 0 && index < this.internalArray.length) {
            this.internalArray.splice(index, 1);
            this.size--;
        }
    }
    verifyRange(index) {
        if (this.size === 0) {
            return `Collection is empty.`;
        }
        if (index < 0 || index >= this.internalArray.length) {
            return `Index was outside the bounds of the collection.`;
        }
    }
    get(index) {
        this.verifyRange(index);
        return this.internalArray[index];
    }
    toString() {
        return this.internalArray.join(' ');
    }
    sort() {
        this.internalArray = this.internalArray.sort((a, b) => a - b);
    }
}