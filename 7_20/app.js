const openButton = document.querySelector('.open-btn');
const submitButton = document.querySelector('.submit-btn');
const modalWindow = document.querySelector('.modal-window');
const container = document.querySelector('.container');
const upload = document.querySelector('#file-upload');
const dropdownBtn = document.querySelector('.dropdown-btn');
const contentsContainer = document.querySelector('.contents-container');
const menuBar = document.querySelector('.menu-bar');
let products = [];
let index = 0;
let data = [];
let isfetching = false;

async function api(){
  console.log("fetching..");
  modalWindow.classList.remove('show');
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
  return isfetching = true;
  
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
      upBtn.innerHTML = `
      <span class="material-symbols-outlined">
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
  // 상세정보 창이 브라우저 상단에 올 때상세 정보를 알려주는 미니 창
  if(document.querySelector('.content-info')?.getBoundingClientRect().top >= 50){
    document.querySelector('.mini-info')?.remove();
  }
  if(document.querySelector('.content-info')?.getBoundingClientRect().top < 50){
    if(document.querySelector('.mini-info') === null && !isfetching){
      isfetching = true;
      api().then(() => {
        if(document.querySelector('#loading-bar')){
          document.querySelector('#loading-bar').remove();
        }
        if(document.querySelector('.mini-info') === null){
          const miniInfo = document.createElement('div');
          miniInfo.classList.add('mini-info');
          const contentId = document.querySelector('.content-info').id;
          miniInfo.innerHTML = `
            <div class="mini-close-btn">
            <span class="material-symbols-outlined dropdown-menu-close-btn">
            close
            </span></div>
            <div class="mini-info-content">
            <div class="mini-img"><img src="${products[contentId].image_link}"></div>
            <h3>${products[contentId].name}</h3>
            </div>
          `;
          products = [];
          contentsContainer.after(miniInfo);
          const miniCloseBtn = miniInfo.querySelector('span');
          miniCloseBtn.addEventListener('click', () =>{
            document.querySelector('.mini-info')?.remove();
          })
          isfetching = false;
        }
      })
    }
  }
}
function upScroll(){
  document.documentElement.scrollIntoView({behavior: "smooth"});
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
    <p>${products[index].product_type}</p>
    `
    contentsContainer.append(contentContainer);
    index++;
    if(contentsContainer.scrollWidth - contentsContainer.getBoundingClientRect().width > 2){
      showCarousel();
    }
    if(document.body.style.overflow == 'hidden'){
      document.body.style.overflow = '';
    }else{
      document.body.style.overflow = 'hidden';
    }
    isfetching = false;
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

function showCarousel(){
  const carousel = contentsContainer.querySelector('.carousel');
  const carouselRight = carousel.querySelector('.carousel-right');
  carouselRight.style.left = `${contentsContainer.clientWidth-100}px`;
  carousel.classList.add('show');
}

function windowResizing(){
  if(window.innerWidth >= 480){
    if(document.querySelector('.dropdown-menu'))
    document.querySelector('.dropdown-menu').remove();
  }
  if(contentsContainer.scrollWidth - contentsContainer.getBoundingClientRect().width > 2){
    showCarousel();
  }
}

function infoContent(e){
  if(e.target.className !== 'contents-container' && !e.target.className.includes('carousel')){
    api().then(() => {
      if(document.querySelector('.content-info')){
        document.querySelector('.content-info').remove();
      }
      let contentId = e.target.closest('.content').id;
      const contentInfo = document.createElement('div');
      contentInfo.classList.add('content-info');
      contentInfo.id = contentId;
      contentInfo.innerHTML = `
      <div class="content-info-img">
      <img src="${products[contentId].image_link}" alt="${products[contentId].name}">
      </div>
      <div class="content-info-text">
      <h2>${products[contentId].name}</h2>
      <p>${products[contentId].price}$</p>
      <p>${products[contentId].description}</p>
      </div>
      `;
      products = [];
      contentsContainer.after(contentInfo);
      isfetching = false;
    })
    if(document.querySelector('#loading-bar')){
      document.querySelector('#loading-bar').remove();
    }
  }  
}

function showSettingMenu(){
  const navBar = document.querySelector('nav');
  //메뉴 바 밖으로 움직임
  menuBar.style.transform = `translateX(${menuBar.getBoundingClientRect().width}px)`;
  // 현재 다크모드에 따라 토글 온 오프 모양 설정
  const isDark = document.body.classList.contains('dark')? 'on' : 'off';
  // 셋팅 메뉴 생성
  const settingMenu = document.createElement('div');
  settingMenu.classList.add('setting-menu');
  //settingMenu.classList.add('hidden');
  settingMenu.innerHTML = `
      <span id="dark-mode" class="material-symbols-outlined">
        toggle_${isDark}
      </span>
      <button>완료</button>
  `
  navBar.append(settingMenu);
  // 메뉴 바가 밖으로 나간뒤 셋팅 메뉴 들어옴
  setTimeout(() => {
    menuBar.classList.add('hidden');
    settingMenu.classList.add('show');
    setTimeout(() => settingMenu.style.transform = `translateX(-300px)`,100);
  }, 200);
}

function showMenuBar(){
  const settingMenu = document.querySelector('.setting-menu');
  settingMenu.style.transform = `translateX(300px)`;
  setTimeout(() => {
    settingMenu.remove();
    menuBar.classList.remove('hidden');
    setTimeout(() => menuBar.style.transform = `translateX(0)`,100);
  }, 200);
}
function settingMenuClick(event){
  if(!event.target.classList.contains('setting-menu')){
    if(event.target.tagName === 'BUTTON'){
      // 세팅 메뉴 완료 버튼 누를시 메뉴바로 바꿈
      showMenuBar()
    }else if(event.target.id === 'dark-mode'){
      // 다크모드 클릭시 설정
      document.body.classList.toggle('dark');
      const darkModeToggle = document.querySelector('#dark-mode');
      const isDark = document.body.classList.contains('dark')? 'on' : 'off';
      darkModeToggle.innerText = `toggle_${isDark}`;
    }
  }
}

function menuBarClick(event){
  if(!event.target.classList.contains('menu-bar')){
    // 설정 버튼 누를시 실행
    if(event.target.id === 'setting'){
      showSettingMenu();
      //세팅 메뉴 안에 있는 버튼을 클릭시 실행
      const settingMenu = document.querySelector('.setting-menu');
      settingMenu.addEventListener('click', settingMenuClick);
    }
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
window.addEventListener('resize', windowResizing);
contentsContainer.addEventListener('click', infoContent);
menuBar.addEventListener('click', menuBarClick)
