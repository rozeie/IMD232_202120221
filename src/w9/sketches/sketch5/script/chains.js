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

Common.setDecomp(decomp);

let engine, world, ropeA, ropeB, ropeC, mouseConstraint;

const oWidth = 800;
const oHeight = 600;

const runner = Runner.create();

Runner.run(runner, engine);

function setup() {
  setCanvasContainer('canvas', oWidth, oHeight, true);

  engine = Engine.create();
  world = engine.world;

  let group = Body.nextGroup(true);
  const concave = Vertices.fromPath(
    '-0.6 -0.2 1.0 -0.2 1 0.4 0.7 1.1 -0.2 1.0 -0.2 0.4 -1.3 0.2 -0.6 -0.2'
  );

  ropeA = Composites.stack(100, 50, 10, 1, 10, 10, function (x, y) {
    return Bodies.fromVertices(x, y, concave, {
      collisionFilter: { group: group },
    });
  });

  Composites.chain(ropeA, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });

  Composite.add(
    ropeA,
    Constraint.create({
      bodyB: ropeA.bodies[0],
      pointB: { x: -25, y: 0 },
      pointA: { x: ropeA.bodies[0].position.x, y: ropeA.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  group = Body.nextGroup(true);

  ropeB = Composites.stack(350, 50, 10, 1, 10, 10, function (x, y) {
    return Bodies.circle(x, y, 20, {
      collisionFilter: { group: group },
    });
  });

  Composites.chain(ropeB, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });

  Composite.add(
    ropeB,
    Constraint.create({
      bodyB: ropeB.bodies[0],
      pointB: { x: -10, y: 0 },
      pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  group = Body.nextGroup(true);

  ropeC = Composites.stack(600, 50, 13, 1, 10, 10, function (x, y) {
    return Bodies.rectangle(x - 20, y, 50, 20, {
      collisionFilter: { group: group },
      chamfer: 5,
    });
  });

  Composites.chain(ropeC, 0.3, 0, -0.3, 0, { stiffness: 1, length: 0 });

  Composite.add(
    ropeC,
    Constraint.create({
      bodyB: ropeC.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeC.bodies[0].position.x, y: ropeC.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  Composite.add(world, [
    ropeA,
    ropeB,
    ropeC,
    Bodies.rectangle(400, 600, 1200, 50.5, { isStatic: true }),
  ]);

  let canvasMouse = Mouse.create(canvas.elt),
    mouseOptions = {
      mouse: canvasMouse,
    };

  mouseConstraint = MouseConstraint.create(engine, mouseOptions);
  World.add(world, mouseConstraint);

  Render.mouse = canvasMouse;
}

function draw() {
  noStroke();
  background('white');
  fill('red');
  ropeA.bodies.forEach((eachBody) => {
    eachBody.parts.forEach((eachPart, idx) => {
      if (idx === 0) return;
      beginShape();
      eachPart.vertices.forEach((eachVertex) => {
        vertex(
          (eachVertex.x / oWidth) * width,
          (eachVertex.y / oHeight) * height
        );
      });
      endShape(CLOSE);
    });
  });
}
