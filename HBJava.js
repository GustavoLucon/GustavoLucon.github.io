function HideSam(x) {
	var myElement = document.getElementById("bottom");
	myElement.style.opacity = 0;
	var GrayNat = document.getElementById("nat");
	var GrayPai = document.getElementById("pai");
	GrayNat.style.filter = "none"
	GrayPai.style.filter = "none"
}

function ShowSam(x) {
var myElement = document.getElementById("bottom");
	myElement.style.opacity = 1;
	var GrayNat = document.getElementById("nat");
	var GrayPai = document.getElementById("pai");
	GrayNat.style.filter = "grayscale(100%)"
	GrayPai.style.filter = "grayscale(100%)"	
}

function HideNat(x) {
	var myElement = document.getElementById("bottom2");
	myElement.style.opacity = 0;
	var GraySam = document.getElementById("sam");
	var GrayPai = document.getElementById("pai");
	GraySam.style.filter = "none"
	GrayPai.style.filter = "none"
}

function ShowNat(x) {
var myElement = document.getElementById("bottom2");
	myElement.style.opacity = 1;
	var GraySam = document.getElementById("sam");
	var GrayPai = document.getElementById("pai");
	GraySam.style.filter = "grayscale(100%)"
	GrayPai.style.filter = "grayscale(100%)"
}


function HidePai(x) {
	var myElement = document.getElementById("bottom3");
	myElement.style.opacity = 0;
	var GrayNat = document.getElementById("nat");
	var GraySam = document.getElementById("sam");
	GrayNat.style.filter = "none"
	GraySam.style.filter = "none"
}

function ShowPai(x) {
var myElement = document.getElementById("bottom3");
	myElement.style.opacity = 1;
	var GrayNat = document.getElementById("nat");
	var GraySam = document.getElementById("sam");
	GrayNat.style.filter = "grayscale(100%)"
	GraySam.style.filter = "grayscale(100%)"
}

