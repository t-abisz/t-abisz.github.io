//template for players
class Player {
  constructor(name, hand) {
    this.name = name;
    this.hand = [];
  }
  //counting items in array
  countPoints(chooseDOM) {
    chooseDOM.value = 0;
    return objectDOM.value = this.hand.length;;
  }
  
  //counting values of items in array
  countValues(chooseDOM) {
  
    for (let i = 0; i < this.hand.length; i++) {
      let points;
      points += this.hand[i].value; 
    }
    return chooseDOM.value = points;
  }
} 