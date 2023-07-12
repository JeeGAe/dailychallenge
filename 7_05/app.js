/* 배열 1번 연습문제
const lyrics = `
Sorry Sorry Sorry Sorry
내가 내가 내가 먼저
네게 네게 네게 빠져
빠져 빠져 버려 baby
Shawty Shawty Shawty Shawty
눈이 부셔 부셔 부셔
숨이 막혀 막혀 막혀
내가 미쳐 미쳐 baby
바라보는 눈빛 속에
눈빛 속에 나는 마치
나는 마치 뭐에 홀린 놈
이젠 벗어나지도 못해
걸어오는 너의 모습
너의 모습 너는 마치
내 심장을 밟고 왔나봐
이젠 벗어나지도 못해
어딜 가나 당당하게
웃는 너는 매력적
착한 여자 일색이란
생각들은 보편적
도도하게 거침 없게
정말 너는 환상적
돌이킬 수 없을만큼
네게 빠져 버렸어
Sorry Sorry Sorry Sorry
내가 내가 내가 먼저
네게 네게 네게 빠져
빠져 빠져 버려 baby
Shawty Shawty Shawty Shawty
눈이 부셔 부셔 부셔
숨이 막혀 막혀 막혀
내가 미쳐 미쳐 baby
딴딴 딴따다 따 따란딴
딴딴 딴따다 따
네게 반해버렸어 baby
딴딴 딴따다 따 따란딴
딴딴 딴따다 따 따라빠빠라
Hey girl gir gir gir gir girl i
눈만뜨면 니 생각 Hey girl
자나깨나 사실 너 하나 밖에 안보여
말해봐 니 맘에 내가
말해봐 자리 잡았는지
말해줘 내게 말해줘
나는 바보 바보 바보
주변 사람들은 말해
내가 너무 적극적
이 세상에 그런 사람
어디 한둘이냐고
그걸 몰라 그녈 몰라
시기하며 하는 말
내가 부럽다면 그건
그대들이 지는 거
Sorry Sorry Sorry Sorry
내가 내가 내가 먼저
네게 네게 네게 빠져
빠져 빠져 버려 baby
Shawty Shawty Shawty Shawty
눈이 부셔 부셔 부셔
숨이 막혀 막혀 막혀
내가 미쳐 미쳐 baby
딴딴 딴따다 따 따란딴
딴딴 딴따다 따
네게 반해버렸어 baby
딴딴 딴따다 따 따라라라
딴딴 딴따다 따 따라빠빠라
Lets dance dance dance dance
Lets dance dance dance dance
Lets dance dance dance dance dance dance
Hey 이제 그만 내게 와줄래
정말 미칠 것만 같아 yeah
난 너만 사랑하고 싶어
절대 다시 한눈 팔 생각 없어 hey hey hey.
애인이라기보다 친구같은
내가 되고 싶어
너의 모든 고민 슬픔
함께 간직하고파
다시 없을 만큼 만큼
너를 너무 사랑해
내가 바란 사람 니가 바로 그
That that that girl
Sorry Sorry Sorry Sorry
내가 내가 내가 먼저
네게 네게 네게 빠져
빠져 빠져 버려 baby
Shawty Shawty Shawty Shawty
눈이 부셔 부셔 부셔
숨이 막혀 막혀 막혀
내가 미쳐 미쳐 baby
`
const keyword1 = 'Sorry'
const keyword2 = '부셔'
let index = 0;

function searchWord(keyword, n){
  let repeatWordCount = 0;
  while(index != -1){
    repeatWordCount++;
    index === 0 ? index = lyrics.indexOf(keyword) : index = lyrics.indexOf(keyword, index + n);
  }
  index = 0;
  return repeatWordCount -1;
}
console.log(searchWord(keyword1, keyword1.length));
console.log(searchWord(keyword2, keyword2.length)); */

const colors = ['orange', 'blue', 'brown', 'green', 'red', 'skyblue'];
const colorInput = document.querySelector('#color-input');
const colorBox = document.querySelector('.color-box');
const colorList = document.querySelector('.color-list')

function autoList(typed){
  colorList.innerHTML = ''
  for(let color of colors){
    if(color.includes(typed) && typed != ''){
      console.log(typed)
      colorList.innerHTML += `<div class='color-item'>${color}</div>`
    }
  }
}
function randomBackgroundColor(){
  const randomColor = `rgb(${parseInt(Math.random()*255)}, ${parseInt(Math.random()*255)}, ${parseInt(Math.random()*255)})`
  colorBox.style.backgroundColor = randomColor;
}
function typeColor(event){
  const typedColor = event.target.value;
  randomBackgroundColor();
  autoList(typedColor);
}

colorInput.addEventListener('input', typeColor);
/* 이벤트 2,3번 연습문제
const button = document.querySelector('button');
const fileInput = document.getElementById('file-input');
const imgBox = document.getElementById('img-box');

function showPhoto(event){
  const files = event.target.files;
  const filesURLs = [];
  for(let file of files){
    filesURLs.push(window.URL.createObjectURL(file));
  }
  console.log(filesURLs);
  for(let filesURL of filesURLs){
    const img = document.createElement('img');
    img.src = filesURL;
    imgBox.appendChild(img);
  }
}
function fileInputClick(){
  fileInput.click();
}
button.addEventListener('click', fileInputClick);
fileInput.addEventListener('change', showPhoto); */