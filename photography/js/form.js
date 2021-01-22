let formButton = document.getElementsByClassName("form__button")[0];
let formInputs = document.getElementsByClassName("form__input");
let modalContainer = document.getElementsByClassName("modal-container")[0];
let modalContainerClose = document.getElementsByClassName("modal-container__close")[0];
let modalContainerButton = document.getElementsByClassName("modal-container__button")[0];





function Close() {
	modalContainer.style.display = "none";
}

function ShowModal(event) {
	event.preventDefault();
}
function Modal() {
	modalContainer.style.display = "block";
}

formButton.addEventListener("click", ShowModal);
formButton.addEventListener("click", Modal);
modalContainerClose.addEventListener("click", Close);
modalContainerButton.addEventListener("click", Close);
