function numbers(numInput) {

    let nums = numInput.split(' ');
    let counter = 0;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        counter++;
        sum += Number(nums[i]);
    }

    let averageNum = sum / counter;
    let maxNums = [];

    for (let element of nums) {
        if (element > averageNum) {
            maxNums.push(element)
        }
    }

    maxNums.sort((a, b) => b - a);
    let finalArray = [];

    for (let j = 0; j < 5; j++) {
        if (maxNums[j] > averageNum) {
            finalArray.push(maxNums[j])
        }
    }

    if (finalArray <= 0) {
        console.log('No');
    } else {
        console.log(finalArray.join(' '));
    }

}
numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');