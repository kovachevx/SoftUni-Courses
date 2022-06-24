function townPopulation(inputArray) {
    let towns = {};
    for (let i = 0; i < inputArray.length; i++) {
        const [townName, population] = inputArray[i].split(' <-> ');
        if (towns[townName] !== undefined) {
            towns[townName] += Number(population);
        } else {
            towns[townName] = Number(population);
        }
    }
    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}
townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);