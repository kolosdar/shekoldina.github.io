var burgerMenu = document.getElementsByClassName("burger-menu")[0];
var modalMenu = document.getElementsByClassName("modal-menu")[0];
var closeButton = document.getElementsByClassName("close__button")[0];

function OpenModal() {
	modalMenu.style.display = "block";
}

function CloseModal() {
	modalMenu.style.display = "none";
}

burgerMenu.addEventListener("click", OpenModal);
closeButton.addEventListener("click", CloseModal);