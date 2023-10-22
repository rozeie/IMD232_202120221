const cNum = 8;
const rNum = 8;
const margin = 20;
const spacing = 20;
let angleBegin = 0;
let angleStep = 15;

function setup() {
  setCanvasContainer('mySketchGoesHere', 1, 1, true);
  colorMode(HSL, 360, 100, 100, 100);
  background(360, 0, 100);
}

function draw() {
  background(360, 0, 100);

  for (let r = 0; r < rNum; r++) {
    for (let c = 0; c < cNum; c++) {
      let x = margin + c * ((width - 2 * margin) / cNum + spacing);
      let y = margin + r * ((height - 2 * margin) / rNum + spacing);
      let centerX = x + (width - 2 * margin) / (2 * cNum);
      let centerY = y + (height - 2 * margin) / (2 * rNum);

      push();
      translate(centerX, centerY);
      rotate(radians(angleBegin));
      noFill();
      stroke(0);
      strokeWeight(2);
      ellipse(0, 0, (width - 2 * margin) / cNum, (height - 2 * margin) / rNum);
      pop();
    }
  }

  angleBegin += radians(angleStep);
}
