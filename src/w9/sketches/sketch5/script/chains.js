const {
  Engine,
  Render,
  Runner,
  Composites,
  Common,
  MouseConstraint,
  Mouse,
  Composite,
  Vertices,
  Bodies,
} = Matter;

let engine, world, ropeA, ropeB, ropeC, mouseConstraint;

function setup() {
  // create canvas
  setCanvasContainer('canvas', 800, 600, true);

  // create engine
  engine = Matter.Engine.create();
  world = engine.world;

  // create bodies
  let group = Matter.Body.nextGroup(true);

  ropeA = Matter.Composites.stack(100, 50, 8, 1, 10, 10, function (x, y) {
    return Matter.Bodies.rectangle(x, y, 50, 20, {
      collisionFilter: { group: group },
    });
  });

  Matter.Composites.chain(ropeA, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });

  Matter.Composite.add(
    ropeA,
    Matter.Constraint.create({
      bodyB: ropeA.bodies[0],
      pointB: { x: -25, y: 0 },
      pointA: { x: ropeA.bodies[0].position.x, y: ropeA.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  group = Matter.Body.nextGroup(true);

  ropeB = Matter.Composites.stack(350, 50, 10, 1, 10, 10, function (x, y) {
    return Matter.Bodies.circle(x, y, 20, {
      collisionFilter: { group: group },
    });
  });

  Matter.Composites.chain(ropeB, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });

  Matter.Composite.add(
    ropeB,
    Matter.Constraint.create({
      bodyB: ropeB.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  group = Matter.Body.nextGroup(true);

  ropeC = Matter.Composites.stack(600, 50, 13, 1, 10, 10, function (x, y) {
    return Matter.Bodies.rectangle(x - 20, y, 50, 20, {
      collisionFilter: { group: group },
      chamfer: 5,
    });
  });

  Matter.Composites.chain(ropeC, 0.3, 0, -0.3, 0, { stiffness: 1, length: 0 });

  Matter.Composite.add(
    ropeC,
    Matter.Constraint.create({
      bodyB: ropeC.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeC.bodies[0].position.x, y: ropeC.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  Matter.Composite.add(world, [
    ropeA,
    ropeB,
    ropeC,
    Matter.Bodies.rectangle(400, 600, 1200, 50.5, { isStatic: true }),
  ]);

  // add mouse control
  let canvasMouse = Matter.Mouse.create(canvas.elt),
    mouseOptions = {
      mouse: canvasMouse,
    };

  mouseConstraint = Matter.MouseConstraint.create(engine, mouseOptions);
  Matter.World.add(world, mouseConstraint);

  // keep the mouse in sync with rendering
  Matter.Render.mouse = canvasMouse;
}

function draw() {
  // Update physics engine
  Matter.Engine.update(engine);

  // Draw ropes and bodies
  background(255);
  drawRope(ropeA);
  fill(114, 147, 228);
  drawRope(ropeB);
  fill(0, 0, 200);
  drawRope(ropeC);
  fill(150, 0, 200);
}

function drawRope(rope) {
  //   fill(0, 150, 200); // Set the fill color
  noStroke(); // No stroke (remove outline)
  beginShape();
  for (let i = 0; i < rope.bodies.length; i++) {
    let pos = rope.bodies[i].position;
    if (rope.bodies[i].label === 'Rectangle Body') {
      rect(pos.x - 25, pos.y - 10, 50, 20);
    } else if (rope.bodies[i].label === 'Circle Body') {
      ellipse(pos.x, pos.y, 40, 40);
    }
  }
  endShape();
}
