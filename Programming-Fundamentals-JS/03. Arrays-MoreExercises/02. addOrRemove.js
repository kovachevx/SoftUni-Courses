function addOrRemove(arr) {

    let newArray = [];

    for (let i = 1; i <= arr.length; i++) {
        if (arr[i - 1] == 'add') {
            newArray.push(i);
        } else if (arr[i - 1] == 'remove') {
            newArray.pop();
        }
    }

    if (newArray.length === 0) {
        console.log('Empty');
    } else {
        console.log(newArray.join(' '));
    }

}
addOrRemove(['add', 'add', 'add', 'add']);
addOrRemove(['add', 'add', 'remove', 'add', 'add']);
addOrRemove(['remove', 'remove', 'remove']);