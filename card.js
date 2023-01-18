

export default class Cards {
    constructor(suit, value) {
        this.suit = suit
    this.value = value
   
    }   
}
    
 /* get color() {
        return this.suit === "♣" || this.suit === "♥" ?  "black" : "red" 
        //return this.value === "♣" || this.suit === "♥" ? "red" : "black"
      }
 

 getHTML() {
    const cardDiv = document.createElement("div")
    cardDiv.innerText = this.suit
    cardDiv.classList.add("player2", this.color)
    cardDiv.classList.add("player1", this.color)
    cardDiv.dataset.value = `${this.value} ${this.suit}`
    
    return cardDiv
  }

 }
*/