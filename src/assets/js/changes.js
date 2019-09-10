const toIncrease= () =>{
	const element = document.getElementById("toIncDecr");
	const style = window.getComputedStyle(element,null).getPropertyValue('font-size');
	const fontSize= parseFloat(style);
	element.style.fontSize = (fontSize + 2) +'px';
}
const toDecrease= () =>{
	const incDec = document.getElementById("toIncDecr");
	const style = window.getComputedStyle(incDec,null).getPropertyValue('font-size');
	const fontSize= parseFloat(style);
	incDec.style.fontSize = (fontSize - 2) +'px';
}

const toggleClass= () =>{
	const tog = document.getElementsByTagName('p')[0];
	tog.classList.toggle('out');
}
