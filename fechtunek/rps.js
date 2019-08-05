let kamien = document.querySelector(".button--pistol");
kamien.addEventListener("click", function() { go(-1, ai) } );
let papier = document.querySelector(".button--przeciwTempo");
papier.addEventListener("click", function() { go(0, ai)});
let nozyce = document.querySelector(".button--unik");
nozyce.addEventListener("click", function() { go(1, ai)});
let win__info = document.querySelector(".win__info");
let win = document.querySelector(".win");
let conitnue = document.querySelector(".button--continue");
const yourPointsCatcher = document.querySelector(".your__point");
const aiPointsCatcher = document.querySelector(".ai__point");



//tablica
 let possibilites = [0, 1, -1];
 let ai;
 let yourPoints = 3;
 let aiPoints = 3;

 function check() {
  if (yourPoints == 0 || aiPoints == 0) {
    win.classList.add("blackout");
    win.classList.remove("on");
    kamien.classList.add("off");
    papier.classList.add("off");
    nozyce.classList.add("off");
  }
  else { win.classList.add("on");
  }
}

//rozstrzygniecie
function go (you, ai) {

	ai = possibilites[Math.floor(Math.random() * possibilites.length)];
	
    show(you, '.randomNum--user');
    show(ai, '.randomNum--ai');
    
	if (you === ai) {
		//draw
		win__info.innerHTML = "Remis";
	} else if  (you + ai === 1 && you === 0) { 
			
				win__info.innerHTML = "Wygrana";
				aiPoints = --aiPoints;
				aiPointsCatcher.innerHTML = aiPoints;
			}
		else if (you + ai === -1 && you === -1) {
				win__info.innerHTML = "Wygrana";
				aiPoints = --aiPoints;
				aiPointsCatcher.innerHTML = aiPoints;
			}
		else if 
			(you + ai === 0 && you === 1){
			
				win__info.innerHTML = "Wygrana";
				aiPoints = --aiPoints;
				aiPointsCatcher.innerHTML = aiPoints;
			} 
		else {	
			win__info.innerHTML = "Przegrana";
			yourPoints = --yourPoints;
		    yourPointsCatcher.innerHTML = yourPoints;
		}
	check();
}
  
function lose () {
  win__info.innerHTML = "Przegrana";
	yourPoints = --yourPoints;
	yourPointsCatcher.innerHTML = yourPoints;
}


//drawing in html
const show = (elem, path) => {
	if (elem === -1) {
		document.querySelector(path).innerHTML = '<div class="block__images pistol"><img src="images/pistol.svg" alt="">';
	} else if (elem === 0) {
		document.querySelector(path).innerHTML = '<div class="block__images przeciwtempo"><img src="images/przeciwTempo.svg" alt=""></div>';
	} else {
	    document.querySelector(path).innerHTML = '<div class="block__images unik"><img src="images/unik.svg" alt=""></div>';
	}
	
}
