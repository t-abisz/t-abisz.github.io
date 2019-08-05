writeNumbers = document.querySelector(".numbers");
writeNumbers.addEventListener("click", go);
  let winNumbers = [];
  function sorting(a, b) {
    return a - b
  }
function go () {
	let lastNumber = 0;
    winNumbers = [];
    for (let i = 0; winNumbers.length < 6; i++) {
    let randomNumber = Math.floor(1 + Math.random() * 49 - 1) + 1;
	if (winNumbers.indexOf(randomNumber) === -1) {
		winNumbers.push(randomNumber);
	} false;
    
  }
  winNumbers.sort(sorting);
  document.querySelector(".randomNum").innerHTML = winNumbers.join(' ');

}
