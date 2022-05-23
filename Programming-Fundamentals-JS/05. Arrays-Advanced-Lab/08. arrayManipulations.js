function arrayManipulations(input) {

    let arr = input.shift().split(' ').map(Number);
    let newArray = input.slice();

    for (let i = 0; i < input.length; i++) {
        let action = newArray[i].split(" ");
        let command = action[0];
        let num = Number(action[1]);
        let index = action[2];

        switch (command) {
            case 'Add': arr.push(num); break;
            case 'Remove': arr = arr.filter(x => x !== num); break;
            case 'RemoveAt': arr.splice(num, 1); break;
            case 'Insert': arr.splice(index, 0, num); break;
        }

    }

    console.log(arr.join(' '));
}
arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);