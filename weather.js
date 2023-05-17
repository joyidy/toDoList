const weatherSpan = document.getElementById('weatherSpan');
const API_KEY = '8bb8f0547c2a832495d78e8793733b17';

// js 내장객체
// successCallback : 성공했을 떄 반환될 함수명
navigator.geolocation.getCurrentPosition(positionSuccess, positionError);

function positionSuccess(response) {
    const lat = response.coords.latitude;
    const lon = response.coords.longitude;

    // fetch : http 요청 날림
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            weatherSpan.textContent = `City: ${data.name} | Weather: ${data.weather[0].description} | Temperature: ${data.main.temp} `;
        })
}

function positionError(error) {
    alert(`사용자가 위치정보 제공을 거부하였습니다...${error.message}`);
}
