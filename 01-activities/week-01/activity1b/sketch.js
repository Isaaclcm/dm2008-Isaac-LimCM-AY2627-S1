// DM2008 — Activity 1b [Ryoji Ikeda]
// Learning By Making (30 min)

let x;
let w;
let c;

function setup() {
  createCanvas(800, 800);
  background(255);
  noStroke();
  fill(0);
}

function draw() {
  background(15,0,20,10);
  rectMode(CORNER)

  //rectangle lower
 x = random(width);
  w = random(1, 100);
  fill(random(100), random(255), random(0));
  rect(x,width/1.2,w,height);


  //Rectangle upper
  x = random(width,width/4);
  w = random(1, 100);
  fill(random(255), 0, random(100));
  rect(x, 0, w, height/3);

  //moving bob
  rectMode(CENTER)
   fill (random(100),random(100),random(255))
  rect(mouseX, mouseY, w );
 
  
}

function keyPressed() {
  saveCanvas("activity1b-image", "jpg");
}
