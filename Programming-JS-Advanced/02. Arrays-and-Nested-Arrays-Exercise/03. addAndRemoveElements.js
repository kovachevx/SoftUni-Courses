function addAndRemoveElements(inputArray) {
    let result = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === 'add') {
            result.push(i + 1);
        } else if (inputArray[i] === 'remove') {
            result.pop();
        }
    }
    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}
addAndRemoveElements(['add',
    'add',
    'add',
    'add']);
addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']);
addAndRemoveElements(['remove',
    'remove',
    'remove']);