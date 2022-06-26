function lowestPricesInCities(inputArray) {
    let products = {};
    for (let line of inputArray) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);
        if (!products.hasOwnProperty(product)) {
            products[product] = { town, price };
        } else {
            if (products[product].price > price) {
                products[product].price = price;
                products[product].town = town;
            }
        }
    }
    for (let product in products) {
        console.log(`${product} -> ${products[product].price} (${products[product].town})`);
    }
}
lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);