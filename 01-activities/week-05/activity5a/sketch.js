// DM2008 — Activity 5a [Guided]
// Colliding Circles (30 min)
//
// A vector stores position and movement together — cleaner than separate x and y variables.
// Your job is to get two balls moving, then detect and respond to their collision.
//
// Suggested order:
// 1. Create two Ball objects in setup() - ok
// 2. Check the distance between them in draw() ok
// 3. Trigger a visual response when they collide ok
// 4. Implement edge behaviour in move() — wrap or bounce, your choice
//
// Stretch: add a third ball, or make the collision response affect both balls.

let balls = [];
let wasColliding = false;

function setup() {
  createCanvas(400, 400);
  // Create two balls at different starting positions
  balls.push(new Ball(100, 200));
  balls.push(new Ball(300, 200));
}

function draw() {
  background(230);

  // Check collision between the two balls
  // dist() measures the distance between their centers
  // They overlap when that distance is less than the sum of their radii

  let d = dist(balls[0].pos.x, balls[0].pos.y, balls[1].pos.x, balls[1].pos.y);

  let colliding = d < balls[0].r + balls[1].r;

  if(colliding && !wasColliding) {
    balls[0].vel.mult(-1);
    // balls[0].vel.x *= -1;
    // balls[0].vel.y *= -1;
    balls[1].vel.mult(-1);
    // balls[1].vel.x *= -1;
    // balls[1].vel.y *= -1;  
  }

  wasColliding = colliding;

  // true when the balls overlap, false otherwise

  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].show(colliding);
  }
}

class Ball {
  constructor(x, y) {
    // pos and vel are vectors — they store x and y together as one object
    this.pos = createVector(x, y);
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.r = 30;
  }

  move() {
    // Adding the velocity vector to position moves the ball each frame
    this.pos.add(this.vel);

    // Handle edges — could you make this bounce instead of wrap?
    if (this.pos.x > width) {
      this.vel.x *= -1;
    }
    if (this.pos.x < 0) {
      this.vel.x *= -1;
    }
    if (this.pos.y > height) {
      this.vel.y *= -1;
    }
    if (this.pos.y < 0) {
      this.vel.y *= -1;
    }
  }

  show(colliding) {
    // colliding is true or false — try using it in an if/else to change fill or size
    if (colliding == true) {
      fill(200, 10, 10);
      noStroke();
    } else {
      fill(10, 180, 220);
      noStroke();
    }

    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}
