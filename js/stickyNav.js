let headerLogo = document.querySelector('header');
let navLogo = document.querySelector('.nav_bar__logo img');

document.addEventListener('scroll', (e) => {
	let scrollToHile = headerLogo.offsetHeight;
	let currentScrollAmount = -headerLogo.getBoundingClientRect().y;

	console.log(scrollToHile);
	console.log(currentScrollAmount);

	if (currentScrollAmount > scrollToHile) {
		navLogo.style.opacity = 1;
	} else {
		navLogo.style.opacity = 0;
	}
	//make new logo show
});
