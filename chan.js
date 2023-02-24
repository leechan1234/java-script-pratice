// 1.논리 연산자
2.
//10은 5보다 크고(그리고)6은 8보다 작다  둘다 참이어야 트루
10>5 && 6<8 
//10은 5보다 크다 (또는) 6은 8보다 작다  둘중에 하나가 참이면 트루
10>5 || 6<8 

//다른 자료형을 불값으로 변환 하는 방법 형변환 (반대로)
 !!"a" = true
 !"a"= flase
//false, ''(빈 문자열),0,NAN,undifined,null은 불 값으로 형 변환했을 때 false가 된다(중요하다고
말함)
5+4*3===27 =false
!(5+4*3===27) = true

//2.자료형 복습 
문자열,숫자,불,undefiend,null,object,symbol
```

## 1.undifiend : 돌려줄 값이 없다,변환할 값이 없다

console.log('Hello World, world!')
 Hello, world!
undefiend
```

//3.변수 복습

//변수 선언시 undefiend
let name="john" 
undefined 

//두번 선언 시 에러
let empty; let empty; x

//변수명은 변수끼리 못짓는다 
let let  x
let const x

//변수명은 캐멀 형식 띄어쓰기를 못하기때문에
let nameNumber=123

//변수 명 수정
let name = "number"
change="magic"

//변수의 응용 (변수값만 고쳐주면 수정이 가능하다)
 let string1="엄청 긴 문자열"
  console.log(string1)
console.log(string1)
console.log(string1)
```

## const, var

```jsx
const name="john"
 name="nah" x   바뀌지 않는 상수

//var let 차이
 var name = "john"
 var name = "john"  재선언 o

 let name = "john"
let name = "john" 재선언 x
```

## 변수 문제

```jsx
//두 변수의 값을 서로 바꿔라
let a=5
let b=3

let c=a
c=5
a=b
a=3
b=c
b=5

//4. 조건문 복습
if (조건문){
  동작문
{

let value ='사과';
let condition='true'

if(condition){
  value='바나나'
}
console.log(value)

//else if
let score = 70;
if (score >= 90) {
  //90점 이상
  console.log("a+");
} else if (score <= 80) {
  //80점이상
  console.log("a");
} else if (score >= 70) {
  //70점 이상
  console.log("b+");
} else if (score >= 60) {
  //60점 이상
  console.log("b");
} else {
  console.log("c");
}