// DM2008 — Activity 1a
// Simple Creatures (20 min)

// Run the sketch, then click on the preview to enable keyboard
// Use the 'Option' ('Alt' on Windows) key to view or hide the grid
// Use the 'Shift' key to change overlays between black & white
// Write the code for your creature within the space provided

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#480058");

  // YOUR CODE HERE
  //body
    fill("#FFA213")
   noStroke()
  rect (80,180,180,60)
    fill("#FFffff")
    rect (80,220,180,20)
  //foot
      fill("#FFA213")
    rect (140,200,30,80)
 rect (200,200,30,80)
  //ear
  triangle(130, 180, 100, 180, 110, 140)
     fill("#FFffff")
    triangle(110, 180, 100, 180, 110, 140)
 //snout
  fill("#FFA213")
  square (60,200,25)
    fill("#B72818")
square (60,200,10)
  //eyes
    fill("#480058")
    ellipse (120,200,15)
   fill("#ADEEC5")
  ellipse (120,200,10)

  //tail * White tip goes first
   fill("#FFffff")
      square (285,200,30)
    fill("#FFA213")
      square (260,200,30)
  //whisker
  stroke("#B72818")
  strokeWeight(2)
line (80,210,100,205)
  line (80,215,100,210)
  
  // YOUR CODE HERE
  
  helperGrid(); // do not edit or remove this line
}
