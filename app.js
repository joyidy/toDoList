// 변수 선언부
const storgeName = localStorage.getItem('name');
const nameForm = document.getElementById("nameForm");
const nameInput = document.getElementById("nameInput");

const storgeFocus = localStorage.getItem('focus');
const focusForm = document.getElementById("focusForm");
const focusInput = document.getElementById("focusInput");

// 이벤트 리스너
// form에 input이 하나만 있을 때 submit을 하면 자동으로 감지한다.
nameForm.addEventListener('submit', handleInputKeydown);
focusForm.addEventListener('submit', handleInputKeydown);


// 함수부
function handleInputKeydown(e) {
    e.preventDefault();  // 기본이벤트 중지(새로고침 x)
    const targetId = e.target.id;

    if(targetId == 'nameForm'){
        nameForm.innerHTML = `안녕하세요, ${nameInput.value}님!`;
        // 브라우저 임시 저장소에 저장 (개발자도구 Applicateion>local Storege에서 확인 가능)
        localStorage.setItem('name', nameInput.value);
    } else if(targetId == 'focusForm') {
        focusForm.innerHTML = `오늘의 포커스는 ${focusInput.value} 입니다.`;
        localStorage.setItem('focus', focusInput.value);
    }
}

function generateRandomNumber(range) {
    return Math.floor(Math.random() * range);
}


// 실행부
// 저장소 값 뿌려주기
if(storgeName != undefined) {
    nameForm.innerHTML = `안녕하세요, ${storgeName}님!`;
}
if(storgeFocus != undefined) {
    focusForm.innerHTML = `오늘의 포커스는 ${storgeFocus} 입니다.`;
}
