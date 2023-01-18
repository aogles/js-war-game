import  Cards from "./card.js"
import  Deck from "./deck.js"
import  Player from "./player.js"

const CARD_VALUE_MAP = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14
  }


export default class Game {                 //will always call this with new Game
    
    function(){
    this.player1 = new Player({
        name: "Player1",
    })

    this.player2 = new Player({
        name: "Player2",
    })
}
}
/////////shuffle the cards function////////
Game.prototype.shuffle = function(deck){
                                           // this will get all 52 card for th for loop
        return  this.cards.length  //use in  for loop to target every card 
    }
  
    for (let i = this.everyCard; i > 0; i--) {
         const newIndex = Math.floor(Math.random() * ( i - 1 )) // math.floor(math.random) wil generate a random integer during the for-loop                                       //consider maath.random & math.floor then describe
         const prevValue = this.cards[newIndex]
         this.cards[newIndex] = this.cards[i]
         this.cards[i] = prevValue
    
    
        }                                                // this will create a new index of random integers or in this case cards 
 

/////////deal the cards function/////////

Game.prototype.deal = function(){
    //add start button to fire this function
this.player1.hand = this.deck.cards.filter(item,index) {
   return !(index %2) //filter akes in function will loop through csrds array and passes to function
};
this.player2.hand = this.deck.cards.filter(item,index) {
    return (index %2) //filter akes in function will loop through csrds array and passes to function
 
};                    //% give you the remainder

};

//////////////////compare the cards function/////////

Game.prototype.compare = function (){

    if (this.depo[0].value > this.depo[1]) {
        this.player1.hand = [...this.player1, ...this.depo];
    } else if ( this.depo[0].value < this.depo[1].value){
        this.player2.hand = [...this.player2.hand,...this.depo];
        this.depo = [];
    }else{
        this.depo = [
            ...this.player1.hand.splice(0,3)
        ]
    } //this is the draw 3 for war and adding to the pot

 }

////////////Function to draw cards and shift into depo/pot////

Game.prototype.draw = function(){
    const player1cards = this.player1.hand.shift();  //shift removes first value in an array
    //addeventlistener button for draw
    this.depo = [player1,player2,...this.depo]

this.compare();
    ;}
/////////////////////encompasses functions/////


    Game.prototype.play = function(){ //this could encompass the this.shuffle,deal, and play function
        this.shuffle(this.deck);
        this.deal();
        this.draw();
        }


        const game = new Game();
        game.play