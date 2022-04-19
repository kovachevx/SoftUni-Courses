function password(input){

    let username = input[0];
    let password = input[1];
    let data = input[2];
    let index = 2;
    while (data !== password) {
        data = input[index];
        index++
    }
    console.log(`Welcome ${username}!`)
}
password(["dog", "123", "123"])