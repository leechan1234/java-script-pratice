// 1.택시 요금은 5천원
let taxiFare = 5000;
// 2.여부를 결정하는 변수
let isWalking;
// 3.만약(if) 택시 요금이 만원이상이면
//  isWalking을 true로 설정하고, 아니라면 false로 설정한다.
if (taxiFare > 10000) {
  isWalking = true;
} else {
  isWalking = false;
}
//4. isWalking이 true라면 "걸어가"를 출력하고 false라면 "택시타"를 출력한다
if (isWalking) {
  console.log("걸어가");
} else {
  console.log("택시타");
}
