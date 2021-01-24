var slideIndex = 1;


function OpenModal() {
	document.getElementsByClassName("modal-container")[0].style.display = "block";
}

function CloseModal() {
	document.getElementsByClassName("modal-container")[0].style.display = "none";
}

function plusSlides(n) {
  ShowSlides(slideIndex += n);
}

function currentSlide(n) {
  ShowSlides(slideIndex = n);
}

function ShowSlides(n) {
	let modalContainerContent = document.getElementsByClassName("modal-container__content");
	if (n > modalContainerContent.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = modalContainerContent.length;
	}
	for (let i = 0; i < modalContainerContent.length; i++) {
		modalContainerContent[i].style.display = "none";
	}
	modalContainerContent[slideIndex - 1].style.display = "block";
}

let photoContainerItem = document.getElementsByClassName("photo-container__item");

for (let i = 0; i < photoContainerItem.length; i++) {
	photoContainerItem[i].onclick = function() {
		OpenModal();
		currentSlide(i + 1);
	}
}

let modalContainerClose = document.getElementsByClassName("modal-container__close")[0];
modalContainerClose.addEventListener("click", CloseModal);

let prev = document.getElementsByClassName("prev")[0];
let next = document.getElementsByClassName("next")[0];

prev.addEventListener("click", function() { 
	plusSlides(-1);
});
next.addEventListener("click", function() {
	plusSlides(1);
})

