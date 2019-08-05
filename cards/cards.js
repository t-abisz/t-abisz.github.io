
//one card template
class Card {
  constructor(name, color, value, points) {
    this.name = name;
    this.color = color;
    this.value = value;
    this.points = points;
  }
  
  
}

//24 cards
const club9 = new Card(9, 'club', 1);
const diamond9 = new Card(9, 'diamond', 1);
const heart9 = new Card(9, 'heart', 1);
const spade9 = new Card(9, 'spade', 1);

const club10 = new Card(10, 'club', 2);
const diamond10 = new Card(10, 'diamond', 2);
const heart10 = new Card(10, 'heart', 2);
const spade10 = new Card(10, 'spade', 2);

const clubJack = new Card('J', 'club', 3);
const diamondJack = new Card('J', 'diamond', 3);
const heartJack = new Card('J', 'heart', 3);
const spadeJack = new Card('J', 'spade', 3);

const clubQueen = new Card('Q', 'club', 4);
const diamondQueen = new Card('Q', 'diamond', 4);
const heartQueen = new Card('Q', 'heart', 4);
const spadeQueen = new Card('Q', 'spade', 4);

const clubKing = new Card('K', 'club', 5);
const diamondKing = new Card('K', 'diamond', 5);
const heartKing = new Card('K', 'heart', 5);
const spadeKing = new Card('K', 'spade', 5);

const clubAce = new Card('A', 'club', 6);
const diamondAce = new Card('A', 'diamond', 6);
const heartAce = new Card('A', 'heart', 6);
const spadeAce = new Card('A', 'spade', 6);

//deck
const deck24 = {
  cards: [
    club9, diamond9, heart9, spade9,
    club10, diamond10, heart10, spade10,
    clubJack, diamondJack, heartJack, spadeJack,
    clubQueen, diamondQueen, heartQueen, spadeQueen,
    clubKing, diamondKing, heartKing, spadeKing,
    clubAce, diamondAce, heartAce, spadeAce
  ],
  //shuffle cards (Fisher-Yates shuffle)
  shuffleDeck: function() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  },
  
  //pickup a card
  pickupCard: function(array, cardsnumber, hand) {
    for(let i = cardsnumber; i > 0; i--) {
      hand.push(array[0]);
      array.shift();
    }
  }
}


//template for players
class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }
  //counting items in array
  countPoints() {
    return this.hand.length;
  }
  
  //counting values of items in array
 
  countValues() {
    let csr = this.hand.reduce(function (a,b) { 
      return {value: a.value + b.value
      }; });
    return csr;
  }
  
} 

//players
const you = new Player ('You');
const komputer = new Player('Komputer');
const table = new Player('Table');

//draw a card
function drawCard(array) {
    const cardimage = document.querySelector(".card__image");
    cardimage.insertAdjacentHTML("beforeend", `<div class='card__front'><div class='${array[0].color}'>${array[0].name}</div></div>`);
}

function tableHand() {
  table.hand.push(you.hand[0], komputer.hand[0]);
  komputer.hand.shift();
  you.hand.shift();
}

//cleaning
function cleaning() {
  
}