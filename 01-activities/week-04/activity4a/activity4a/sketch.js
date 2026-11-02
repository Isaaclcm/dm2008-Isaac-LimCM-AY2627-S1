// DM2008 — Activity 4a [Guided]
// Bake a Cookie (30 min)
//
// A class is a blueprint — Cookie describes what every cookie has and can do.
// Your job is to complete the class, then add movement and a flavor randomizer.
//
// Suggested order:
// 1. Add the missing properties to the constructor (sz, x, y)
// 2. Fix show() so it uses this.flavor, this.x, this.y, this.sz
// 3. Implement move() and randomFlavor()
// 4. Wire them up in keyPressed() and mousePressed()
//
// Stretch: add a second cookie with different starting values.

let cookie;

function setup() {
  createCanvas(400, 400);
  noStroke();
  cookie = new Cookie("vanilla", width / 2, height / 2, 150);
}

function draw() {
  background(230);
  cookie.show();
}

class Cookie {
  constructor(flavor, x, y, sz) {
    // this. binds each value to this specific cookie object
    // Add the missing properties below
    this.flavor = flavor;
    this.sz = sz;
    this.x = x;
    this.y = y;
  }

  show() {
    // Fix this method — it should use this.flavor, this.x, this.y, this.sz
    switch (this.flavor) {
      case "chocolate":
        fill(196, 146, 96);
        break;

      case "vanilla":
        fill(255, 223, 150);
        break;

      default:
        fill(220, 180, 120);
    }
    ellipse(this.x, this.y, this.sz);
  }

  // Add a move() method — update this.x or this.y based on which key is pressed
  move(val1,val2) {
    this.x += val1;
    this.y += val2;
  }

  // Add a randomFlavor() method — set this.flavor to one of at least 3 options
  randomFlavor() {
    this.flavor = random(["vanilla", "chocolate", "default"]);
  }
}

// Call cookie.move() when an arrow key is pressed
function keyPressed() {
  if (key == "a") {
    cookie.move(-10,0);
  }
  if (key == "d") {
    cookie.move(10,0);
  }
    if (key == "s") {
    cookie.move(0,10);
  }
   if (key == "w") {
    cookie.move(0,-10);
  }
}

// Call cookie.randomFlavor() when the mouse is clicked
function mousePressed() {
  cookie.randomFlavor();
}
