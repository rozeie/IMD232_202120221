class Traffic {
  constructor() {
    this.vehicles = []; // 여러 Vehicles를 가지고 있음
  }

  run() {
    // 모든 vehicles에 forEach를 더한다, 반복
    this.vehicles.forEach((eachVehicle) => {
      // 각각의 vehicle을 뭐라고 부를 것인지 ()안에 이름 넣기
      const separate = eachVehicle.separate(this.vehicles);
      separate.mult(1); // 힘 크기 조절
      eachVehicle.applyForce(separate); // 각각의 vehicle에 분리된 힘 더하기

      // 각 vehicle에 대한 일치된 방향 계산
      const align = eachVehicle.align(this.vehicles);
      align.mult(0.5); // 힘 크기 조절
      eachVehicle.applyForce(align); // 힘을 vehicle에 적용
      const cohesion = eachVehicle.cohesion(this.vehicles); // 각 vehicle에 대한 인접성 힘을 계산
      cohesion.mult(0.5); // 힘 크기 조절
      eachVehicle.applyForce(cohesion); // 힘을 vehicle에 적용
      eachVehicle.update(); //vehicle 업데이트
      eachVehicle.borderInfinite(); // 밖으로 나간 개체들이 잠시 뒤 다시 돌아옴
      eachVehicle.display();
    });
  }

  addVehicle(x, y) {
    // const mass = floor(random(1, 3)); //floor = 무조건 내림해서 정수로 만들어 줌
    const mass = 1;
    // 새로운 array를 추가
    this.vehicles.push(
      new Vehicle(x, y, mass, mass * 12, 5, 0.1, color(random(360), 100, 40))
    ); // new Vehicle 안에 들어갈 값은 Vehicle constructor 안에 들어가는 값들
    // random 함수 쓸 때 random(1, 2) -> 1이상 2미만 따라서 2는 나오지 않음 1.99999...
    // color는 color random 함수 사용
  }
}
