const quotes = [
    {
        name: "알버트 아인슈타인",
        quotes: "창조성은 집중의 아이다. 사물이 당신을 당기는 것을 느낄 때까지 탐구하는 것이다."
    },
    {
        name: "스티브 잡스",
        quotes: "혁신은 그것이 다른 사람들이 하는 방식을 바꿔버리는 것이다."
    },
    {
        name: "나폴레옹 힐",
        quotes: "성공은 마지막 기회를 잘 활용하는 것이다."
    },
    {
        name: "마이클 조던",
        quotes: "실패하는 것은 성공으로 가는 길에서 중요한 부분이다."
    },
    {
        name: "월트 디즈니",
        quotes: "발명의 90%는 기획이다, 나머지 10%는 아이디어이다."
    },
    {
        name: "엘런 머스크",
        quotes: "당신이 할 수 있는 한 가장 어려운 일을 하세요. 그것은 당신의 능력을 증명하는 유일한 방법입니다."
    },
    {
        name: "마리 쿠리",
        quotes: "아무리 어려워도 결코 포기하지 마십시오. 노력하면 언젠가는 반드시 성공할 것입니다."
    },
    {
        name: "알베르 카뮈",
        quotes: "진정한 행복은 인생의 의미와 목적을 발견하고 그에 따라 행동하는 것이다."
    },
    {
        name: "마더 테레사",
        quotes: "우리는 무엇을 하든지 사람들이 이 세상에 대해 더 행복하고 평화롭게 사는 데 도움이 되는 일을 해야 합니다."
    },
    {
        name: "제임스 딘",
        quotes: "성공은 단순히 자신의 능력을 인정받는 것이 아니라, 다른 사람들을 통해 성장할 수 있도록 도움을 주는 것이다."
    }
]

const quoteSpan = document.getElementById("quoteSpan");
const randomNumber = generateRandomNumber(10);
quoteSpan.innerHTML = `${quotes[randomNumber].quotes} -${quotes[randomNumber].name}-`;