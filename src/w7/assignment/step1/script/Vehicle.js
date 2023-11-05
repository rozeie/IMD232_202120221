class Vehicle {
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    // 받아올 값들
    this.pos = createVector(x, y); // position 초기 위치 백터 생성, constructor에서 x y 값을 받아 초기 위치로 삼음
    this.vel = p5.Vector.random2D(); // velocity 무작위 방향 초기 속도 백터
    this.acc = createVector(); // 가속도
    this.mass = mass; // 질량, 밖에서 값을 받아옴
    this.rad = rad; // 반지름 요소, 밖에서 값을 받아옴 (지정할 경우 각 Vehicle마다 값을 다르게 줄 수 없음)
    this.speedMx = speedMx; // 최대 속도, 밖에서 값을 받아옴
    this.forceMx = forceMx; // 최대 적용 힘, 밖에서 값을 받아옴
    this.neighborhooodRad = 50; // 주변 탐지 범위
    this.color = color; // 색상 요소, 밖에서 값을 받아옴
  }

  // 주변 개체들과의 응집력
  cohesion(others) {
    let cnt = 0; // 갯수 카운트
    const steer = createVector(0, 0); // 응집력을 저장할 백터 객체 생성
    others.forEach((each) => {
      // 주변 객체 목록
      // 개체 반복
      if (each !== this) {
        // 만약 이 개체가 각각의 개체와 동일하지 않다면
        const distSq = // 해당 개체와 주변 개체 사이의 거리 제곱을 계산
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        if (distSq < this.neighborhooodRad ** 2) {
          // 주변 객체가 주변 객체를 탐지 범위 내에 있는 경우
          steer.add(each.pos); // 응집력에 주변 위치를 더한다
          cnt++; // 증가
        }
      }
    });
    if (cnt > 0) {
      // 주변 객체가 있는 경우
      steer.div(cnt); // 응집력 백터를 주변 객체의 갯수로 나눈다
      steer.sub(this.pos); // 자기 자신의 위치를 응집력 백터에서 빼서 주변 객체들의 중심으로 향하는 응집력 계산
      steer.setMag(this.speedMx); // 응집력 벡터의 크기를 최대속도로 설정
      steer.sub(this.vel); // 자기 자신의 속도를 응집력 백터에서 빼서 객체의 현재 속도에서 주변 객체들의 중심으로 향하는 응집력 계산
      steer.limit(this.forceMx); // 응집력 백터 크기를 최대 가속도로 제한
    }
    return steer; // 되돌아가기
  }

  // 다른 것들과의 정렬
  align(others) {
    let cnt = 0; // 다른 객체와의 수 카운트
    const steer = createVector(0, 0); // steer로 벡터 객체 생성
    others.forEach((each) => {
      // 주변 객체 살펴보기
      if (each !== this) {
        // 만약 이 개체가 각각의 개체와 동일하지 않다면
        const distSq = // 해당 개체와 주변 개체 사이의 거리 제곱을 계산
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        if (distSq < this.neighborhooodRad ** 2) {
          //  주변 객체가 주변 객체를 탐지 범위 내에 있는 경우
          steer.add(each.vel); // 응집력에 주변 속도를 더한다
          //   steer.add(p5.Vector.normalize(each.vel));
          cnt++; // 갯수 증가
        }
      }
    });
    if (cnt > 0) {
      // 주변 객체가 있는 경우
      steer.div(cnt); // 응집력 백터를 주변 객체의 갯수로 나눈다
      steer.setMag(this.speedMx); // 응집력 백터의 크기를 최대 속도로 설정
      steer.sub(this.vel); // 자기 속도를 응집력 벡터에서 빼서 주변 객체들의 평균 속도로 향하는 응집력 계산
      steer.limit(this.forceMx); // 응집력 벡터의 크기를 최대 가속도로 제한
    }
    return steer; // 되돌아가기
  }

  // 다른 객첵들과 충돌하지 않기 위해 응집력을 반환
  separate(others) {
    let cnt = 0; // 주변 객체 카운트
    const steer = createVector(0, 0); // 분리한 힘을 저장할 벡터
    others.forEach((each) => {
      //주변 객체 목록
      if (each !== this) {
        // 만약 이 개체가 각각의 개체와 동일하지 않다면, 자기 자신 제외
        const dist = this.pos.dist(each.pos); // 현재 객체와 주변 객체 사이 거리를 계산
        if (dist > 0 && this.rad + each.rad > dist) {
          // 충돌이 발생하는 조건 확인
          const distNormal = dist / (this.rad + each.rad); // 충돌 거리 규정화
          const towardMeVec = p5.Vector.sub(this.pos, each.pos); // 자기자신에서 주변으로 향하는 벡터 생성
          towardMeVec.setMag(1 / distNormal); // 백터 크기를 조절해 충돌을 피함
          steer.add(towardMeVec); // 분리한 힘 백터에 향하는 백터를 더한다
          cnt++; // 충돌을 피해야 하는 주변 객체 수 증가
        }
      }
    });
    if (cnt > 0) {
      // 만약 충돌을 피해야 할 주변 vehicle이 있는 경우
      steer.div(cnt); // 분리 힘 백터를 이웃 객체의 수로 나눈다
      steer.setMag(this.speedMx); // 분리 힘 백터의 크기를 최대 속도로 설정
      steer.sub(this.vel); // 객체의 현재 속도를 분리 힘 벡터에서 빼서 객체의 충돌을 피하는 힘을 계산
      steer.limit(this.forceMx); // 분리 힘 벡터의 크기를 최대 가속도로 제한
    }
    return steer; // 계산된 분리 힘 벡터를 반환
  }

  // 외부에서 힘을 받아옴
  applyForce(force) {
    const forceDivedByMass = p5.Vector.div(force, this.mass); // force를 우리의 mass로 나눔
    this.acc.add(forceDivedByMass); // 최종적으로 forceDivedByMass를 acc에 적용
  }

  //업데이트
  update() {
    this.vel.add(this.acc); // vel에 acc를 더한다
    this.vel.limit(this.speedMx); //vel은 최대치가 아무리 커쳐도 limit을 speedMX로 줌
    this.pos.add(this.vel); // 위치에 vel을 더함
    this.acc.mult(0); // 가속도는 0, 매번 초기화
  }

  borderInfinite() {
    if (this.pos.x < -infiniteOffset) {
      // 이것의 pos.x가 -infiniteOffset보다 작으면
      this.pos.x = width + infiniteOffset;
      // 우리의 pos.x를 width + infiniteOffset로 바꿔라
    } else if (this.pos.x > width + infiniteOffset) {
      //만약 우리의 pos.x가 width + infiniteOffset 보다 크다면
      this.pos.x = -infiniteOffset;
      // 우리의 pos.x를 -infiniteOffset로 바꿔라
    }
    if (this.pos.y < -infiniteOffset) {
      // 이것의 pos.y가 -infiniteOffset보다 작으면
      this.pos.y = height + infiniteOffset;
      // 우리의 pos.y를 height + infiniteOffset로 바꿔라
    } else if (this.pos.y > height + infiniteOffset) {
      //만약 우리의 pos.y가 height + infiniteOffset 보다 크다면
      this.pos.y = -infiniteOffset;
      // 우리의 pos.y를 -infiniteOffset로 바꿔라
    }
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y); // 원점을 원의 중심점으로 옮겨줌
    rotate(this.vel.heading()); //rotate 각도는 vel의 heading 각도를 따른다, vel 방향으로 뻗어나간다
    noStroke(); // 겉에 선은 X
    fill(this.color); // color는 가지고 있는 color값을 줄거임
    beginShape();
    vertex(this.rad, 0); // this.rad, 0 위치에 점을 하나 찍음
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135))); // this.rad에 cos와 sin을 넣음, -135
    vertex(0, 0);
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135))); // 그냥 135
    endShape(CLOSE);
    // noFill();
    // stroke(0, 0, 60);
    // ellipse(0, 0, 2 * this.rad);
    // stroke(0, 0, 80);
    // ellipse(0, 0, 2 * this.neighborhooodRad);
    pop();
  }
}
