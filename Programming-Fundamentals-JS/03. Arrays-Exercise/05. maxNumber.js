function maxNumber(arr) {

    let newArray = [];

    for (let i = 0; i < arr.length; i++) {

        let currentElement = arr[i];
        let isTop = true;

        for (let j = i + 1; j < arr.length; j++) {

            let nextElement = arr[j];

            if (currentElement <= nextElement) {
                isTop = false;
                break;
            }
        }

        if (isTop) {
            newArray.push(currentElement);
        }

    }
    console.log(newArray.join(' '));
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48])