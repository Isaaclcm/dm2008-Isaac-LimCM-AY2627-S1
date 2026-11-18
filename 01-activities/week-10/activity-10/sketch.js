//Change at least two visual variables in real time
//Include at least two types of input (e.g., a slider and a button)
//Feel intentional in layout and design

let colorBtn, sizeSlider, shapeSelect;
let shapeColor;
let controlPanel;
let MSize, MShape;


function setup() {
  createCanvas(640, 400);
  noStroke();
  textFont("Helvetica, Arial, sans-serif");
  
    //Control Panel
  controlPanel = createDiv();
  controlPanel.position(40, 100);
  
  // starting color
  shapeColor = color(random(255), random(255), random(255));

  MTitle = createP("Control Panel");
  MTitle.parent(controlPanel);
  MTitle.style("margin", "0");
     MTitle.style("font-size", "24px");
  
  function randomShapeColor() {
    shapeColor = color(random(255), random(255), random(255));
  }

  // Slider: controls size
  MSize = createP("Size");
  MSize.parent (controlPanel);
  MSize.style("margin", "0");
  sizeSlider = createSlider(20, 220, 100, 1);
  sizeSlider.parent (controlPanel);
 

  // Dropdown: choose shape
  MShape = createP("Shape");
  MShape.parent(controlPanel);
  MShape.style("margin", "0");

  shapeSelect = createSelect();
  shapeSelect.parent (controlPanel);
  

  shapeSelect.option("Ellipse");
  shapeSelect.option("Square");
  shapeSelect.option("Triangle");
  shapeSelect.style("font-family", "Verdana, sans-serif");
shapeSelect.style("font-size", "14px");
  
  // Button: change color
 // Dropdown: choose shape
  MCol = createP("Color");
  MCol.parent(controlPanel);
  MCol.style("margin", "0");
  
  colorBtn = createButton("Random");
  colorBtn.parent (controlPanel);
  colorBtn.mousePressed(randomShapeColor);
  colorBtn.style("font-family", "Verdana, sans-serif");
  colorBtn.style("font-size", "14px");

controlPanel.style("padding", "20px");
controlPanel.style("background", "#d6d6d6");
controlPanel.style("border-radius", "20px");
controlPanel.style("font-family", "Verdana, sans-serif");
  controlPanel.style("font-weight", "bold");
  controlPanel.style("font-size", "14px");
  // Stack controls vertically
  controlPanel.style("gap", "4px");
  controlPanel.style("display", "flex");
  controlPanel.style("flex-direction", "column");



  
}

function draw() {
  background(240);

  push();
  translate(width * 0.65, height * 0.5);
  let s = sizeSlider.value();

  fill(shapeColor);

  // draw chosen shape
  let choice = shapeSelect.value();
  if (choice === "Ellipse") {
    ellipse(0, 0, s, s);
  } else if (choice === "Square") {
    rectMode(CENTER);
    rect(0, 0, s, s);
  } else if (choice === "Triangle") {
    triangle(-s * 0.6, s * 0.5, 0, -s * 0.6, s * 0.6, s * 0.5);
  }
  pop();
}
