class Attractor {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.mass = mass;
  }

  attract(mover) {
    let dirVector = p5.Vector.sub(this.pos, mover.pos); // 3주차 10번 step 참고
    let distance = dirvec.mag();
    let strength = (this.mass * mover.mass) / distance ** 2;
    return dirVector.setMag(strength);
  }

  display() {
    ellipse(this.pos.x, this.pos.y, 100);
  }
}
