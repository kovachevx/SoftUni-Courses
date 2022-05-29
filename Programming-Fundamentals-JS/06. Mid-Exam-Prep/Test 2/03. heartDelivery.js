function heartDelivery(arrayInput) {

    let hood = arrayInput.shift().split('@').map(Number)
    let cupidsPosition = 0;
    let index = 0;
    let command = arrayInput[index].split(' ');
    let [action, jumpLength] = [command[0], Number(command[1])];

    while (action !== 'Love!') {

        cupidsPosition += jumpLength;

        if (cupidsPosition >= hood.length) {
            cupidsPosition = 0;
        }

        let numToModify = hood.splice(cupidsPosition, 1);
        numToModify -= 2;

        if (numToModify === 0) {
            console.log(`Place ${cupidsPosition} has Valentine's day.`);
        } else if (numToModify < 0) {
            console.log(`Place ${cupidsPosition} already had Valentine's day.`);
            numToModify = 0;
        }

        hood.splice(cupidsPosition, 0, numToModify);

        index++;
        command = arrayInput[index].split(' ');
        [action, jumpLength] = [command[0], Number(command[1])];
    }

    let failedPlaces = 0;
    for (let element of hood) {
        if (element > 0) {
            failedPlaces++;
        }
    }

    console.log(`Cupid's last position was ${cupidsPosition}.`);

    if (failedPlaces > 0) {
        console.log(`Cupid has failed ${failedPlaces} places.`);
    } else {
        console.log("Mission was successful.");
    }
}
heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
heartDelivery(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"]);