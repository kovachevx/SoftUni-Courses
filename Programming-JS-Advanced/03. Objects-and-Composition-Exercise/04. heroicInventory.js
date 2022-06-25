function heroicInventory(inputArray) {
    let result = [];
    for (let line of inputArray) {
        let [name, level, items] = line.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        hero = { name, level, items };
        result.push(hero);
    }
    console.log(JSON.stringify(result));
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);
heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);