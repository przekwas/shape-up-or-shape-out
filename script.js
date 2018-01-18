//global variables
const MAX = 600;
let container = document.getElementById("shape-field");

//global functions
function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.div = document.createElement('div');
        this.div.classList.add('shape');
        this.div.style.height = `${height}px`;
        this.div.style.width = `${width}px`;
        this.randomLocation();
        container.appendChild(this.div);
    }

    randomLocation() {
        let xVal = randomVal(0, MAX);
        let yVal = randomVal(0, MAX);
        if (xVal - this.width < 0) {
            this.div.style.left = `0px`;
            this.div.style.top = `${yVal - this.height}px`;
        } else if (yVal - this.height < 0) {
            this.div.style.left = `${xVal - this.width}px`;
            this.div.style.top = `0px`;
        } else {
            this.div.style.top = `${yVal - this.height}px`;
            this.div.style.left = `${xVal - this.width}px`;
        }

    }
}

let btnRectangle = document.getElementById("rectangle-button");
btnRectangle.addEventListener("click", function () {
    let sh = new Shape(50, 50);
});