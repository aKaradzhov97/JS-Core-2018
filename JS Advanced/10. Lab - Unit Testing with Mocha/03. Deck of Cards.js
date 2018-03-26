function deckOfCards(arrOfCards) {
    function makeCard(card, suit) {
        const validCards = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        const validSuits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }
        if (validCards.indexOf(card) < 0) {
            throw new Error('Invalid card type!');
        }
        if (!validSuits.hasOwnProperty(suit)) {
            throw new Error('Invalid suit type!');
        }
        return {
            card: card,
            suit: suit,
            toString: function () {
                return card + validSuits[suit];
            }
        }
    }
    for (var i = 0; i < arrOfCards.length; i++) {
        let card = arrOfCards[i];
        let face = card.substring(0, card.length - 1);
        let suit = card[card.length - 1];
        try {
            arrOfCards[i] = makeCard(face, suit);
        } catch (ex) {
            console.log(`Invalid card: ${card + ""}`);
            return;
        }
    }
    console.log(arrOfCards.join(' '));
}
deckOfCards(['AS', '10D', 'KH', '2C']);