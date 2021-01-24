let burgerMenu = document.getElementsByClassName("burger-menu")[0];
let modalMenu = document.getElementsByClassName("modal-menu")[0];
let burgerMenuItems = document.getElementsByClassName("burger-menu__item");
let body = document.getElementsByClassName("html-body")[0];

function ModalMenuOpen() {

	burgerMenu.classList.toggle("close");
	modalMenu.classList.toggle("close");
	body.classList.toggle("dark-theme");
}


function CloseToggle() {

}

function ModalMenuClose() {
	modalMenu.style.display = "none";
}

burgerMenu.addEventListener("click", ModalMenuOpen);


if (burgerMenu.classList.contains("close")) {
	this.onclick = function() {
		ModalMenuClose();
	}
}