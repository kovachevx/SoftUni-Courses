function train(inputArray) {

    let passengersInWagons = inputArray.shift();
    let newArray = passengersInWagons.split(' ');
    let maxCapacity = Number(inputArray.shift());

    for (let i = 0; i < inputArray.length; i++) {

        let splitElements = inputArray[i].split(' ');

        if (splitElements.length > 1) {

            newArray.push(splitElements[1])

        } else {

            for (let j = 0; j < newArray.length; j++) {
                if (Number(newArray[j]) + Number(splitElements[0]) <= maxCapacity) {
                    newArray.splice(j, 1, (Number(newArray[j]) + Number(splitElements[0])));
                    break;
                }
            }

        }

    }

    console.log(newArray.join(' '));

}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);