function cardDeckBuilder(selector) {
    function reverse() {
        let cards = $('.card');
        //cards.get() - changing jQuery arr to Array.
        $(selector).append(cards.get().reverse());
    }
    return {
        addCard: function(face, suit) {
            let suits = {
                C: `\u2663`,
                D: `\u2666`,
                H: `\u2665`,
                S: `\u2660`

            }
            let element = $(`<div class="card">${face} ${suits[suit]}</div>`).appendTo(selector);
            element.click(reverse);
            element.appendTo(selector);
        }
    }
}