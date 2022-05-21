function carWash(arr) {

    let index = 0;
    let value = 0;
    let command = arr[index];

    while (index < arr.length) {

        switch (command) {
            case 'soap': value += 10; break;
            case 'water': value *= 1.20; break;
            case 'vacuum cleaner': value *= 1.25; break;
            case 'mud': value *= 0.90; break;
        }

        index++;
        command = arr[index];
    }

    console.log(`The car is ${value.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);