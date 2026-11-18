// DM2008 — Activity 2b
// Pattern Making (40 min)
//
// Use a for loop to draw a repeating pattern of shapes.
// Add a condition to introduce variation, and one interaction that changes the rule.
//
// Stretch: try a second row, or turn your row into a 2D grid.
let c;

function setup() {
  createCanvas(400, 400);
}




function draw() {
  background(0);

  //4 Quadrant Colour changer
//top left if mouse is less than half & less then 200
if (mouseX < width/2 && mouseY<height/2) { 
  c = "#888829"}
  //bot left if mouse is less than half & more than 200
else if (mouseX < width/2 && mouseY>=height/2) {
  c = "#886600"}
  
else if (mouseX >= width/2 && mouseY< height/2) {
  c = "#558899"}

else if (mouseX >= width/2 && mouseY>=height/2) {
  c = "#968899"}

  //Universal commands
rectMode(CENTER)
     noStroke ()
  //Elipse
  // % (modulo) is handy for alternating every other shape
  //let interger be 0, as long as i is smaller than width, add 50 to the i
  for (let i = 0; i < width; i += 50) {
    fill (c)
    if (key){
  switch(key) {
      case 'f': 
      ellipse(i + 25, height / 2, i);
  case 'a': 
  ellipse(i + 25, height / 2, 45);
  break;//if a is pressed, turn to large circles along the centre line
    case 's': 
  
      square(i + 25, height / 2, 40)
  break;//if s is pressed, turn to squares along the centre line
    default:
      ellipse(i + 25, height / 2, 20);  
  }//key swap^
  }//key press condition
else {
 ellipse(i + 25, height / 2, 30);  
}//if no key is pressed ^

 
    fill (255)
  if (i % 100 == 0){
     ellipse(i + 25, height / 2, 10)}
    else {ellipse(i + 25, height / 2, 14)}
    
  }//interger print system
  
rect(mouseX, mouseY, 10 );

   if (mouseIsPressed) {
     c=255, 0, 0   }
}
 