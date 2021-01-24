
function getLetter() {
	var i, j, letter, a;
	var names = document.getElementsByClassName("slideshow-container__image-name");
	console.log(names.length);
	for (i = 0; i <= names.length; i++) {
		for (j = 0; j <= a.length; j++) {
		letter = names[i].innerHTML;
		a[j] = letter.split("");
		console.log(a[j]);
	}
}
	
}