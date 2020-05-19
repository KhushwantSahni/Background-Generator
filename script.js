var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("Random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomnumber() {
	return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}

function setrandomBG() {
	var x = randomnumber();
	var y = randomnumber();
	color1.value = x;
	color2.value = y;

	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", setrandomBG);