
const suits= ["♠", "♣", "♥", "♦"]
const values= [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]


import Cards from "./card.js"
/////////////////////Create deck of cards////////   
    function  fullDeck () {
        return suits.flatMap(suit => {   // will loop through and condenses arrays, helpful when you have an array within an array
        return  values.map(value => {
        return new Cards(suit, value)
           
          })
         })
        } 

    export default class Deck {
        constructor (cards = fullDeck()) {  
            this.cards= cards
        }
    }
/* 
        get everyCard() { // this will get all 52 card for th for loop
            return  this.cards.length  //use in  for loop to target every card 
        }
        shuffleCards() {
        for (let i = this.everyCard; i > 0; i--) {
             const newIndex = Math.floor(Math.random() * ( i - 1 )) // math.floor(math.random) wil generate a random integer during the for-loop                                       //consider maath.random & math.floor then describe
             const prevValue = this.cards[newIndex]
             this.cards[newIndex] = this.cards[i]
             this.cards[i] = prevValue
        
        
            }                                                // this will create a new index of random integers or in this case cards 
    } 
}  the shuffle section was moved to the Game.js section 
*/




    





    
    

    









