function toggleDarkMode() {
	event.preventDefault();
	const darkModeToggle = document.getElementById('darkModeToggle');
	const body = document.body;
	const navbar = document.querySelector('.navbar');
	const dropdownContent = document.querySelector('dropdown-content');
	const cards = document.querySelectorAll('.card');
	const cardContents = document.querySelectorAll('.card-content');
	const modals = document.querySelectorAll('.modalcontainer'); // Target all modal containers with the common class
	const h2Tags = document.querySelectorAll('h2');
	const aTags = document.querySelectorAll('a');

	body.classList.toggle('dark-mode');
	navbar.classList.toggle('dark-mode');

	dropdownContent.classList.toggle('dark-mode');
	cards.forEach((card) => card.classList.toggle('dark-mode'));
	cardContents.forEach((cardContent) =>
		cardContent.classList.toggle('dark-mode')
	);
	h2Tags.forEach((h2) => h2.classList.toggle('dark-mode'));
	aTags.forEach((a) => a.classList.toggle('dark-mode'));

	if (body.classList.contains('dark-mode')) {
		darkModeToggle.innerHTML = '&#x2600;';
		darkModeToggle.setAttribute('title', 'Going Light');
	} else {
		darkModeToggle.innerHTML = '&#x1F319;';
		darkModeToggle.setAttribute('title', 'Going Dark');
	}
}
let activeDropdown = null;
if (activeDropdown !== null) {
	activeDropdown.style.display = 'none';
	activeDropdown = null;
}

function Fill() {
	document.getElementById('moon').style.backgroundImage =
		'Assets/GC-navbar.png';
	// if (body.classList.contains('dark-mode')) {
	// 	document.getElementById('moon').innerHTML = 'light';
	// 	document.getElementById('moon').style.backgroundColor = 'black';
	// } else {
	// 	document.getElementById('moon').innerHTML = 'dark';
	// }
}

function Moon(x) {
	x.classList.toggle('fa-solid');
}