//cache for classess
const cacheClass = {
fast: document.querySelector("#fast"),
strong: document.querySelector("#strong"),
fat: document.querySelector("#fat"),
throwCache: document.querySelector(".move .ui__button"),
moveCache: document.querySelector(".card__move .button"),
fightCache: document.querySelector(".card__event--fight .button"),
nothingCache: document.querySelector(".card__event--nothing .button"),
buffCache: document.querySelector(".card__event--buff .button"),
f5Cache: document.querySelector(".card__event--lose .button"),
addCache: document.querySelector(".card__event--win .button"),
};

cacheClass.fightCache.addEventListener("click", fight);
cacheClass.fast.addEventListener("click", fastChar);
cacheClass.strong.addEventListener("click", strongChar);
cacheClass.fat.addEventListener("click", fatChar);
cacheClass.throwCache.addEventListener("click", throwDice);
cacheClass.moveCache.addEventListener("click", moveHero);
cacheClass.nothingCache.addEventListener("click", () => {
	let elem = document.querySelectorAll(".display__on");
	for (i = 0; i < elem.length; ++i) {
		elem[i].classList.remove("display__on");
}
});
cacheClass.buffCache.addEventListener("click", addBuff);
cacheClass.f5Cache.addEventListener("click", f5);
cacheClass.addCache.addEventListener("click", () => {
	let elem = document.querySelectorAll(".display__on");
	for (i = 0; i < elem.length; ++i) {
		elem[i].classList.remove("display__on");
}
});

//zmienne
let avatarPosition = 0;
let buff = 1;
let mimirHit = 0;
let enemyStr = 0;

//losowanie z tablic
function randomFromArray(whatArray){
    let randomResult = whatArray[Math.floor(Math.random() * whatArray.length)];
return randomResult;
}

//dice class
class Dice {
    constructor (x) {
        this.sides = x;
    }
   roll() {
		let randomNumber = Math.floor(Math.random() * this.sides) + 1;
		return randomNumber;
}
}
//dice objects
const d6 = new Dice(6);
const d12 = new Dice(12);
const d20 = new Dice(20);
const d30 = new Dice(30);

//klasa hero
class Hero {
    constructor (dmg, life, speed)  {
        this.dmg = dmg;
        this.life = life;
        this.speed = speed;
    }
    move() {
        let numberDice = this.speed.roll();
        avatarPosition =  avatarPosition + numberDice;
		addClass(".card__move", "display__on");
	    let card__moveText = document.querySelector(".card__move p");
	    card__moveText.innerText = numberDice;
    }
    fight() {
        let charDmg = this.dmg.roll();
        return charDmg;
    }
}
//obiekt hero
function fastChar() {
    mimir = new Hero(d12, 2, d20);
	addClass(".begin", "display__off");
	return mimir;
}
function strongChar() {
    mimir = new Hero(d30, 2, d6);
	addClass(".begin", "display__off");
	return mimir;
}
function fatChar() {
    mimir = new Hero(d12, 4, d6);
	addClass(".begin", "display__off");
	return mimir;
}

//klasa wrogów
class Enemy extends Hero {
    constructor (dmg, life){
       super(dmg, life)
	}
    text() {
       const textEnemy = randomFromArray(arrayFight);
	   return textEnemy;

	}
}


//wrogowie
const strongEnemy = new Enemy(d20, 1);
const fatEnemy = new Enemy(d12, 1);
const weakEnemy = new Enemy(d6, 1);

//rzut kostką
function throwDice () {
    mimir.move(); 
}

//ruch bohatera
function moveHero () {
//sprawdzenie endgame
    if (avatarPosition >= 69) {
		addClass(".card__end", "display__on")
		}
//przesunięcie bohatera
removeElem(".avatar", "avatar");
let child = document.querySelectorAll(".board__element");
child[avatarPosition].classList.add("avatar");

removeElem(".display__on", "display__on");

moveHeroEvent();


}



function fight() {
	
	//rzut hero
	addClass(".card__event--fight .button", "display__off");
	
	mimirHitClean = mimir.fight();
	mimirHit = mimirHitClean + buff;
    //wyswietlenie rzutu
   let heroStrText = document.querySelector(".card__event--fight .hero");
		heroStrText.innerText = mimirHitClean;
    let heroBuffText = document.querySelector(".card__event--fight .buff");
		heroBuffText.innerText = buff;
		
		addClass(".stats", "display__on");
		setTimeout(mimirFaith, 3000);
	} 

function mimirFaith() {
	 if(mimirHit > enemyStr) {
        //win
		removeElem(".display__on", "display__on");
		removeElem(".card__event--fight .button", "display__off");
		addClass(".card__event--win", "display__on");
       
        let y = document.querySelector(".card__event--win .arrayText");
		y.innerText = randomFromArray(arrayWin);
    }
	
	else if(mimirHit === enemyStr) {
       //draw
       removeElem(".card__event--fight .button", "display__off");
       }
	   else {
		mimir.life -= 1;
    //lose
     if (mimir.life === 0) {
		removeElem(".display__on", "display__on");
		addClass(".card__event--lose", "display__on");
	 }
	 removeElem(".card__event--fight .button", "display__off");
    
	
    };
    
}


//dodawanie klasy
function addClass(path, classAdded)    {
	    let elem = document.querySelector(path);
	    elem.classList.add(classAdded)
}

//usuwanie klasy

function removeElem(path, classRemoved) {
	let elem = document.querySelectorAll(path);
	for (i = 0; i < elem.length; ++i) {
		elem[i].classList.remove(classRemoved);
}
}
//odświeżanie strony
function f5() {
		window.location.reload(false);
}

//losowanie eventu

function moveHeroEvent() {
	const event = randomFromArray(arrayEvent);
	
	if (event === 1) {
		const randomEnemy = randomFromArray(arrayEnemy);
		addClass(".card__event--fight", "display__on");
		const x = document.querySelector(".card__event--fight .arrayText");
		x.innerText = randomEnemy.text();
		
		
		enemyStr = randomEnemy.fight();
		
		//wyswietlenie rzutu
		let enemyStrText = document.querySelector(".card__event--fight .enemy");
			enemyStrText.innerText = enemyStr;
}

 else if(event === 2) {
	        addClass(".card__event--nothing", "display__on");

   let randomNothing = randomFromArray(arrayNothing);
   	     let y = document.querySelector(".card__event--nothing .arrayText")
			y.innerText = randomNothing;

		} else {
			addClass(".card__event--buff", "display__on");
            randomBuff = randomFromArray(arrayBuff);
            let z = document.querySelector(".card__event--buff .arrayText");
			z.innerText = randomBuff;
		}
}
function addBuff() {
	buff = ++buff;
	removeElem(".display__on", "display__on");
}



