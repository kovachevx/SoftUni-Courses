function calorieObject(inputArray) {
    const products = {};
    for (let i = 0; i < inputArray.length; i += 2) {
        const product = inputArray[i];
        const calories = Number(inputArray[i + 1]);
        products[product] = calories;
    }
    console.log(products);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);