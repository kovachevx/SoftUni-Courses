function pirates(input) {
    let cities = {};
    let commands = {
        Plunder,
        Prosper
    };
    while (input[0] !== 'Sail') {
        let [city, population, gold] = input.shift().split('||');
        if (cities.hasOwnProperty(city)) {
            cities[city].population += Number(population);
            cities[city].gold += Number(gold);
        } else {
            cities[city] = {
                population: Number(population),
                gold: Number(gold)
            }
        }
    }
    input.shift();
    while (input[0] !== 'End') {
        let [command, city, p1, p2] = input.shift().split('=>');
        commands[command](city, p1, p2);
    }

    if (Object.keys(cities).length > 0) {
        console.log(`Ahoy, Captain! There are ${Object.keys(cities).length} wealthy settlements to go to:`);
        for (let city in cities) {
            console.log(`${city} -> Population: ${cities[city].population} citizens, Gold: ${cities[city].gold} kg`);
        }
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }

    function Plunder(city, people, takenGold) {
        cities[city].population -= Number(people);
        cities[city].gold -= Number(takenGold);
        console.log(`${city} plundered! ${takenGold} gold stolen, ${people} citizens killed.`);
        if (cities[city].population <= 0 || cities[city].gold <= 0) {
            console.log(`${city} has been wiped off the map!`);
            delete cities[city];
        }
    };

    function Prosper(city, addGold) {
        if (addGold < 0) {
            console.log('Gold added cannot be a negative number!');
        } else {
            cities[city].gold += Number(addGold);
            console.log(`${addGold} gold added to the city treasury. ${city} now has ${cities[city].gold} gold.`);
        }
    };
}
pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]);
console.log('-----');
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]);