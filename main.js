
// ex) import{ name, last } from "./name.js";
// export will be on the other files ex. export const name = "Amber";
// export ex. function greeting() {
    /*console.log("Hi");
}
export default greeting; */
// make an array for each suit [ the values]
// else if statments to draw ranom suit/cards


import Deck from "./deck.js";
//import cards from "./card.js";
let player1Deck, player2Deck

//const redCard = document.getElementById("card-red")
//const blackCard = document.getElementsById("card-black")
const player2DeckElement = document.querySelector(".player2-deck deck")
const player2Card = document.querySelector(".player2-card-slot card-slot")
const player1DeckElement = document.querySelector(".player1-deck deck")
const player1Card = document.querySelector(".player1-card-slot card-slot ")
const text = document.querySelector(".text")


startGame()

function startGame(){
const getDeck = new Deck()
getDeck.shuffleCards()


const deckMiddle = Math.ceil(getDeck.everyCard / 2)
player1Deck = new Deck(getDeck.cards.slice(0, deckMiddle))
player2Deck =  new Deck(getDeck.cards.slice(deckMiddle, getDeck.everyCard))
}
//restartRound() 

console.log(player1Deck)  // used to test if deck was correctly split. (suddenly I have 53 caards?)
console.log(player2Deck)
//console.log(getDeck.cards);

//redCard.appendChild(getDeck.cards[0].getHTML())
//blackCard.appendChild(getDeck.cards[0].getHTML())
//player2Card.appendChild(getDeck.cards[0].getHTML())
//player1Card.appendChild(getDeck.cards[0].getHTML())

/* function restartRound() {
player1Card.innerHTML = ''
player2Card.innerHTML = ''
text.innerText = ' '

updateCardCount()
}

function updateCardCount(){
    player2DeckElement.innerText = player2Deck.everyCard
    player1DeckElement.innerText = player1Deck.everyCard
}
*/














