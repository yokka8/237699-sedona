var link = document.querySelector(".switch-button");
var popup = document.querySelector(".hotel-search-form");

var form = popup.querySelector("form");
link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("hotel-search-form");
	popup.classList.toggle("modal-show");
   });