function maxSequenceOfEqualElements(arr) {

    let finalArray = [];

    for (let i = 0; i < arr.length; i++) {
        let currentArray = [];
        for (let j = i; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                currentArray.push(arr[j]);
            } else {
                break;
            }
        }

        if (currentArray.length > finalArray.length) {
            finalArray = currentArray;
        }

    }

    console.log(finalArray.join(' '));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);