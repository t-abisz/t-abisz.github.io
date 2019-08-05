	//catching clicks
document.querySelector(".move .ui__button").addEventListener("click", throwDiceMove);
document.querySelector(".card__move .button").addEventListener("click", moveAvatar);
document.querySelector(".card__event--nothing .button").addEventListener("click", removeToggle);
document.querySelector(".card__event--buff .button").addEventListener("click", addBuff);
document.querySelector(".card__event--fight .button").addEventListener("click", kungFu);
document.querySelector(".card__event--lose .button").addEventListener("click", f5);
document.querySelector(".card__event--win .button").addEventListener("click", removeToggle);

//definicje
let avatarPosition = 0;
let buff = 0;
let lubawaStr = 0;
let heroStr = 0;

//ukrywanie elementu
function hideElem(element) {
	let elem = document.querySelector(element);
	elem.classList.add("display__off")
};

function showElem(element) {
	let elem = document.querySelector(element);
	elem.classList.remove("display__off")
};
//pokazywanie elementu
function toggle(display) {
	let card = document.querySelector(display);
	card.classList.add("display__on");
}
/*usuwanie klasy*/
function removeAvatar() {
  let card = document.querySelector(".board__canvas .avatar");
  card.classList.remove("avatar");
}
function removeToggle() {
  let card = document.querySelectorAll(".display__on");
  for (i = 0; i < card.length; ++i) {
		card[i].classList.remove("display__on");
  }
  
}
//odświeżanie strony
function f5() {
		window.location.reload(false);
}
function addBuff() {
	buff = ++buff;
	removeToggle();
}

//konstruktor obiektu kostka
function Dice(x) {
		this.sides = x;
		this.roll = function () {
		let randomNumber = Math.floor(Math.random() * this.sides) + 1;
		return randomNumber;
		}
	}
//dwie kostki

let dice6 = new Dice(6);
let dice20 = new Dice(20);


function throwDiceMove() {
	let numberDice = dice6.roll();
	avatarPosition = avatarPosition + numberDice;

	toggle(".card__move");
	let card__moveText = document.querySelector('.card__move p');
	card__moveText.innerText = numberDice;
};


function moveAvatar() {
	//wywołanie końca gry
	(function() {
		if (avatarPosition >= 69) {
			toggle(".card__end")
		}
	 })();
	/*przesunięcie o avatarPosition poprzez dodanie klasy*/
	removeAvatar();
	
	let child = document.querySelectorAll(".board__element");
	 child[avatarPosition].classList.add("avatar");
	 
	 //usuniecie avatara
	 removeToggle();
	 
	 //losowanie evemtu z tablicy
	let eventCheck = arrayEvent[Math.floor(Math.random() * arrayEvent.length)]; 
	 
	 //odpalanie planszy
	 (function() {
		if (eventCheck === 1) {
			toggle(".card__event--fight");
		let randomFight = arrayFight[Math.floor(Math.random() * arrayFight.length)];
		let x = document.querySelector(".card__event--fight .arrayText");
		x.innerText = randomFight;
		let enemyStr = dice20.roll();
		lubawaStr = enemyStr;
		//wyswietlenie rzutu
		let enemyStrText = document.querySelector(".card__event--fight .enemy");
			enemyStrText.innerText = enemyStr;
}

 else if(eventCheck === 2) {
			toggle(".card__event--nothing");

   let randomNothing = arrayNothing[Math.floor(Math.random() * arrayNothing.length)];	     let y = document.querySelector(".card__event--nothing .arrayText")
			y.innerText = randomNothing;

		} else {
			toggle(".card__event--buff");
 randomBuff = arrayBuff[Math.floor(Math.random() * arrayBuff.length)];
let z = document.querySelector(".card__event--buff .arrayText");
			z.innerText = randomBuff;
		}
		
	 })();
	
	
	
}

function kungFu() {
    //rzut hero
	hideElem(".card__event--fight .button");
	let SzokoszStr = dice20.roll();
	heroStr = SzokoszStr + buff;
    //wyswietlenie rzutu
   let heroStrText = document.querySelector(".card__event--fight .hero");
		heroStrText.innerText = SzokoszStr;
    let heroBuffText = document.querySelector(".card__event--fight .buff");
		heroBuffText.innerText = buff;
		
		toggle(".stats");
		
		setTimeout(yourPunch, 3000);
}

function yourPunch() {
	
	
	
 if(heroStr > lubawaStr) {
        //win
		removeToggle();
		toggle(".card__event--win");
       randomWin = arrayWin[Math.floor(Math.random() * arrayWin.length)];
let y = document.querySelector(".card__event--win .arrayText");
			y.innerText = randomWin;
    } else if(heroStr === lubawaStr)       {
 hideElem(".card__event--fight .button");
    //draw
    kungFu();
    }
    else {
	//lose

    removeToggle();
    toggle(".card__event--lose")
    };
	
	showElem(".card__event--fight .button");
}