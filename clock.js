const clock = document.getElementById("clock");

function tiktokFormat(time) {
    return time.toString().length == 1 ? "0"+time : time;
}

function tiktok() {
    const date = new Date();
    
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    // ``안에서 ${}를 사용하면 {}안에 javascript 문법을 사용할 수 있다.
    clock.innerHTML = `${tiktokFormat(hour)}:${tiktokFormat(min)}:${tiktokFormat(sec)}`;
}

tiktok(); // 페이지 시작할 때 00:00:00 안 보이게 하기 위해 선언
setInterval(() => {
    tiktok();
}, 1000);