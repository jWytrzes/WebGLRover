import View from './classes/View.js';

document.addEventListener('DOMContentLoaded', function () {

	Physijs.scripts.worker = '/lib/physijs_worker.js';
	Physijs.scripts.ammo = '/lib/ammo.js';

	const view = new View();
	view.render();
	window.view = view; //For debugging only
});
