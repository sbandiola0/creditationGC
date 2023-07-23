let intro = document.querySelector('.intro');
let logo1 = document.querySelector('.logo1-header');
let logoSpan1 = document.querySelectorAll('.logo1');
let container = document.querySelector('.container');

window.addEventListener('DOMContentLoaded', () => {
	setTimeout(() => {
		logoSpan1.forEach((span, idx) => {
			setTimeout(() => {
				span.classList.add('active1');
			}, (idx + 1) * 400);
		});

		setTimeout(() => {
			logoSpan1.forEach((span, idx) => {
				setTimeout(() => {
					span.classList.remove('active1');
					span.classList.add('fade1');
				}, (idx + 1) * 50);
			});
		}, 2000);

		setTimeout(() => {
			intro.style.top = '-100vh';
			container.style.display = 'block'; // Show the container after the intro animation
		}, 2300);
	});
});
