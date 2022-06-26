function storeCatalogue(inputArray) {
    let catalogue = {};
    inputArray.sort((a, b) => a.localeCompare(b));
    for (let line of inputArray) {
        let [product, price] = line.split(' : ');
        price = Number(price);
        let letter = product.charAt(0);
        if (!catalogue.hasOwnProperty(letter)) {
            catalogue[letter] = {};
            catalogue[letter][product] = price;
        } else {
            catalogue[letter][product] = price;
        }
    }
    for (let keys in catalogue) {
        console.log(keys);
        for (let key in catalogue[keys]) {
            console.log(`  ${key}: ${catalogue[keys][key]}`);
        }
    }
}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);
storeCatalogue(['Banana : 2',
    "Rubic's Cube : 5",
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']);