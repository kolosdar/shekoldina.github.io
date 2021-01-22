let contactForm = document.getElementsByClassName("contact-form")[0];
let contactFormButton = document.getElementsByClassName("contact-form__button")[0];
let contactFormInputs = document.getElementsByClassName("contact-form__input");
let modalContainer = document.getElementsByClassName("message")[0];
let subtitleContainer = document.getElementsByClassName("subtitle-container")[0];



function ShowModal() {
	modalContainer.style.display = "block";
}

function CloseModal() {
	modalContainer.style.display = "none";
	subtitleContainer.style.display = "none";
}

function ClearForm() {
	for (let i = 0; i < contactFormInputs.length; i++) {
		contactFormInputs[i].value = "";
	}
}

function CloseForm() {
	contactForm.style.display = "none";
}

function ValidateForm() {
	for (let i = 0; i < contactFormInputs.length; i++) {
		if (!contactFormInputs[i].value) {
			alert("Не ввели поле " + contactFormInputs[i].name);
			return false;
		}
	}
	return true;
}


contactFormButton.addEventListener("click", function(event) { 
	event.preventDefault(); 
	if (ValidateForm()) {
		ShowModal();
	CloseForm();
	ClearForm();
}

});




modalContainerClose.addEventListener("click", CloseModal);
modalContainerButton.addEventListener("click", CloseModal);
