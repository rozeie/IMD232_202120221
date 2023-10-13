const cNum = 8;
const rNum = 8;
const margin = 20;
let angleBegin = 0;
let angleStep = 1;
const colors = ['#FEDC97', '#B5B682', '#28666E', '#7C3F58'];

function setup() {
  setCanvasContainer('mySketchGoesHere', 1, 1, true);
  colorMode(HSL, 360);
  background(360);
  angleBeginVel = radians(1);
}

function draw() {
  background(360);

  for (let r = 0; r < rNum; r++) {
    for (let c = 0; c < cNum; c++) {
      let x = margin + (c * (width - 2 * margin)) / cNum;
      let y = margin + (r * (height - 2 * margin)) / rNum;
      let centerX = x + (width - 2 * margin) / (2 * cNum);
      let centerY = y + (height - 2 * margin) / (2 * rNum);

      let index = (r * cNum + c) % colors.length;
      fill(colors[index]);

      push();
      translate(centerX, centerY);
      rotate(angleBegin);
      ellipse(0, 0, (width - 2 * margin) / cNum, (height - 2 * margin) / rNum);
      pop();
    }
  }

  angleBegin += angleBeginVel;
}
