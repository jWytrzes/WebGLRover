import View from './classes/View.js';

document.addEventListener('DOMContentLoaded', function () {
	const view = new View();
	view.render();
	window.view = view; //For debugging only
});
