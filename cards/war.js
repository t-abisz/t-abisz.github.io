//buttons DOM
const buttonTake = document.querySelector('.button--take');
buttonTake.addEventListener('click', playWar);
const buttonPlay = document.querySelector('.button--play');
buttonPlay.addEventListener('click', playCard);
const buttonRefresh = document.querySelector('.button--refresh');
buttonRefresh.addEventListener('click', f5);

//inputs DOM
const myCardsDOM = document.querySelector(".myCards");
const aiCardsDOM = document.querySelector(".aiCards");
const myPointsDOM = document.querySelector(".myPoints");
const aiPointsDOM = document.querySelector(".aiPoints");


//refresh site
function f5() {
		window.location.reload(false);
}
 
 //turn in war
 function playWar () {
   deck24.shuffleDeck();
   deck24.pickupCard(deck24.cards, 12, you.hand);
   deck24.pickupCard(deck24.cards, 12, komputer.hand);
   myCardsDOM.value = you.countPoints();
   aiCardsDOM.value = komputer.countPoints();
   myPointsDOM.value = you.countValues().value;
   aiPointsDOM.value = komputer.countValues().value;
   buttonTake.remove();
 }
  
 //result                        
 function result () {
   const cardimage = document.querySelector(".card__image");
   if(you.hand[0].value > komputer.hand[0].value) {
     you.hand.push.apply(you.hand, table.hand);
     table.hand = [];
     cardimage.innerHTML= "";
     myCardsDOM.value = you.countPoints();
   aiCardsDOM.value = komputer.countPoints();
   myPointsDOM.value = you.countValues().value;
   aiPointsDOM.value = komputer.countValues().value;
   }
   else if (you.hand[0].value < komputer.hand[0].value) {
     komputer.hand.push.apply( komputer.hand, table.hand );
     table.hand = [];
     cardimage.innerHTML= "";
     myCardsDOM.value = you.countPoints();
   aiCardsDOM.value = komputer.countPoints();
   myPointsDOM.value = you.countValues().value;
   aiPointsDOM.value = komputer.countValues().value;
   }
   else {
    alert("Remis, rzuć wiecej wojsk do walki")
   }
 }
 
 //play card
 function playCard () {
   setTimeout("drawCard(you.hand)", 300);
   setTimeout("drawCard(komputer.hand)", 800);
   setTimeout("tableHand()", 1100);
   setTimeout("result()", 1800);
 }