(function() {

	const controlls = document.querySelectorAll(".btn");
	const activeClass = "btn__action";

	controlls.forEach(function(control) {
		control.addEventListener("click", function(e) {
			e.preventDefault();
			controlls.forEach(function(link) {
				link.closest(".btn").classList.remove(activeClass);
			})
			control.closest(".btn").classList.add(activeClass);
		})})
})();