"use strict"

window.addEventListener('scroll', function() {
	sessionStorage.setItem("YScroll", pageYOffset + "px");
});

window.onload = () => {
		pageYOffset = sessionStorage?.getItem("YScroll")
}