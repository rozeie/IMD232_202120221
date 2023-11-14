// 변수 선언
const {
  Engine,
  Render,
  Runner,
  Body,
  Bodies,
  Composite,
  Composites,
  Constraint,
  Common,
  MouseConstraint,
  Mouse,
  Vertices,
} = Matter;

// decomp 사용
Common.setDecomp(decomp);

// engine
const engine = Engine.create(),
  world = engine.world;

// runner
const runner = Runner.create();
Runner.run(runner, engine);

// origninal canvas
const oWidth = 800;
const oHeight = 600;

let mouse;

let stack;

let group;
let ropeA;
let ropeB;
let ropeC;

function setup() {
  setCanvasContainer('canvas', oWidth, oHeight, true);

  group = Matter.Body.nextGroup(true);
  let Concave = Vertices.fromPath('20 0 20 10 50 10 50 40 20 40 20 50 0 25'),
    Chevron = Vertices.fromPath('50 0 37.5 25 50 50 12.5 50 0 25 12.5 0'),
    Star = Vertices.fromPath(
      '35 7 19 17 14 38 14 58 25 79 45 85 65 84 65 66 46 67 34 59 30 44 33 29 45 23 66 23 66 7 53 7'
    );

  ropeA = Matter.Composites.stack(100, 50, 8, 1, 10, 10, function (x, y) {
    return Matter.Bodies.fromVertices(x, y, Concave, {
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

  ropeB = Matter.Composites.stack(350, 50, 8, 1, 10, 10, function (x, y) {
    return Matter.Bodies.fromVertices(x, y, Chevron, {
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
      pointB: { x: -10, y: 0 },
      pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  group = Matter.Body.nextGroup(true);

  ropeC = Matter.Composites.stack(600, 50, 10, 1, 10, 10, function (x, y) {
    return Matter.Bodies.fromVertices(x, y, Star, {
      collisionFilter: { group: group },
      chamfer: 5,
    });
  });

  Matter.Composites.chain(ropeC, 0.3, 0, -0.3, 0, {
    stiffness: 1,
    length: 0,
  });

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

  mouse = Mouse.create(canvas.elt);
  mouse.pixelRatio = (pixelDensity() * width) / oWidth;
  let mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
    },
  });
  Composite.add(world, mouseConstraint);

  console.log('group', group);
  console.log('ropeA', ropeA);
  console.log('ropeB', ropeB);
  console.log('ropeC', ropeC);
  console.log('Bodies', Bodies);
}

function draw() {
  mouse.pixelRatio = (pixelDensity() * width) / oWidth;

  noStroke();

  background('white');

  fill('#E68779');
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

  fill('#7293E5');
  ropeB.bodies.forEach((eachBody) => {
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

  fill('#9AB993');
  ropeC.bodies.forEach((eachBody) => {
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
