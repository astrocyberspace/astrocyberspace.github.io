
var xSeed = Math.random();
var ySeed = Math.random();
var zSeed = Math.random();

var init = 0.90;
var seed = 0.2;

var multiplier = 360;

function beginRotating()
{
	xSeed = 1;
	ySeed = 1;
	zSeed = 1;
	
	rotate();
}

function rotate()
{
	setTimeout(rotate, 500);
	
	xSeed *= init + (seed * Math.random());
	ySeed *= init + (seed * Math.random());
	zSeed *= init + (seed * Math.random());
	
	if(xSeed > 2)xSeed = 2;
	if(ySeed > 2)ySeed = 2;
	if(zSeed > 2)zSeed = 2;
	if(xSeed < 0.5)xSeed = 0.5;
	if(ySeed < 0.5)ySeed = 0.5;
	if(zSeed < 0.5)zSeed = 0.5;
	
	var x = xSeed * multiplier;
	var y = ySeed * multiplier;
	var z = zSeed * multiplier;
	
	var cube = document.getElementById("cube1");
	cube.style['transform'] = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg)';
}


window.addEventListener("load", beginRotating);
