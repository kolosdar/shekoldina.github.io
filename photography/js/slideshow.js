
var slideIndex = 0;
showSlidesAuto();

function showSlidesAuto() {
  var i;
  var slides = document.getElementsByClassName("slideshow-container__item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlidesAuto, 6000); // Change image every 2 seconds
}

function plusSlides(n) {
  setTimeout(ShowSlides(slideIndex += n), 6000);
}

function currentSlide(n) {
  ShowSlides(slideIndex = n);
}

function ShowSlides(n) {
	var slides = document.getElementsByClassName("slideshow-container__item");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
	console.log("work");
}

let prev = document.getElementsByClassName("prev")[0];
let next = document.getElementsByClassName("next")[0];

prev.addEventListener("click", function() { 
	plusSlides(-1);
});
next.addEventListener("click", function() {
	plusSlides(1);
});