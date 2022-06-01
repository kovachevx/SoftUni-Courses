function storeProvision(currentStock, orderedProducts) {
    let productList = {};
    for (let i = 0; i < currentStock.length; i += 2) {
        let currentProduct = currentStock[i];
        productList[currentProduct] = Number(currentStock[i + 1]);
    }

    for (let j = 0; j < orderedProducts.length; j += 2) {
        let currentProduct = orderedProducts[j];
        if (productList.hasOwnProperty(currentProduct)) {
            productList[currentProduct] += Number(orderedProducts[j + 1]);
        } else {
            productList[currentProduct] = Number(orderedProducts[j + 1]);
        }
    }

    for (let product of Object.keys(productList)) {
        console.log(`${product} -> ${productList[product]}`);
    }

}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);