// 1. input 태그 가져오기
const input = document.querySelector(".todo_input");

// 2. 추가 버튼 가져오기
const addButton = document.querySelector(".but1");

// 3. 투두 아이템 추가하기 위한 부모요소
const form = document.querySelector("form");

// 4. 추가 버튼에 click(클릭) 이벤트 설정
addButton.addEventListener("click", () => {
  // 5. input에 있는 값을 가져오기
  const todoText = input.value;

  // 만약에 todoText가 비어있다면(길이가 0이라면) 경고창 출력
  // 변수.lenght는 변수의 길이를 가져오는 명령어
  if (todoText.length === 0) {
    alert("할일적어 씹새야");
    return;
  }

  // 6. p 태그 생성
  const p = document.createElement("p");

  // 7. checkbox 생성
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // 8. 체크 박스 옆에 input 생성
  const tempInput = document.createElement("input");
  tempInput.type = "text";

  // 9. tempInput에다가 클래스 추가
  tempInput.classList.add("but");
  tempInput.classList.add("bx1");

  // tempInput에다가 할일 문구 추가하기
  tempInput.value = todoText;

  // 10. 확인 버튼 생성
  const okButton = document.createElement("button");

  // 11. 확인 버튼에 확인이라는 문구 지정
  okButton.textContent = "확인";

  // 12. 취소 버튼 생성
  const cancelButton = document.createElement("button");

  // 13. 취소 버튼에 취소라는 문구 지정
  cancelButton.textContent = "취소";

  // 14. p 태그 안에 체크박스, 인풋, 확인버튼, 삭제버튼 추가
  p.appendChild(checkbox);
  p.appendChild(tempInput);
  p.appendChild(okButton);
  p.appendChild(cancelButton);

  // 15. form 밑에다가 p태그 추가
  form.appendChild(p);

  // 16. 추가 버튼 누르고 나면 input 값 초기화
  input.value = "";
});

let age = "";

if (1 > 3) {
  age = 25;
} else {
  false;
}

alert(message);
