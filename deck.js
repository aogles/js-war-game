
const suits= ["♠", "♣", "♥", "♦"]
const values= [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]


import Cards from "./card.js"
   
    function fullDeck(){
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
    

    





    
    

    









/* function getDeck () {
 let deck = new Array();
  for (let i = 0; i < suits.length; i++)
{
for (let a = 0; a < values.length; a++)
{
 let cards = {Value: values[a] , Suit: suits[i]};
  deck.push(cards);
}
}
return deck;
} */
