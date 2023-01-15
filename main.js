
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

const redCard = document.getElementById("card-red")
const blackCard = document.getElementsByClassName("card-black")
const player2 = document.getElementsByClassName("player2-card-slot")
const player1 = document.getElementsByClassName("player1-card-slot")



const getDeck = new Deck()
getDeck.shuffleCards()
console.log(getDeck.cards);

redCard.appendChild(getDeck.cards[0].getHTML())


















