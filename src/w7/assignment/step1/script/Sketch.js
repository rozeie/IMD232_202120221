let traffic; //변수 traffic
let infiniteOffset = 80; // 변수 infiniteOffset, 화면 밖으로 나갔을 때 일정량보다도 넘어가면 나타나게 하도록 함

//스케치 초기 설정
function setup() {
  setCanvasContainer('sketch', 3, 2, true); // 3대 2 비율로 캔버스 생성
  colorMode(HSL, 360, 100, 100, 100); // 컬러모드 HSL
  background('white'); // canvas background color white
  traffic = new Traffic(); // traffic 생성
  // traffic에 Vehicle을 더하고 랜덤 값 생성, 10개 생성
  for (let n = 0; n < 10; n++) {
    traffic.addVehicle(random(width), random(height));
  }
}

//초기화
function draw() {
  background('white'); // 배경 white로 초기화
  traffic.run(); // run 호출 + traffic 업데이트
}

// 마우스 드래그 하는 위치에 생성
function mouseDragged() {
  traffic.addVehicle(mouseX, mouseY);
}
