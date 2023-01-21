import Card from "./card.js";

const suits = ["♠", "♣", "♥", "♦"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

export default function Deck() {
    this.cards = fullDeck();
  }


////////Create deck of cards////////
function fullDeck() {
  return suits.flatMap((suit) =>
    values.map((value) => new Card({ suit, value }))
  );
}
