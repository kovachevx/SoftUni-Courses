function cardGame(input) {
    let multipliers = {
        'C': 1,
        'D': 2,
        'H': 3,
        'S': 4
    };
    let faces = {
        1: 10,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    }
    let players = {};
    for (let el of input) {
        let [player, cards] = el.split(': ');
        cards = cards.split(', ');
        if (players.hasOwnProperty(player) === false) {
            players[player] = new Set();
        }

        for (let card of cards) {
            players[player].add(card);
        }
    }

    for (let [player, cards] of Object.entries(players)) {
        let totalScore = 0;
        for (let card of cards) {
            totalScore += (faces[card[0]] * multipliers[card[card.length - 1]]);
            
        }
        console.log(`${player}: ${totalScore}`);
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]);