class Restaurant {
    constructor(budget) {
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(inputArray) {
        for (let line of inputArray) {
            let [product, quantity, totalPrice] = line.split(' ');
            if (totalPrice <= this.budgetMoney) {
                this.budgetMoney -= Number(totalPrice);
                if (this.stockProducts.hasOwnProperty[product]) {
                    this.stockProducts[product] += Number(quantity);
                } else {
                    this.stockProducts[product] = Number(quantity);
                }
                this.history.push(`Successfully loaded ${quantity} ${product}`);
            } else {
                this.history.push(`There was not enough money to load ${quantity} ${product}`);
            }
        }
        return this.history.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.`;
        }

        let products = {};

        for (let line of neededProducts) {
            let [product, qty] = line.split(' ');
            qty = Number(qty);
            products[product] = qty;
        }
        
        this.menu[meal] = { products, price };

        if (Object.keys(this.menu).length === 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        } else if (Object.keys(this.menu).length > 1) {
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
        }
    }


    showTheMenu() {
        let message = [];
        if (Object.keys(this.menu).length === 0) {
            return "Our menu is not ready yet, please come later...";
        } else {
            for (let kvp in this.menu) {
                message.push(`${kvp} - $ ${this.menu[kvp].price}`);
            }
        }
        return message.join('\n');
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        for (let product in this.menu[meal].products) {
            if (!this.stockProducts.hasOwnProperty(product) || this.stockProducts[product] < this.menu[meal].products[product]) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }

        for (let product in this.menu[meal].products) {
            this.stockProducts[product] -= this.menu[meal].products[product];
        }

        this.budgetMoney += this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }
}

let kitchen = new Restaurant(1000);
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());