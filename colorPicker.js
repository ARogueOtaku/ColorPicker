var count = 1;

window.onload = function() {
	adjust();
	adjustSize();
}

function add(){
	var newElement = document.createElement('div');
	count++;
	newElement.className = 'myDiv';
	var color = '#' + randColor();
	newElement.style.backgroundColor = color;
	newElement.style.opacity = '0';
	newElement.innerHTML = color;
	newElement.addEventListener('click', function(){
		changeColor(this);
	});
	document.getElementById('wrapper').appendChild(newElement);
	setTimeout(function(){
		newElement.style.opacity = '1';
		adjustSize();
	},500);
	adjust();
}

function adjust(){
	var divs = document.getElementsByTagName('div');
	for(var i = 0; i < divs.length; i++){
		if (divs[i].className == 'container') continue;
		divs[i].style.width = (100/count)+'%';
	}
}

function randColor(){
	var hCode = '', r, g, b;
	var r = Math.floor(Math.random()*255);
	if(r < 16) hCode += '0';
	hCode += r.toString(16);
	var g = Math.floor(Math.random()*255);
	if(g < 16) hCode += '0';
	hCode += g.toString(16);
	var b = Math.floor(Math.random()*255);
	if(b < 16) hCode += '0';
	hCode += b.toString(16);
	//console.log(hCode);
	return hCode.toUpperCase();
}

function changeColor(div){
	if(window.getSelection() != '') return;
	var color = '#' + randColor();
	div.style.backgroundColor = color;
	div.innerHTML = color;
}

function adjustSize(){
	var divs = document.getElementsByTagName('div');
	for(var i = 0; i < divs.length-1; i++){
		if (divs[i].className == 'container') continue;
		divs[i].style.fontSize = divs[i].clientWidth / 7;
		console.log(divs[i].clientWidth);
	}
}