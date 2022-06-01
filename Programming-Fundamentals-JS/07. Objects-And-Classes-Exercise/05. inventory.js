function inventory(input) {
    let heros = [];
    for (let i = 0; i < input.length; i++) {
        let info = input[i].split(' / ');
        let heroName = info[0];
        let level = Number(info[1]);
        let items = info[2];
        let currentHero = {
            heroName,
            level,
            items
        }
        heros.push(currentHero);
    }
    heros.sort((a, b) => a.level - b.level);
    for (let hero of heros) {
        console.log(`Hero: ${hero.heroName}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
console.log('----------')
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);