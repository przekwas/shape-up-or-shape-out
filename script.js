//global variables
const MAX = 600;
let container = document.getElementById("shape-field");
let info = document.getElementById("property-field");
let selShape = document.getElementById("sel-shape");
let selWidth = document.getElementById("sel-width");
let selHeight = document.getElementById("sel-height");
let selArea = document.getElementById("sel-area");
let selPerim = document.getElementById("sel-perimiter");
let selRadius = document.getElementById("sel-radius");

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
        container.appendChild(this.div);
    }

    randomLocation() {
        let xVal = randomVal(this.width, MAX);
        let yVal = randomVal(this.height, MAX);
        this.div.style.top = `${yVal}px`;
        this.div.style.left = `${xVal}px`;
    }

    describe(id, height, width) {
        selShape.innerHTML = `Selected Shape: ${id}`;
        selWidth.innerHTML = `Width: ${width}`;
        selHeight.innerHTML = `Height: ${height}`;
    }

    remove() {
        container.removeChild(this.div);
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width);
        this.div.id = "rectangle";
        this.div.style.height = `${height}px`;
        this.div.style.width = `${width}px`;
        this.randomLocation();
        this.div.addEventListener("click", () => {
            this.describe(this.div.id, this.height, this.width);
            selArea.innerHTML = `Area: ${height * width}`;
            selPerim.innerHTML = `perimeterer: ${(height * 2) + (width * 2)}`;
        });
        this.div.addEventListener("dblclick", () => {
            this.remove();
        });
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super(sideLength, sideLength);
        this.sideLength = sideLength;
        this.div.id = "square";
        this.div.style.height = `${sideLength}px`;
        this.div.style.width = `${sideLength}px`;
        this.randomLocation();
        this.div.addEventListener("click", () => {
            this.describe(this.div.id, this.sideLength, this.sideLength);
            selArea.innerHTML = `Area: ${sideLength * sideLength}`;
            selPerim.innerHTML = `perimeterer: ${sideLength * 4}`;
        });
        this.div.addEventListener("dblclick", () => {
            this.remove();
        });
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(radius, radius);
        this.radius = radius;
        this.div.id = "circle";
        this.div.style.height = `${radius}px`;
        this.div.style.width = `${radius}px`;
        this.randomLocation();
        this.div.addEventListener("click", () => {
            this.describe(this.div.id, this.radius, this.radius);
            selWidth.innerHTML = `Height/Width: ${radius * 2}`;
            selHeight.innerHTML = `Radius: ${radius}`;
            selArea.innerHTML = `Area: ${(radius * radius) * Math.PI}`;
            selPerim.innerHTML = `Circumfrence: ${2 * Math.PI * radius}`;
        });
        this.div.addEventListener("dblclick", () => {
            this.remove();
        });
    }
}

class Triangle extends Shape {
    constructor(height) {
        super(height, height);
        this.div.id = "triangle";
        this.div.style.borderBottom = `${height}px solid #fff000`;
        this.div.style.borderRight = `${height}px solid transparent`;
        this.randomLocation();
        this.div.addEventListener("click", () => {
            this.describe(this.div.id, this.height, this.width);
            selArea.innerHTML = `Area: ${0.5 * height * height}`;
            selPerim.innerHTML = `perimeterer: ${2 * height + Math.sqrt(2) * height}`;
        });
        this.div.addEventListener("dblclick", () => {
            this.remove();
        });
    }
}

let btnRectangle = document.getElementById("rectangle-button");
btnRectangle.addEventListener("click", function () {
    let rect = document.getElementById("rectangle-text").value;
    let rectArray = rect.split(" ");
    let sh = new Rectangle(rectArray[0], rectArray[1]);
});

let btnSquare = document.getElementById("square-button");
btnSquare.addEventListener("click", function () {
    let sq = document.getElementById("square-text").value;
    let squ = new Square(sq);
});

let btnCircle = document.getElementById("circle-button");
btnCircle.addEventListener("click", function () {
    let cir = document.getElementById("circle-text").value;
    let circ = new Circle(cir);
});

let btnTriangle = document.getElementById("triangle-button");
btnTriangle.addEventListener("click", function () {
    let tri = document.getElementById("triangle-text").value;
    let triang = new Triangle(tri);
});