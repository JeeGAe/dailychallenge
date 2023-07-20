const openButton = document.querySelector('.open-btn');
const closeButton = document.querySelector('.close-btn');
const modalWindow = document.querySelector('.modal-window');
const container = document.querySelector('.container')
const upload = document.querySelector('#file-upload');

function modal(){
  if(document.body.style.overflow == 'hidden'){
    document.body.style.overflow = '';
  }else{
    document.body.style.overflow = 'hidden';
  }
  modalWindow.classList.toggle('show');
  container.classList.toggle('show');
}
function moving(){
  openButton.style.top = parseInt(Math.random() * 500) + 'px';
  openButton.style.left = parseInt(Math.random() * 500) + 'px';
}
function showUpScrollBtn(){
  if(window.pageYOffset >= 50){
    if(document.querySelector('#basic-open-btn') != null){
      document.querySelector('#basic-open-btn').remove();
    }
    if(document.querySelector('nav') === null){
      const navTag = document.createElement('nav');
      navTag.innerHTML = `<button class="open-btn" type="button">업로드</button>`
      document.body.append(navTag);
      const openButton = document.querySelector('.open-btn');
      openButton.addEventListener('click', modal);
    }
  }else if(window.pageYOffset >= 100){
    if(document.getElementById('up-button') === null){
      const upBtn = document.createElement('button');
      upBtn.id = 'up-button';
      //upBtn.style.top = (scrollHeight - 100) + 'px';
      upBtn.innerHTML = `<span class="material-symbols-outlined">
      expand_less
      </span>`
      document.body.append(upBtn);
      upBtn.addEventListener('click', upScroll);
    }
  }else if(window.pageYOffset < 50){
    if(document.getElementById('basic-open-btn') === null){
      const openButton = document.createElement('button');
      openButton.classList.add('open-btn');
      openButton.id = 'basic-open-btn';
      openButton.innerText = '업로드';
      document.body.append(openButton);
      openButton.addEventListener('click', modal);
    }
    if(document.querySelector('nav') != null){
      document.querySelector('nav').remove();
    }
  }else if(window.pageYOffset < 100){
    if(document.getElementById('up-button') != null){
      document.getElementById('up-button').remove();
    }
  }
}
function upScroll(){
  document.body.scrollIntoView();
  document.getElementById('up-button').remove();
}
function modalDarken(){
  modalWindow.style.backgroundColor = 'rgba(0, 0, 0, .5)';
}
function modalLeave(){
  modalWindow.style.backgroundColor = 'rgba(0, 0, 0, .3)';
}
function modalImg(event){
  upload.style.backgroundImage = `url(./img/${event.dataTransfer.files[0].name})`;
  upload.style.backgroundSize = 'contain';
  upload.style.backgroundRepeat = 'no-repeat';
  upload.style.backgroundPosition = 'center';
  upload.innerText = '';
}

openButton.addEventListener('click', modal);
closeButton.addEventListener('click', modal);
//openButton.addEventListener('mouseover', moving);
window.addEventListener('scroll', showUpScrollBtn);
upload.addEventListener('dragenter', modalDarken);
upload.addEventListener('dragleave', modalLeave);
upload.addEventListener('drop', modalImg);
console.dir(modalWindow)
window.addEventListener("dragover",function(e){
  e = e || event;
  e.preventDefault();    
},false);
window.addEventListener("drop",function(e){
  e = e || event;
  e.preventDefault();    
},false);