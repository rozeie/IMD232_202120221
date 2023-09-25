// class MoverNoMass {
//   constructor(x, y, r) {
//     this.pos = createVector(x, y);
//     this.vel = createVector(0, 0);
//     this.acc = createVector(0, 0.1);
//     this.radius = r;
//   }

//   //업데이트의 과정
//   update() {
//     this.vel.add(this.acc);
//     this.pos.add(this.vel);
//   }

//   //통통튀기는거(벽에)
//   checkEdges() {
//     if (this.pos.x < 0) {
//       //   //0보다 얼마나 뚫고 갔는가
//       //   let delta = this.pox.x - 0; // 여기서 0은 기준으로 삼고있는 0
//       //   //그 뚫고간 거리에 -1ㅇ르 곱해 방향을 뒤집고
//       //   delta *= -1;
//       //   //0을 기준으로 뒤집힌 거리를 더해준다.
//       //   this.pos.x = 0 + delta;
//       //   this.vel.x *= 1;

//       //제대로 된 위치로 변환
//       this.pos.x -= 0;
//       this.pos.x *= -1;
//       this.pos.x += 0;
//       this.vel.x *= -1; //velocity에는 -1을 곱해줘야함
//     } else if (this.pos.x > width - 1) {
//       this.pos.x -= width - 1;
//       this.pos.x *= -1;
//       this.pos.x += width - 1;
//       this.vel.x *= 1;
//     }
//     if (this.pos.y > height - 1) {
//       this.pos.y -= height - 1;
//       this.pos.y *= -1;
//       this.pos.y += height - 1;
//       this.vel.y *= 1;
//     }
//   }

//   //업데이트의 과정 화면에 표현
//   display() {
//     //루프 돌면서 영향을 받기 때문에 위에서 스타일 지정
//     noStroke();
//     fill(0);
//     ellipse(this.pos.x, this.pos.y, 2 * this.radius);
//   }

//   //그려지는 원의 속도와 가속도 조절
//   displayVectors() {
//     stroke('red');
//     line(
//       this.pos.x,
//       this.pos.y,
//       this.pos.x + this.vel.x * 10,
//       this.pos.y + this.vel.y * 10
//     );
//     stroke('blue');
//     line(
//       this.pos.x,
//       this.pos.y,
//       this.pos.x + this.acc.x * 100,
//       this.pos.y + this.acc.y * 100
//     );
//   }
// }

class MoverNoMass {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0.1);
    this.radius = r;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  checkEdges() {
    if (this.pos.x < 0) {
      //   // 0보다 얼마나 뚫고 갔는가?
      //   let delta = this.pos.x - 0;
      //   // 그 뚫고간 거리에 -1을 곱해 방향을 뒤집고,
      //   delta *= -1;
      //   // 0을 기준으로 뒤집힌 거리를 더해준다.
      //   this.pos.x = 0 + delta;
      this.pos.x -= 0;
      this.pos.x *= -1;
      this.pos.x += 0;
      this.vel.x *= -1;
    } else if (this.pos.x > width - 1) {
      this.pos.x -= width - 1;
      this.pos.x *= -1;
      this.pos.x += width - 1;
      this.vel.x *= -1;
    }
    if (this.pos.y > height - 1) {
      this.pos.y -= height - 1;
      this.pos.y *= -1;
      this.pos.y += height - 1;
      this.vel.y *= -1;
    }
  }

  display() {
    noStroke();
    fill(0);
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
  }

  displayVectors() {
    stroke('red');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.vel.x * 10,
      this.pos.y + this.vel.y * 10
    );
    stroke('blue');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.acc.x * 100,
      this.pos.y + this.acc.y * 100
    );
  }
}
