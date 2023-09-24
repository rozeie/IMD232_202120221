class MoverNoMass {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.radius = r;
  }

  //업데이트의 과정
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  //통통튀기는거(벽에)
  checkEdges() {
    if (this.pos.x < 0) {
      this.pos.x;
    }
  }

  //업데이트의 과정 화면에 표현
  display() {
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
  }

  //그려지는 원의 속도와 가속도 조절
  displayVector() {
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
