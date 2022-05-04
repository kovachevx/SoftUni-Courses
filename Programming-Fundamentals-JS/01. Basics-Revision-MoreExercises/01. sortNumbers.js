function sortNumbers(x, y, z) {
    if (x > y && x > z) {
        console.log(x);
        if (y > z) {
            console.log(y);
            console.log(z);
        } else {
            console.log(z);
            console.log(y);
        }
    } else if (y > x && y > z) {
        console.log(y);
        if (x > z) {
            console.log(x);
            console.log(z);
        } else {
            console.log(z);
            console.log(x);
        }
    } else if (z > x && z > y) {
        console.log(z);
        if (x > y) {
            console.log(x);
            console.log(y);
        } else {
            console.log(y);
            console.log(x);
        }
    }
}
sortNumbers('0', '0', '2');