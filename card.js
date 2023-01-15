import deck from "./deck.js";

export default class Cards {
    constructor(suit, value) {
        this.suit = suit
    this.value = value
   
    }   
    
    get color() {
        return this.suit === "♣" || this.suit === "♥" ? "black" : "red"
      }


 getHTML() {
    const cardId = document.createElement("ID")
    cardId.innerText = this.suit
    cardId.classList.add("card", this.color)
    cardId.dataset.value = `${this.value} ${this.suit}`
    return cardDiv
  }

 





}


   



 






