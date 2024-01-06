
const startBtn = document.querySelector("#action-menu-start-game");


startBtn.addEventListener("click", function() {
	startGame();
});

function startGame() {

	//Tamagotchi's name
	var tamagotchiName = prompt("Please, enter a name of your tamagotchi:", "");
	document.querySelector("#name").innerHTML = tamagotchiName;
	if (tamagotchiName == null || tamagotchiName.replace(/\s/g, '') == "") {
		tamagotchiName = "Tamagotchi";
		document.querySelector("#name").innerHTML = tamagotchiName;
	}
	
}

