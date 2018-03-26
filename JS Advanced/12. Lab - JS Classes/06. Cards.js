let result = (() => {
        let Suits = {
            CLUBS: "\u2663",
            DIAMONDS: "\u2666",
            HEARTS: "\u2665",
            SPADES: "\u2660"
        };

        let Faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        class Card{
            constructor(face, suit){
                this.face = face;
                this.suit = suit;
            }

            get face(){
                return this._face;
            }
            set face(f){
                if(! Faces.includes(f)){
                    throw new Error("Invalid card face: " + f);
                }
                this._face = f;
            }

            get suit(){
                return this._suit;
            }
            set suit(s){
                if(!Object.values(Suits).includes(s)){
                    throw new Error("Invalid card suit: " + s);
                }
                this._suit = s;
            }

            toString(){
                return `${this.face}${this.suit}`;
            }
        }
        return {Suits, Card};
    }
)();
//let Card = result.Card;
//let Suits = result.Suits;
//
//let card = new Card('Q', Suits.CLUBS);
//console.log(card.toString());
////>>Changing values//
//card.face = "A";
//card.suit = Suits.DIAMONDS;
//console.log(card.toString())