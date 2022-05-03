function login(input) {

    let index = 0;
    let username = input[index];
    index++;
    let command = input[index]
    let copy = username;
    copy = copy.split('');
    copy = copy.reverse();
    copy = copy.join('');
    let password = copy;
    let incorrectPWCount = 0;

    while (command !== password) {

        if (command !== password) {
            incorrectPWCount++;
            if (incorrectPWCount === 4) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log('Incorrect password. Try again.');
        }

        index++
        command = input[index];
    }

    if (command === password) {
        console.log(`User ${username} logged in.`);
    }

}
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);