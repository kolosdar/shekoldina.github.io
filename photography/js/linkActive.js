var menu__items = document.getElementsByClassName("menu__link");
var url = document.location.href;
for (var i = 0; i < menu__items.length; i++) {
	if (url == menu__items[i].href) {
		menu__items[i].classList.add('menu__link_active');
	}
}
