function solve() {

    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = Number(gasWeight)
        }
    }
    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this._ribbon = {
                color: ribbonColor,
                length: Number(ribbonLength)
            };

        }
        get ribbon(){
            return this._ribbon;
        }

    }
    class BirthdayBalloon extends PartyBalloon{
        constructor(color, gasWeight, ribbonColor, ribbonLength,text){
            super(color, gasWeight, ribbonColor, ribbonLength);
            this._text=text;
        }
        get text(){
            return this._text;
        }
    }
    return{Balloon,PartyBalloon,BirthdayBalloon};
}
let obj=solve();
let balloon=new obj.Balloon('red',13);
//console.log(balloon);
let partyBalloon=new obj.PartyBalloon('red',15,'kl','56');
//console.log(partyBalloon.ribbon);
let birthdayBalloon=new obj.BirthdayBalloon('yellow',13,'green','198','dgfhfjrotrht')
console.log(birthdayBalloon.text);
