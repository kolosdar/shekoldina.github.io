function slideShow() {
	var images = document.getElementsByClassName("photo-container__img");
	for (i = 0; i <= images.length; i++) {
		images[i].style.display = "none";
	}
}

var photoes = document.getElementsByClassName("photo-container__item");
for (i = 0; i <= photoes.length; i++) {
	var photo = photoes[i];
	photo.addEventListener("click", function, false);
}