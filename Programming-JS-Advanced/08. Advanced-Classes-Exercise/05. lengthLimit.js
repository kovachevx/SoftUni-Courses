class Stringer {
    constructor(str, initialLength) {
        this.innerString = str;
        this.innerLength = initialLength;
    }

    increase(length) {
        if (this.innerLength + Number(length) < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength += Number(length);
        }
    }

    decrease(length) {
        if (this.innerLength - Number(length) < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= Number(length);
        }
    }

    toString() {
        let result = this.innerString.substring(0, this.innerLength)
        if (!result.length || (result.length <= this.innerLength)) {
            result += '...';
        }
        return result;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test

let s = new Stringer("Viktor", 6);
s.decrease(3);
console.log(s.toString());