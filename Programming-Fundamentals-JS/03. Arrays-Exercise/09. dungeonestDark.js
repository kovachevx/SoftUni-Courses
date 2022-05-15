function dungeonestDark(arr) {

    let rooms = arr[0].split('|');
    let health = 100;
    let coins = 0;
    let isCompleted = true;

    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i].split(' ');

        if (room[0] === 'potion') {
            let tempHealth = Number(room[1]);
            currentHealth = health;
            health += tempHealth;

            if (health <= 100) {
                console.log(`You healed for ${tempHealth} hp.`);
            } else {
                console.log(`You healed for ${100 - currentHealth} hp.`);
            }

            if (health > 100) {
                health = 100;
            }

            console.log(`Current health: ${health} hp.`);

        } else if (room[0] === 'chest') {

            let currentCoins = Number(room[1]);
            coins += currentCoins;
            console.log(`You found ${currentCoins} coins.`);
        } else {

            health -= Number(room[1]);

            if (health > 0) {
                console.log(`You slayed ${room[0]}`);
            } else {
                isCompleted = false;
                console.log(`You died! Killed by ${room[0]}.`);
                console.log(`Best room: ${i + 1}.`);
                break;
            }
        }
    }

    if (isCompleted) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);