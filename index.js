const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
	dropdown.addEventListener('mouseenter', () => {
		console.log(dropdown);
		dropdown.querySelector('.dropdown-arrow').src = 'assets/icon-arrow-up.svg';
	});

	dropdown.addEventListener('mouseleave', () => {
		console.log(dropdown);
		dropdown.querySelector('.dropdown-arrow').src =
			'assets/icon-arrow-down.svg';
	});
});

const expansibles = document.querySelectorAll('.expansible');

expansibles.forEach((expansible) => {
	expansible
		.querySelector('.expansible-display')
		.addEventListener('click', () => {
			console.log('click');
			const arrow = expansible.querySelector('img');

			const content = expansible.querySelector('.expansible-content');
			if (content.classList.contains('expanded')) {
				content.classList.remove('expanded');
				arrow.src = 'assets/icon-arrow-down.svg';
			} else {
				content.classList.add('expanded');
				arrow.src = 'assets/icon-arrow-up.svg';
			}
		});
});

const sideMenu = document.querySelector('.side-nav');
const showSideMenu = () => (sideMenu.style.right = '0');
const hideSideMenu = () =>
	(sideMenu.style.right = `-${sideMenu.clientWidth + 30}px`);
