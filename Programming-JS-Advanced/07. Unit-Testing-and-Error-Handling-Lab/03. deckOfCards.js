function deckOfCards(cards) {

    let deck = [];

    for (let cardAsAString of cards) {
        let face = cardAsAString.slice(0, -1);
        let suit = cardAsAString.slice(-1);
        try {
            let card = playingCards(face, suit)
            deck.push(card);
        } catch (error) {
            deck = ['Invalid card: ' + cardAsAString];
        }
    }

    console.log(deck.join(' '));

    function playingCards(face, suit) {
        let suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }

        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        if (!validFaces.includes(face) || !suits.hasOwnProperty(suit)) {
            throw new Error('Invalid face');
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
}
deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards(['5S', '3D', 'QD', '1C']);