//global variables
const MAX = 600;
let container = document.getElementById("shape-field");
let info = document.getElementById("property-field");
let selShape = document.getElementById("sel-shape");
let selWidth = document.getElementById("sel-width");
let selHeight = document.getElementById("sel-height");
let selArea = document.getElementById("sel-area");
let selPerim = document.getElementById("sel-perimiter");

//global functions
function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

class Shape {
    constructor() {
        this.div = document.createElement('div');
        this.div.classList.add('shape');
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

class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
        this.div.id = "square";
        this.div.style.height = `${height}px`;
        this.div.style.width = `${width}px`;
        this.randomLocation();
        this.div.addEventListener("click", function () {
            selShape.innerHTML = `Selected Shape: Rectangle`;
            selWidth.innerHTML = `Width: ${width}`;
            selHeight.innerHTML = `Height: ${height}`;
            selArea.innerHTML = `Area: ${height * width}`;
            selPerim.innerHTML = `Perimiter: ${(height * 2) + (width * 2)}`;
        });
    }
}

let btnRectangle = document.getElementById("rectangle-button");
btnRectangle.addEventListener("click", function () {
    let rect = document.getElementById("rectangle-text").value;
    let rectArray = rect.split(" ");
    let sh = new Rectangle(rectArray[0], rectArray[1]);
});