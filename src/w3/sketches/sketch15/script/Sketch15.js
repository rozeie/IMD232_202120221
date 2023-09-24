let pos;
let vel;
let acc;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background(255);
  pos = createVector(width / 2, height / 2);
  vel = createVector(random(-1, 1), random(-1, 1));
}

function draw() {
  background(255);

  update();
  stroke(255, 0, 0);
  check();
  line(pos.x, pos.y, pos.x + acc.x * 1000, pos.y + acc.y * 1000);

  stroke(0, 0, 255);
  line(pos.x, pos.y, pos.x + vel.x * 100, pos.y + vel.y * 100);

  let targetX = mouseX;
  let targetY = mouseY;
  let targetVector = createVector(targetX - pos.x, targetY - pos.y);

  stroke(0);
  line(pos.x, pos.y, pos.x + targetVector.x, pos.y + targetVector.y);

  fill('black');
  stroke(0);
  ellipse(pos.x, pos.y, 50, 50);
}

function update() {
  acc = createVector(random(-0.1, 0.1), random(-0.1, 0.1));
  vel.add(acc);
  pos.add(vel);
}

function check() {
  if (pos.x < 0 || pos.x > width) {
    vel.x *= -1;
  }
  if (pos.y < 0 || pos.y > height) {
    vel.y *= -1;
  }
}
