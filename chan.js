// array 방식과는 어울리지 않을 때 사용
// const player = ["nico", "1212", false, "little"]; - 이때 array를 쓰게되면 각 요소에
// 어떤 뜻인지 모른다 또는 주석을 사용하게 되어서 편리성이 사라진다

//object
const player = {     중가로와,  : , 사용
 name: "nico",
  points: 10,
  fat: true,
};
console.log(player)
console.log(player.name)

//objact 수정도 가능하다
const player = {
  name: "nico",
  points: 10,
  fat: true,
};
console.log(player);
player.fat = false;
console.log(player);

//property추가 가능
const player = {
  name: "nico",
  points: 10,
  fat: true,
};
console.log(player);
player.points = player.points + 15;  -추가
console.log(player);


// array 방식과는 어울리지 않을 때 사용
// const player = ["nico", "1212", false, "little"]; - 이때 array를 쓰게되면 각 요소에
// 어떤 뜻인지 모른다 또는 주석을 사용하게 되어서 편리성이 사라진다

//object
const player = {     중가로와,  : , 사용
 name: "nico",
  points: 10,
  fat: true,
};
console.log(player)
console.log(player.name)

//objact 수정도 가능하다
const player = {
  name: "nico",
  points: 10,
  fat: true,
};
console.log(player);
player.fat = false;
console.log(player);

//property추가 가능
const player = {
  name: "nico",
  points: 10,
  fat: true,
};
console.log(player);
player.points = player.points + 15;  -추가
console.log(player);