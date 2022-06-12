function plantDiscovery(input) {
    let n = Number(input.shift());
    let plants = {};
    let commands = {
        Rate,
        Update,
        Reset
    }

    for (let i = 0; i < n; i++) {
        let [plant, rarity] = input.shift().split('<->');
        rarity = Number(rarity);
        let rating = [];
        if (plants.hasOwnProperty(plant)) {
            plants[plant].rarity = rarity;
        } else {
            plants[plant] = {
                rarity,
                rating
            };
        }
    }

    while (input[0] !== 'Exhibition') {
        let [command, tokens] = input.shift().split(': ');
        let [plant, param1] = tokens.split(' - ');
        commands[command](plant, param1);
    }

    console.log('Plants for the exhibition:');
    for (let plant in plants) {
        let averageRating = 0;
        if (plants[plant].rating.length > 0) {
            for (let rate of plants[plant].rating) {
                averageRating += Number(rate);
            }
            averageRating /= plants[plant].rating.length;
        }
        console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${averageRating.toFixed(2)}`);
    }

    function Rate(plant, rating) {
        if (!plants.hasOwnProperty(plant)) {
            console.log('error');
        } else {
            plants[plant].rating.push(Number(rating));
        }
    };

    function Update(plant, newRarity) {
        if (!plants.hasOwnProperty(plant)) {
            console.log('error');
        } else {
            plants[plant].rarity = Number(newRarity);
        }
    };

    function Reset(plant) {
        if (!plants.hasOwnProperty(plant)) {
            console.log('error');
        } else {
            plants[plant].rating = [];
        }
    };
}
plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);
console.log('------');
plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"]);