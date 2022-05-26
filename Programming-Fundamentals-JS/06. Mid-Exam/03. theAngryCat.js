function theAngryCat(ratings, entryPoint, itemClass) {

    let leftSum = 0;
    let rightSum = 0;
    let baseValue = ratings[entryPoint];
    let leftArray = ratings.splice(0, entryPoint);
    ratings.shift()

    for (let i = 0; i < leftArray.length; i++) {
        if (itemClass === 'cheap') {
            if (leftArray[i] < baseValue) {
                leftSum += leftArray[i];
            }
        } else if (itemClass === 'expensive') {
            if (leftArray[i] >= baseValue) {
                leftSum += leftArray[i]
            }
        }
    }

    for (let j = 0; j < ratings.length; j++) {
        if (itemClass === 'cheap') {
            if (ratings[j] < baseValue) {
                rightSum += ratings[j];
            }
        } else if (itemClass === 'expensive') {
            if (ratings[j] >= baseValue) {
                rightSum += ratings[j];
            }
        }
    }

    if (leftSum >= rightSum) {
        console.log(`Left - ${leftSum}`);
    } else {
        console.log(`Right - ${rightSum}`);
    }

}
theAngryCat([1, 5, 1], 1, "cheap");
theAngryCat([5, 10, 12, 5, 4, 20], 3, "cheap");
theAngryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");