function arrayManipulator(nums, actions) {
    let index = 0;
    let command = actions[index];

    while (command !== 'print') {
        let splitActions = command.split(' ');
        let currentAction = splitActions.shift();
        let currentIndex = Number(splitActions.shift());
        let numsToAdd = splitActions.map(Number);

        switch (currentAction) {
            case 'add':
            case 'addMany':
                nums.splice(currentIndex, 0, ...numsToAdd);
                nums.map(Number);
                break;

            case 'remove':
                nums.splice(currentIndex, 1);
                break;

            case 'contains':
                if (nums.includes(currentIndex)) {
                    console.log(nums.indexOf(currentIndex));
                } else {
                    console.log(-1);
                }
                break;

            case 'shift':
                for (let i = 0; i < currentIndex; i++) {
                    let shiftedNum = nums.shift();
                    nums.push(shiftedNum);
                }
                break;

            case 'sumPairs':
                if (nums.length % 2 !== 0) {
                    nums.push(0);
                }
                nums.map(Number);
                counter = 0;

                while (counter < nums.length) {
                    counter++;
                    let num1 = Number(nums.shift());
                    let num2 = Number(nums.shift());
                    nums.push(num1 + num2);
                }

        }

        index++;
        command = actions[index];
    }

    console.log(`[ ${nums.join(', ')} ]`);
}
arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);