// DM2008 — Activity 3b
// One Function Wonder (20 min)
//
// Write a function that draws a shape or group of shapes.
// It should take at least one parameter — try x, y, size, or color.
// Call it several times with different values to create variation.
//
// Ideas: a simple face, a flower, a house, an icon.
// Example: myShape(100, 200, 50); myShape(300, 200, 80);
//
// Stretch: call your function inside a for loop to create a repeating pattern.
let rot = 0;
let sz = 80;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background("#ddd2b6");
  noStroke();

  for (let i = 0; i < width / (sz * 2); i++) { for(let j = 0; j < width / (sz * 2); j++)
    cactus(i * sz * 1.5 + sz, j * sz * 1.5 + sz, sz);
  }
  // cactus(80, 80, sz);
  // cactus(200, 80, sz);
  // cactus(320, 80, sz);
}

function cactus(x, y, sz) {
  let c = "#27be91";
  push();
  fill(c);
  translate(x, y);
  rotate(45);
  rect(0, 0, sz);
  pop();

  push();
  fill(c);
  translate(x, y);
  rect(0, 0, sz);
  pop();

  fill("#225d34");
  circle(x, y, sz - sz / 3);

  fill("#49ca70");
  circle(x, y, sz / 3);
}
// Call your function here with different values each time

// Define your function outside draw()
// It can be called from anywhere in your sketch

function myShape(x, y, s) {
  ellipse(x, y, s, s);
}
