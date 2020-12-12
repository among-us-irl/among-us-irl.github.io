var runBackground = 1;
var canvasElem = document.getElementById("background-canvas");

var ctx = canvasElem.getContext("2d");
var stars = [];

var starCount = 12 * Math.floor(window.innerWidth / 100);
let colourSelection = {
    "#ffffff": 5, // white
    "#bbffff": 3, // cyan
    "#ffffbb": 3, // yellow
    "#ffbbbb": 2, // pale red
    "#ff4444": 1 // red
};

// generate weighted list
let colours = [];

for (let colour in colourSelection) {
    let count = colourSelection[colour];
    for (let i = 0; i < count; ++i) {
        colours.push(colour);
    }
}

// add stars
for (let i = 0; i < starCount; ++i) {
	stars.push({
		"x": Math.random(),
		"y": Math.random(),
		"rad": 1 + Math.floor(Math.random() * 5),
        "colour": colours[Math.floor(Math.random() * colours.length)]
	});
}

function backgroundCycle() {
	canvasElem.width = window.innerWidth;
	canvasElem.height = window.innerHeight;
	let scale = canvasElem.height / 1200;
	ctx.clearRect(0, 0, canvasElem.clientWidth, canvasElem.clientHeight);
    let bound = scale * 0.05;
    
	for (let i = 0; i < stars.length; ++i) {
		let star = stars[i];
        ctx.fillStyle = star.colour;
		ctx.beginPath();
		ctx.arc(star.x * canvasElem.width, star.y * canvasElem.height, scale * star.rad, 0, 2 * Math.PI - 1);
		ctx.fill();

		star.x += star.rad * 0.0001;

		if (star.x > 1 + bound) {
			star.x = -bound;
			star.y = Math.random();
		}
	}
	
	setTimeout(function() {
		if (runBackground == 1) {
			backgroundCycle();
		}
	}, (window.innerWidth**2) / 100000);
}

window.onload = function() {
	//console.log("yeet");
	//let reader = document.getElementById("reader");

	backgroundCycle();
}