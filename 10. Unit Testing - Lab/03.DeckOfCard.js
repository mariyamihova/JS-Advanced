function printDeck(cards) {
    let deck=[];
    for (let card of cards){
        let face=card.substring(0,card.length-1);
        let suit=card.substr(card.length-1,1);
        try{
            deck.push(makeCard(face,suit));
        }catch (err){
            console.log("Invalid card: "+card);
            return;
        }
    }
    console.log(deck.join(' '));
    function makeCard(face,suit) {
        const validFaces=['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        const validSuits=['S','H','D','C'];
        if(!validFaces.includes(face)){
            throw new Error("Invalid card face: "+face);
        }
        if(!validSuits.includes(suit)){
            throw new Error("Invalid card suit: "+ suit);
        }

        let card = {
            face: face,
            suit: printSuit(suit),
        };

        return card.face+card.suit;


        function printSuit(suit) {
            switch (suit) {
                case 'S':
                    return '\u2660';
                case 'H':
                    return '\u2665';
                case 'D':
                    return '\u2666';
                case 'C':
                    return '\u2663';
            }
        }
    }
}

//printDeck(['AS', '10D', 'KH', '2C']);
printDeck(['5S', '3D', 'QD', '1C']);