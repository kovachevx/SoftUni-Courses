function heroesOfCodeAndLogic(input) {
    let n = Number(input.shift());
    let heroes = {};
    let commands = {
        CastSpell,
        TakeDamage,
        Recharge,
        Heal
    };

    for (let i = 0; i < n; i++) {
        let [hero, hp, mp] = input.shift().split(' ');
        heroes[hero] = {
            hp: Number(hp),
            mp: Number(mp)
        }
    }

    while (input[0] !== 'End') {
        let [command, hero, p1, p2] = input.shift().split(' - ');
        commands[command](hero, p1, p2);
    }

    for (let hero in heroes) {
        console.log(`${hero}\n  HP: ${heroes[hero].hp}\n  MP: ${heroes[hero].mp}`);
    }

    function CastSpell(hero, mpNeeded, spellName) {
        if (heroes[hero].mp >= mpNeeded) {
            heroes[hero].mp -= Number(mpNeeded);
            console.log(`${hero} has successfully cast ${spellName} and now has ${heroes[hero].mp} MP!`);
        } else {
            console.log(`${hero} does not have enough MP to cast ${spellName}!`);
        }
    };

    function TakeDamage(hero, damage, attacker) {
        heroes[hero].hp -= Number(damage);
        if (heroes[hero].hp > 0) {
            console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${heroes[hero].hp} HP left!`);
        } else {
            delete heroes[hero];
            console.log(`${hero} has been killed by ${attacker}!`);
        }
    };

    function Recharge(hero, rechargeAmount) {
        let maxRecharge = 200 - heroes[hero].mp;
        heroes[hero].mp += Number(rechargeAmount);
        if (heroes[hero].mp > 200) {
            heroes[hero].mp = 200;
            console.log(`${hero} recharged for ${maxRecharge} MP!`);
        } else {
            console.log(`${hero} recharged for ${rechargeAmount} MP!`);
        }
    };

    function Heal(hero, healAmount) {
        let maxHeal = 100 - heroes[hero].hp;
        heroes[hero].hp += Number(healAmount);
        if (heroes[hero].hp > 100) {
            heroes[hero].hp = 100;
            console.log(`${hero} healed for ${maxHeal} HP!`);
        } else {
            console.log(`${hero} healed for ${healAmount} HP!`);
        }
    };
}
heroesOfCodeAndLogic(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End']);
console.log('------');
heroesOfCodeAndLogic(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End']);