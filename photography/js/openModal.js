var modalContainer = document.getElementsByClassName("modal-container")[0];
var contactFormButton = document.getElementsByClassName("contact-form__button")[0];
var contactFormInputs = document.getElementsByClassName("contact-form__input1")[0];
var modalContainerClose = document.getElementsByClassName("modal-container__close")[0];

console.log(modalContainer);
console.log(contactFormButton);
console.log(contactFormInputs);

if (contactFormInputs.value == "") {
contactFormButton.disabled = 'disabled';
}

modalContainerClose.onclick = function() {
	modalContainer.style.display = "none";
}
