const settingsBtn = document.querySelector("#action-menu-settings");
const settingsBackBtn = document.querySelector("#action-settings-back");
const nightModeOffBtn = document.querySelector("#nightmode-off");
const nightModeOnBtn = document.querySelector("#nightmode-on");


settingsBackBtn.addEventListener("click", function() {
	MainMenu();
});

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

function settingsMenu() {
	document.querySelector(".main-menu-screen").classList.toggle("hide");
	document.querySelector(".menu-screen-settings").classList.toggle("hide");
}