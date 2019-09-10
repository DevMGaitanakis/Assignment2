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
