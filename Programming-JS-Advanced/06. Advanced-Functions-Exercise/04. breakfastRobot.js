function breakfastRobot() {
    let macros = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }
    let commands = {
        restock,
        prepare,
        report
    };

    return manager;

    function manager(input) {
        let [command, element, quantity] = input.split(' ');
        return commands[command](element, quantity);
    }

    function restock(macroelement, quantity) {
        macros[macroelement] += Number(quantity);
        return 'Success';
    }

    function prepare(recipe, quantity) {
        quantity = Number(quantity);
        let required = Object.entries(recipes[recipe]);
        required.forEach(ingredient => ingredient[1] *= quantity);

        for (let [macroelements, qty] of required) {
            if (qty > macros[macroelements]) {
                return `Error: not enough ${macroelements} in stock`;
            } else {
                macros[macroelements] -= qty;
            }
        }
        return 'Success';
    }

    function report() {
        let result = '';
        for (let key of Object.keys(macros)) {
            result += `${key}=${macros[key]} `;
        }
        return result.trimEnd();
    }
}

let manager = breakfastRobot();
console.log(manager('restock flavour 50 '));
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"))
console.log(manager("restock flavour 10"))

