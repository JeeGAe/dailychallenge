
const photos = document.getElementById('photos');
const photolen = photos.querySelectorAll('.photo').length;
const Selection = document.querySelector('#selection');
let timerId = null;
const photoWidth = 500;
let index = 1;

function indicatorChange(){
  const options = Selection.querySelectorAll('.options');
  const activeOption = Selection.querySelector('.active');
  activeOption.classList.remove('active');
  options[index].classList.add('active');
};
function changeMargin(){
  if(index > photolen - 1){
    index = 0;
  }
  let margin = -1 * index * photoWidth +'px';
  photos.style.marginLeft = margin;
  indicatorChange();
  index++;
}
function movePhotos(){
  timerId = setInterval(changeMargin, 1000);
}
function stopPhotos(){
  clearInterval(timerId);
}
function changePhoto(event){
  if(event.target.className === 'options'){
    index = event.target.dataset.id;
    indicatorChange();
    changeMargin();
  }
}

photos.addEventListener('mouseenter', movePhotos);
photos.addEventListener('mouseleave', stopPhotos);
Selection.addEventListener('click', changePhoto);
/* 13번 연습문제
const boxContainer = document.getElementById('box-container');
const box = boxContainer.querySelectorAll('.box');
let index = 0, downIndex = -1;
function upCircle(){
  if(downIndex !== -1){
    box[downIndex].classList.toggle('up');
  }
  box[index].classList.toggle('up');
  index++;
  downIndex++
  if(index >= box.length){
    index = 0;
  }
  if(downIndex >= box.length){
    downIndex = 0;
  }
}
setInterval(upCircle, 1500); */
/* 14번 연습문제
const menuContainer = document.getElementById('menu-container');
const menus = menuContainer.querySelectorAll('.info');

function showInfo(event){
  if(event.target.className === 'title'){
    const openedInfo = menuContainer.querySelector('.open');
    if(openedInfo) openedInfo.classList.remove('open'); 
    event.target.nextElementSibling.classList.add('open');
  }
}

menuContainer.addEventListener('click', showInfo); */