//Declare and initialize global variables
var canvas;
var clearButton;

function setup() {
canvas = createCanvas(500,400);
canvas.parent("#canvas-area");
canvas.mousePressed(drawEllipse);
clearButton = select("#clear-button");
clearButton.mousePresed(clearScreen);
background(65,60,88);
}

function drawEllipse() {
  fill("ff0000");
  noStroke();
ellipse(mouseX, mouseY,100,100);
}

funtion clearScreen() {
background(65,60,88);
}
