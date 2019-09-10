$('a').click((event) => {
	let scrollOffset = 0;

	if ($(this).is('a[href^="#"]') && $(this).attr('href').length >= 2) {
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top + scrollOffset
		}, 1500);
		return false;
	}
});

function toIncrease(){
	var element = document.getElementById("toIncDecr");
	var style = window.getComputedStyle(element,null).getPropertyValue('font-size');
	var fontSize= parseFloat(style);
	element.style.fontSize = (fontSize + 2) +'px';
}
function toDecrease(){
	var incDec = document.getElementById("toIncDecr");
	var style = window.getComputedStyle(incDec,null).getPropertyValue('font-size');
	var fontSize= parseFloat(style);
	incDec.style.fontSize = (fontSize - 2) +'px';
}

function toggleClass(){
	var tog = document.getElementsByTagName('p')[0];
	tog.classList.toggle('out');
}
