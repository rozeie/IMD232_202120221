alert('안녕하세요');
let UserName;
UserName = prompt('당신의 이름은?', '홍길동');
let confirmVal = confirm('당신의 이름은 ' + UserName + ' 이/가 맞습니까?');
if (confirmVal == true) {
  alert('환영합니다 ' + UserName + ' 님');
}
