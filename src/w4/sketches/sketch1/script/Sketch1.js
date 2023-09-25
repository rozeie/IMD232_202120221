let mover;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  mover = new MoverNoMass(width / 2, height / 2, 50); // x, y, r 값을 넣어줘야함
}
function draw() {
  background(255);

  mover.update();
  mover.checkEdges();
  mover.display();
  mover.displayVectors();
}
