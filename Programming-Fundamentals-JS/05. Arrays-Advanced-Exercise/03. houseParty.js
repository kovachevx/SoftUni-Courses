function houseParty(guestlist) {

    let tempList = [];

    for (let i = 0; i < guestlist.length; i++) {
        let currentGuest = guestlist[i].split(' ');
        let guest = currentGuest[0];
        let isListed = tempList.includes(guest);

        if (currentGuest.length < 4 && !isListed) {
            tempList.push(guest);
        } else if (currentGuest.length < 4 && isListed) {
            console.log(`${guest} is already in the list!`);
        } else if (currentGuest.length >= 4 && isListed) {
            let indexOfPerson = tempList.indexOf(guest)
            tempList.splice(indexOfPerson, 1);
        } else if (currentGuest.length >= 4 && !isListed) {
            console.log(`${guest} is not in the list!`);
        }
    }
    console.log(tempList.join('\n'));
}
houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);
houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
