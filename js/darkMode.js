var darkMode = localStorage.getItem('darkMode');
var lightSwitch = document.querySelector('.nav_bar__toggle_colour img');
var mainLogo = document.querySelector('header>.logo img');

if (darkMode == 'true') turnOffLights();

function turnOffLights() {
	lightSwitch.setAttribute('onClick', 'javascript: turnOnLights();');
	localStorage.setItem('darkMode', 'true');

	document.querySelector('body').classList.add('dark');
	lightSwitch.src = 'images/design/MOON.svg';
	mainLogo.src = 'images/design/dark_logo.png';
}

function turnOnLights() {
	lightSwitch.setAttribute('onClick', 'javascript: turnOffLights();');
	localStorage.setItem('darkMode', 'false');

	lightSwitch.src = 'images/design/SUN.svg';
	mainLogo.src = 'images/design/light_logo.png';
	document.querySelector('body').classList.remove('dark');
}
