function setup() {
  setCanvasContainer('p5-canvas', 1, 1, true);
  background('white');
}

function draw() {
  rectMode(CENTER);

  //바닥
  fill('#BF9F63');
  strokeWeight(0);
  rect(500, 900, 1000, 600);

  //카페트
  fill('#59452C');
  strokeWeight(0);
  quad(150, 690, 790, 690, 900, 870, 70, 870);
  fill('#BF532C');
  strokeWeight(0);
  quad(160, 700, 780, 700, 870, 850, 100, 850);

  //벽
  fill('#F2F1E9');
  rect(500, 300, 1000, 600);

  //스탠드
  //스탠드바닥
  fill('#3E4349');
  strokeWeight(0);
  rect(60, 670, 100, 15);
  //스탠드기둥
  fill('#3E4349');
  strokeWeight(0);
  rect(60, 460, 15, 430, 10, 10);
  //스탠드기둥
  stroke('#3E4349');
  strokeWeight(15);
  line(40, 280, 200, 230);
  //스탠드기둥
  stroke('#3E4349');
  strokeWeight(15);
  line(180, 220, 220, 290);
  //lightbulb3
  fill('#F5E1B3');
  strokeWeight(0);
  circle(223, 350, 80);
  //lightbulb2
  fill('#F1C31B');
  strokeWeight(0);
  circle(223, 350, 60);
  //lightbulb1
  fill('#E8AB09');
  strokeWeight(0);
  circle(223, 350, 40);
  //스탠드
  fill('#3E4349');
  strokeWeight(0);
  rect(223, 320, 120, 70, 500, 500, 0, 0);

  //쇼파
  //쇼파 등받이 왼쪽
  fill('#324873');
  strokeWeight(0);
  rect(220, 530, 260, 200, 40, 20, 0, 0);
  //쇼파 등받이 오른쪽
  fill('#324873');
  strokeWeight(0);
  rect(480, 530, 260, 200, 20, 40, 0, 0);

  //쇼파쿠션 왼쪽
  fill('#D7A030');
  strokeWeight(0);
  rect(400, 540, 80, 80, 10, 10, 10, 10);
  fill('#BD7F2A');
  rect(400, 540, 20, 20, 20);
  //쇼파쿠션 오른쪽
  fill('#D7A030');
  strokeWeight(0);
  rect(490, 540, 80, 80, 10, 10, 10, 10);
  fill('#BD7F2A');
  rect(490, 540, 20, 20, 20);

  //쇼파 앉는곳 왼쪽
  fill('#13253F');
  strokeWeight(0);
  rect(220, 610, 260, 80, 40, 40, 0, 0);
  //쇼파 앉는곳 오른쪽
  fill('#13253F');
  strokeWeight(0);
  rect(480, 610, 260, 80, 40, 40, 0, 0);

  //쇼파 앉는곳 바닥
  fill('#D0D3D9');
  strokeWeight(0);
  rect(350, 650, 450, 50);

  //쇼파 팔걸이 왼쪽
  fill('#516DA6');
  strokeWeight(0);
  rect(100, 630, 80, 180, 15, 15, 5, 5);
  //쇼파 팔걸이 오른쪽
  fill('#516DA6');
  strokeWeight(0);
  rect(600, 630, 80, 180, 15, 15, 5, 5);

  //책
  //책1
  fill('#F1C31B');
  strokeWeight(0);
  rect(120, 100, 25, 90, 5, 5, 5, 5);
  fill('#DFA204');
  strokeWeight(0);
  rect(120, 70, 25, 10);
  fill('#DFA204');
  strokeWeight(0);
  rect(120, 110, 10, 50);
  //책2
  fill('#F29F05');
  strokeWeight(0);
  rect(147, 110, 30, 80, 5, 5, 5, 5);
  fill('#F28705');
  strokeWeight(0);
  rect(147, 90, 30, 10);
  fill('#F28705');
  strokeWeight(0);
  rect(147, 120, 15, 50);
  //책3
  fill('#9BBF65');
  strokeWeight(0);
  rect(207, 130, 90, 25, 3, 3, 3, 3);
  fill('#65A603');
  strokeWeight(0);
  rect(175, 130, 10, 25);
  fill('#65A603');
  strokeWeight(0);
  rect(210, 130, 45, 10);
  //책4
  fill('#63BBF2');
  strokeWeight(0);
  rect(207, 105, 90, 25, 3, 3, 3, 3);
  fill('#368ABF');
  strokeWeight(0);
  rect(175, 105, 10, 25);
  fill('#368ABF');
  strokeWeight(0);
  rect(210, 105, 45, 10);

  //선반 책장
  fill('#8C613B');
  strokeWeight(0);
  rect(180, 150, 170, 17, 5, 5, 5, 5);

  //창문
  fill('#ACD1F2');
  strokeWeight(0);
  rect(750, 200, 500, 290);

  //mountain2
  fill('#9BA453');
  strokeWeight(0);
  triangle(800, 150, 600, 350, 1000, 350);
  //mountain1
  fill('#758D21');
  strokeWeight(0);
  triangle(630, 150, 510, 350, 800, 350);

  //창문 반사
  stroke('#E9F1F2');
  strokeWeight(10);
  line(920, 125, 850, 90);
  stroke('#E9F1F2');
  strokeWeight(10);
  line(950, 170, 820, 110);

  //창틀 위1
  fill('#A68365');
  strokeWeight(0);
  rect(750, 60, 500, 10);
  //창틀 위2
  fill('#A68365');
  strokeWeight(0);
  rect(750, 180, 500, 10);
  //창틀 손잡이
  fill('#A68365');
  strokeWeight(0);
  rect(850, 150, 100, 20, 3, 3, 3, 3);
  //창틀 왼쪽
  fill('#A68365');
  strokeWeight(0);
  rect(500, 205, 10, 300);
  //창틀 아래
  fill('#A68365');
  strokeWeight(0);
  rect(750, 350, 500, 10);
  //창틀 선반
  fill('#66513E');
  strokeWeight(0);
  rect(750, 365, 600, 25);

  //커튼봉
  fill('#66513E');
  strokeWeight(0);
  rect(750, 65, 580, 8, 3, 3, 3, 3);
  fill('#66513E');
  strokeWeight(0);
  circle(480, 65, 20);

  //커튼
  fill(255, 255, 255, 200);
  rect(515, 230, 50, 350);
  strokeWeight(0);
  fill(255, 255, 255, 200);
  rect(545, 230, 50, 350);
  strokeWeight(0);
  fill(255, 255, 255, 200);
  rect(575, 230, 50, 350);
  strokeWeight(0);
  fill(255, 255, 255, 200);
  rect(605, 230, 50, 350);
  strokeWeight(0);
  fill(255, 255, 255, 200);
  rect(635, 230, 50, 350);
  strokeWeight(0);

  //액자
  fill('#D9D9D9');
  strokeWeight(0);
  rect(380, 120, 80, 100);
  fill('#F1C31B');
  strokeWeight(0);
  rect(380, 120, 70, 90);
  //
  fill('#ffffff');
  strokeWeight(0);
  rect(360, 105, 5, 60);
  fill('#ffffff');
  strokeWeight(0);
  circle(360, 130, 15);
  //
  fill('#ffffff');
  strokeWeight(0);
  rect(380, 95, 3, 40);
  fill('#ffffff');
  strokeWeight(0);
  circle(380, 100, 10);
  //
  fill('#ffffff');
  strokeWeight(0);
  rect(395, 110, 5, 70);
  fill('#ffffff');
  strokeWeight(0);
  circle(395, 140, 20);

  //노트북
  fill('#848C8B');
  strokeWeight(0);
  rect(560, 580, 120, 70, 5, 5, 5, 5);
  fill('#A5A6A4');
  strokeWeight(0);
  circle(560, 583, 20);
  fill('#A5A6A4');
  strokeWeight(0);
  circle(570, 575, 6);

  //테이블 받침
  fill('#59452C');
  strokeWeight(0);
  rect(600, 722, 350, 30, 5, 5, 5, 5);
  //테이블 다리 왼쪽
  stroke('#59452C');
  strokeWeight(20);
  line(450, 650, 400, 800);
  //테이블 다리 오른쪽
  stroke('#59452C');
  strokeWeight(20);
  line(750, 650, 800, 800);
  //테이블 상판
  fill('#D9AC84');
  strokeWeight(0);
  rect(600, 640, 400, 50, 5, 5, 5, 5);
}
