
let wrapperHeight = document.getElementById("wrapper").offsetHeight;
let blue_box = document.getElementById("box");
let animateDirection = 0; // animation direction, Ex- 0 for animate right bottom.

const animateBox = () => {

    let PositionLeft = blue_box.offsetLeft;
    let PositionTop = blue_box.offsetTop;

    if ((PositionLeft + 100) >= screen.width || (PositionTop + 100) >= wrapperHeight) {
        animateDirection = 1;
    } else if (blue_box.offsetLeft < 0) {
        animateDirection = 0;
    }

    if (animateDirection === 0) {
        PositionLeft = PositionLeft + 10;
        PositionTop = PositionTop + 10;
    } else {
        PositionLeft = PositionLeft - 10;
        PositionTop = PositionTop - 10;
    }

    blue_box.style.left = PositionLeft + "px";
    blue_box.style.top = PositionTop + "px";

    setTimeout(function () { animateBox() }, 1000);
}

setTimeout(function () { 
	animateBox();
	console.log('called')
}, 1000); // initialize 

