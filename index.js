import View from './classes/View.js';
import TestView from './classes/TestView.js'

document.addEventListener('DOMContentLoaded', function () {
	const view = new TestView();
	view.render();
	window.view = view; //For debugging only
});
