/* 1번 연습문제
const randomContainer = document.querySelector('.random-container');
const tiles = document.querySelectorAll('.tile');
randomContainer.addEventListener('click', randomColor);
function randomColor(){
  for(let tile of tiles){
    tile.style.background = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
  }
}
*/
/* 2번 연습문제
const photo = document.querySelector('.photo');
setTimeout(photoShowingToggle, 1000);
setTimeout(photoShowingToggle, 4000);

function photoShowingToggle(){
  photo.classList.toggle('show');
}
*/
/* 3번 연습문제
let countNumber = 0;
const counting = document.getElementById('counting');
setInterval(count, 1000);
function count(){
  counting.innerText = `${countNumber}`;
  countNumber++;
}
*/

const text = `You are watching text now !`;
const textContainer = document.querySelector('#text-container');
let index = 0;
const timerId = setInterval(showText, 1000);

function showText(){
  if(index < text.length){
    text[index] == ' '? textContainer.innerText += '\u00a0' : textContainer.innerText += `${text[index]}`;
    console.log(text[index]);
    index++;
  }else{
    clearInterval(timerId);
  } 
} 

/* 5번 연습문제
window.addEventListener('click', stamp)

function stamp(event){
  const stampImg = document.createElement('div');
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  stampImg.classList = 'circle';
  stampImg.style.left = mouseX + 'px';
  stampImg.style.top = mouseY + 'px';
  document.body.append(stampImg);
} */
/* 11번 연습문제
const sidebarBtn = document.querySelector('button');
sidebarBtn.addEventListener('click', moveSidebar);
function moveSidebar(){
  const sidebar = document.querySelector('.container');
  sidebar.style.left = '0%';
  setTimeout(() => sidebar.style.left = '-30%', 3000);
} */