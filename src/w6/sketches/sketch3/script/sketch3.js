let emitter;
let gravity;
function setup() {
  setcanvascontainer('canvas', 2, 1, true);
  colorMode(HSL, 360, 100, 100, 100);
  emitter = new Emitter(width / 2, height / 2);
  gravity = createvector(0, 0.1);
  background(360, 0, 100);
  for (let n = 0; n < 100; n++) emitter.createParticle();
}
