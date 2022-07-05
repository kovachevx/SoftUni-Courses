function playingCards(face, suit) {
    let suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }

    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    if (!validFaces.includes(face) || !suits.hasOwnProperty(suit)) {
        throw new Error('Invalid face: ' + face);
    }

    let result = {
        face,
        suit: suits[suit],
        toString() {
            return this.face + this.suit;
        }
    }

    return result;
}
playingCards('A', 'S');
playingCards('10', 'H');
playingCards('2', 'Z');