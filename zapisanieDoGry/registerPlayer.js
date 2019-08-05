const btn = document.querySelector('.registerName__save');
btn.addEventListener('click', saveName)


function saveName() {
	
	let takeInput = document.querySelector('.registerName__input').value;
  if (takeInput == null || takeInput == "") {
    alert("Podaj imię Goju");
  } else
	localStorage.setItem('name', takeInput);
  saveBoard.classList.add("off");
	
}
