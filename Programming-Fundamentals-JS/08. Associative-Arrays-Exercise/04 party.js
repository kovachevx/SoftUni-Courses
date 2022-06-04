function party(input) {
    let vipMap = new Map();
    let regMap = new Map();
    let guestList = input.splice(0, input.indexOf('PARTY'));
    for (let guest of guestList) {
        if (guest[0] >= 0 && guest[0] <= 9) {
            vipMap.set(guest);
        } else {
            regMap.set(guest)
        }
    }
    for (let guest of input) {
        if (vipMap.has(guest)) {
            vipMap.delete(guest);
        } else if (regMap.has(guest)) {
            regMap.delete(guest)
        }
    }
    console.log(vipMap.size + regMap.size)
    for (let kvp of vipMap) {
        console.log(kvp[0]);
    }
    for (let kvp of regMap) {
        console.log(kvp[0]);
    }
}

// function party(input) {
//     let invitedList = input.splice(0, input.indexOf("PARTY"));
//     input.splice(0, 1);
//     let VIP = [];
//     let regular = [];
//     for (let guest of invitedList) {
//       if (guest[0] >= "0" && guest[0] <= "9") {
//         VIP.push(guest);
//       } else {
//         regular.push(guest);
//       }
//     }
//     for (let guest of input) {
//       if (VIP.includes(guest)) {
//         VIP.splice(VIP.indexOf(guest), 1);
//       }
//       if (regular.includes(guest)) {
//         regular.splice(regular.indexOf(guest), 1);
//       }
//     }
//     console.log(VIP.length + regular.length);
//     VIP.forEach((x) => console.log(x));
//     regular.forEach((x) => console.log(x));
//   }

party(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);
console.log('------')
party(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);