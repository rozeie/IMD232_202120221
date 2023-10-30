let dom;
let htmlDom;

function setup() {
  dom = select('#canvas');
  console.log('p5 select', dom);
  console.log('queryselector', htmlDom);

  htmlDom = document.querySelector('#cavas');
  console.log('p5 select', dom.width);
  console.log('queryselector', htmlDom.clientWidth);

  let canvas = createCanvas(600, 400);
  canvas.parent(dom);
  background('black');
}
function draw() {}

function window() {
  console.log('리사이즈됩니다');
  dom = select('#canvas');
  console.log(dom);
}
