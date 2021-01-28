"use strict";
function dataShow() {
	document.querySelectorAll("[data-show]").forEach(elem => {
		const result = eval(elem.dataset.show);
		const display = elem.dataset.showmode ?? "block";
		if (result) {
			elem.style.display = display;
		} else {
			elem.style.display = "none";
		}
		return result;
	});
};
