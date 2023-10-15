let mover;
let gravity;
let mVec;
let pMVec;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  mover = new Mover(width / 2, height / 2, 50);
  gravity = createVector(0, 1);

  mVec = createVector();
  pMVec = createVector();

  background(255);
}

function draw() {
  const force = p5.Vector.mult(gravity, mover.mass);

  background(255);
  mover.update();
  mover.display();
}

function mouseMoved() {}

function mousePressed() {
  pMVec.set(pmouseX, pmouseY);
}

function mouseDragged() {
  mVec.set(mouseX, mouseY);
  let gravityForce = gravity.copy().mult(mover.mass);
  mover.applyForce(gravityForce);
  let throwingForceVec = p5.Vector.sub(mVec, pMVec);
  throwingForceVec.mult(throwingForce);
  mover.applyForce(throwingForceVec);
  pMVec.set(mVec);
}

function mouseReleased() {
  pMVec.set(pmouseX, pmouseY);
  mVec.set(mouseX, mouseY);

  mover.applyForce(throwingForce);
}
