const cNum = 8;
const rNum = 8;
let gridC;
let gridR;
let angleBegin = 0;
let angleBeginVel;
let angleStep;

function setup() {
  setCanvasContainer('mySketchGoesHere', 1, 1, true);
  gridC = height * 0.4;
  angleBegin = 0;
  angleBeginVel = (TAU / 360) * 0.5;
  colorMode(HSL, 360, 100, 100, 100);
  background(360, 0, 100);
}

function draw() {
  background(360, 0, 100);

  const x = rad * cos(angle);
  const y = rad * sin(angle);

  for (let r = 0; r < rNum; r++) {
    for (let c = 0; c < cNum; c++) {
      push();
      translate(translate(width / 2, height / 2));
      rotate(this.vel.heading());
      pop();
    }
  }

  fill(127);
  stroke(0);
  strokeWeight(2);
  line(0, 0, x, y);
  circle(x, y, 48);

  angleBegin += angleBeginVel;
}
