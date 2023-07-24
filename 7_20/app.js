const openButton = document.querySelector('.open-btn');
const submitButton = document.querySelector('.submit-btn');
const modalWindow = document.querySelector('.modal-window');
const container = document.querySelector('.container');
const upload = document.querySelector('#file-upload');
const dropdownBtn = document.querySelector('.dropdown-btn');
const contentsContainer = document.querySelector('.contents-container');
let products = [];
let index = 0;
let data = [];

async function api(){
  modalWindow.classList.toggle('show');
  const loading = document.createElement('div');
  loading.id = 'loading-bar';
  loading.classList.add('show');
  loading.classList.add('modal-window');
  loading.innerText = `Loading.`;
  setInterval(() => loading.innerText += `.`, 200);
  container.prepend(loading);
  const response = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline");
  
  const productsJson = await response.json();

  await productsJson.forEach(json => {
    products.push(json)
  });
  console.log(products);
  //console.log("fetching..")
  // const response = await fetch("./upload/data.json");
  // const dataJson = await response.json();

  // await dataJson.forEach(json => data.push(json));
  
}


function showToolTip(){
  const openBtnCoords = document.querySelector('.open-btn').getBoundingClientRect();
  const toolTip = document.createElement('div');
  toolTip.id = 'tooltip'
  toolTip.innerText = '업로드 창 열기';
  toolTip.style.position = 'fixed';
  toolTip.style.top = `${openBtnCoords.bottom}px`;
  toolTip.style.left = `${openBtnCoords.left}px`;
  document.body.append(toolTip);
}

function removeToolTip(){
  if(document.querySelectorAll('#tooltip')){
    document.querySelectorAll('#tooltip').forEach(elem => elem.remove());
  }
}
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
    const navTags = document.querySelectorAll('nav');
    for(tag of navTags){
      tag.style.backgroundColor = 'rgba(66, 66, 66, 0.3)';
    }
  }else if(window.pageYOffset < 50){
    const navTags = document.querySelectorAll('nav');
    for(tag of navTags){
      tag.style.backgroundColor = '';
    }
  }
  if(window.pageYOffset >= 100){
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
  //console.log(event);
  data1 = event.dataTransfer;
  upload.style.backgroundImage = `url(./img/${event.dataTransfer.files[0].name})`;
  upload.style.backgroundSize = 'contain';
  upload.style.backgroundRepeat = 'no-repeat';
  upload.style.backgroundPosition = 'center';
  upload.innerText = '';
}

function displayImg(e){
  e.preventDefault();
  api()
  .then(()=> {
    if(document.querySelector('#loading-bar')){
      document.querySelector('#loading-bar').remove();
    }
    const contentsContainer = document.querySelector('.contents-container');
    contentsContainer.style.display = 'flex';
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content');
    contentContainer.id = `${index}`;
    contentContainer.innerHTML = `
    <div class="img-container">
      <img src="${products[index].image_link}" alt="">
    </div>
    <h2>${products[index].name}</h2>
    <p>${products[index].description}</p>
    `
    contentsContainer.append(contentContainer);
    index++;

    if(document.body.style.overflow == 'hidden'){
      document.body.style.overflow = '';
    }else{
      document.body.style.overflow = 'hidden';
    }
    
    container.classList.toggle('show');
    products = [];
  })
}

function dropdownMenuClose(){
  if(document.querySelector('.dropdown-menu')){
    document.querySelector('.dropdown-menu').remove()
  }
}

function dropdownMenu(){
  if(document.querySelector('.dropdown-menu') === null){
    const nav = document.querySelector('nav');
    const dropdownMenu = document.createElement('nav');
    dropdownMenu.classList.add('dropdown-menu');
    dropdownMenu.innerHTML = `
      <div><span class="material-symbols-outlined dropdown-menu-close-btn">
      close
      </span></div>
      <a href="#" class="menu" style="display: block">찾기</a>
      <a href="#" class="menu" style="display: block">둘러보기</a>
      <a href="#" class="menu" style="display: block">설정</a>
    `
    dropdownMenu.style.top = `${nav.getBoundingClientRect().bottom}px`;
    
    document.body.append(dropdownMenu);
    const dropdownMenuCloseBtn = dropdownMenu.querySelector('.dropdown-menu-close-btn');
    dropdownMenuCloseBtn.addEventListener('click', dropdownMenuClose)
  }else{
    document.querySelector('.dropdown-menu').remove();
  }
  if(window.pageYOffset >= 50){
    if(document.querySelector('.dropdown-menu'))
    document.querySelector('.dropdown-menu').style.backgroundColor
    = `rgba(66, 66, 66, 0.3)`;
  }
}

function removeDropdownMenu(){
  if(window.innerWidth >= 480){
    if(document.querySelector('.dropdown-menu'))
    document.querySelector('.dropdown-menu').remove();
  }
}

function infoContent(e){
  let content = e.target;
  while(content.className !== 'content'){
    content = content.parentElement;
    console.dir(content)
  }
  
}


openButton.addEventListener('click', modal);
openButton.addEventListener('mouseenter', showToolTip);
openButton.addEventListener('mouseleave', removeToolTip);
submitButton.addEventListener('click', displayImg);
//openButton.addEventListener('mouseover', moving);
window.addEventListener('scroll', showUpScrollBtn);
upload.addEventListener('dragenter', modalDarken);
upload.addEventListener('dragleave', modalLeave);
upload.addEventListener('drop', modalImg);
window.addEventListener("dragover",function(e){
  e = e || event;
  e.preventDefault();    
},false);
window.addEventListener("drop",function(e){
  e = e || event;
  e.preventDefault();    
},false);
dropdownBtn.addEventListener('click', dropdownMenu);
window.addEventListener('resize', removeDropdownMenu);
contentsContainer.addEventListener('click', infoContent);
