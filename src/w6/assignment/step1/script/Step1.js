let emitter;
let gravity;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  rectMode(CENTER);
  colorMode(HSB, 360, 100, 100, 100);
  emitter = new Emitter(width / 2, 0);
  gravity = createVector(0, 0.1); //속도조절
  background(360, 0, 100);
}

function draw() {
  background(360, 0, 100);
  emitter.update();
  emitter.display();
  console.log('파티클 갯수:', emitter.particles.length);
}
class Emitter {
  constructor(x, y) {
    this.particles = [];
    this.position = createVector(x, y);
  }

  update() {
    if (random(1) < 0.5) {
      this.createParticle();
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.applyForce(gravity);
      p.update();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }

  display() {
    for (const p of this.particles) {
      p.display();
    }
  }

  createParticle() {
    const x = random(width);
    const y = random(-height / 2, 0);
    const p = new Particle(x, y, random(360), 100, 100);
    this.particles.push(p);
  }
}
class Particle {
  constructor(x, y, h, s, v) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, random(1, 3));
    this.size = 10;
    this.angle = random(TWO_PI);
    this.rotationSpeed = random(-0.1, 0.1);
    this.color = color(h, s, v);
  }

  applyForce(force) {
    this.velocity.add(force);
    this.velocity.mult(0.96);
  }

  update() {
    this.position.add(this.velocity);
    this.angle += this.rotationSpeed;
  }

  isDead() {
    return this.position.y > height;
  }

  display() {
    noStroke();
    fill(this.color);
    push();
    translate(this.position.x, this.position.y);
    rotate(this.angle);
    rect(0, 0, this.size, this.size);
    pop();
  }
}
