import deck from "./deck.js";

export default class Cards {
    constructor(suit, value) {
        this.suit = suit
    this.value = value
   
    }   
    
    get color() {
        return this.suit === "♣" || this.suit === "♥" ?  "black" : "red" 
        //return this.value === "♣" || this.suit === "♥" ? "red" : "black"
      }
 

 getHTML() {
    const cardDiv = document.createElement("div")
    cardDiv.innerText = this.suit
    //cardDiv.innerText = this.value
    cardDiv.classList.add("player2-card-slot", this.color)
    cardDiv.classList.add("player1-card-slot", this.color)
    //cardDiv.document.getElementById.add("card-red","card-black")
    cardDiv.dataset.value = `${this.value} ${this.suit}`
    
    return cardDiv
  }

 }




   



 






