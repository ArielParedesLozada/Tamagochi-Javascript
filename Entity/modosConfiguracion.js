
const nightModeOffBtn = document.querySelector("#nightmode-off");
const nightModeOnBtn = document.querySelector("#nightmode-on");

nightModeOffBtn.addEventListener("click", function() {
	nightModeOff();
});

nightModeOnBtn.addEventListener("click", function() {
	nightModeOn();
});
//NightMode toggle
function nightModeOn() {
	document.querySelector('body').classList.add("nightmode-on");
	document.querySelector('#nightmode').innerHTML = "on";
}

function nightModeOff() {
	document.querySelector('body').classList.remove("nightmode-on");
	document.querySelector('#nightmode').innerHTML = "off";
}

//Togglers for buttons
document.querySelector(".game-screen").classList.toggle("hide");
document.querySelector(".menu-screen-settings").classList.toggle("hide");

function MainMenu() {
	document.querySelector(".menu-screen-settings").classList.toggle("hide");
	document.querySelector(".main-menu-screen").classList.toggle("hide");
}

function settingsMenu() {
	document.querySelector(".main-menu-screen").classList.toggle("hide");
	document.querySelector(".menu-screen-settings").classList.toggle("hide");
}