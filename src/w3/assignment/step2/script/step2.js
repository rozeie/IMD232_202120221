let center;
let radius = 50;
let velocity;
let acceleration;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background(255);
  center = createVector(width / 2, height / 2);
  velocity = createVector();
}

function draw() {
  background(255);

  let target = createVector(mouseX, mouseY).sub(center);

  acceleration = target.copy().mult(0.001);

  velocity.add(acceleration);

  center.add(velocity);

  fill('black');
  stroke(0);
  ellipse(center.x, center.y, radius * 2);

  stroke(255, 0, 0);
  line(center.x, center.y, mouseX, mouseY);

  stroke(0, 0, 255);
  line(center.x, center.y, mouseX, mouseY);
}

function update() {
  acceleration.limit(50);
}
