const openButton = document.querySelector('.open-btn');
const submitButton = document.querySelector('.submit-btn');
const modalWindow = document.querySelector('.modal-window');
const container = document.querySelector('.container');
const upload = document.querySelector('#file-upload');
const dropdownBtn = document.querySelector('.dropdown-btn');
const contentsContainer = document.querySelector('.contents-container');
const menuBar = document.querySelector('.menu-bar');
let products = [];
let uploadedProducts = [];
let index = 0;
let data = [];
let isfetching = false;
let cardLineCount = 0;
let showingCards = [];
let copyShowingCards = []
let cardCount = 0;
let isPrice = null;

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
  toolTip.innerText = '상품을 업로드 하려면 클릭하세요!';
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

function ScrollEvents(){
  let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
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

  // 브라우저 하단 근처까지 내려갔을 때 상품카드 생성
  if(scrollHeight - 30 < window.pageYOffset + document.documentElement.clientHeight){
    //uploadedProducts.length
    // 만들어진 카드 개수 (주석됨)
    // let cardCount = document.querySelectorAll('.product-card').length > 0 ? document.querySelectorAll('.product-card').length : 0;
    // 만들어진 카드 라인 줄 수
    cardLineCount = cardCount !== 0? parseInt(cardCount / 3) + 1 : null;
    let needCard = uploadedProducts.length - cardCount;
    if(needCard > 0){
      
      if(needCard < 2 || cardCount % 2 === 1){
        while(needCard > 0){
          const productCard = document.createElement('div');
          productCard.classList.add('product-card');
          productCard.classList.add('up-move');
          productCard.innerHTML = `
            <div><img src="${uploadedProducts[uploadedProducts.length- needCard].image_link}" alt="">
            </div>
            <div>
              <h2>${uploadedProducts[uploadedProducts.length- needCard].name}</h2>
              <p>${uploadedProducts[uploadedProducts.length- needCard].price}$</p>
            </div>
          `;
          const productCardContainer = document.querySelector('.product-card-container');
          productCardContainer.append(productCard);
          setTimeout(() => productCard.classList.remove('up-move'), 200);
          showingCards.push(uploadedProducts[uploadedProducts.length- needCard]);
          //copyShowingCards.push(uploadedProducts[uploadedProducts.length- needCard]);
          needCard--;
          cardCount++;
        }
      }else{
        for(let i = 0; i < 2; i++){
          const productCard = document.createElement('div');
          productCard.classList.add('product-card');
          productCard.classList.add('up-move');
          productCard.innerHTML = `
            <div><img src="${uploadedProducts[uploadedProducts.length- needCard].image_link}" alt="">
              </div>
            <div>
              <h2>${uploadedProducts[uploadedProducts.length- needCard].name}</h2>
              <p>${uploadedProducts[uploadedProducts.length- needCard].price}$</p>
            </div>
          `;
          const productCardContainer = document.querySelector('.product-card-container');
          productCardContainer.append(productCard);
          setTimeout(() => productCard.classList.remove('up-move'), 200);
          showingCards.push(uploadedProducts[uploadedProducts.length- needCard]);
          //copyShowingCards.push(uploadedProducts[uploadedProducts.length- needCard]);
          needCard--;
          cardCount++;
        }
      }

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

function showCarousel(){
  const carousel = contentsContainer.querySelector('.carousel');
  const carouselRight = carousel.querySelector('.carousel-right');
  carousel.classList.add('show');

}
// 메인 컨텐츠 업로드
function uploadProduct(e){
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

function windowResizing(){
  if(window.innerWidth >= 480){
    if(document.querySelector('.dropdown-menu'))
    document.querySelector('.dropdown-menu').remove();
  }
  if(contentsContainer.scrollWidth - contentsContainer.getBoundingClientRect().width > 2){
    showCarousel();
  }
}
// 컨텐츠 컨테이너 클릭시 실행
function contentsContainerClick(e){
  // 상품 클릭 시 상세 정보 창 생성
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
      
      // 담아둔 상품 배열에 넣음
      function isUploadedProducts(Id){ // 클릭한 상품이 이미 담겨져있는지 체크
        for(let uploadedProduct of uploadedProducts){
          if(Id === uploadedProduct.id){
            return true;
            //console.log(product.id)
          }
        }
        return false;
      }
      if(uploadedProducts.length === 0 || !isUploadedProducts(products[contentId].id)){
        uploadedProducts.push(products[contentId]);
        //console.log(uploadedProducts);
      }
      // 현재 담겨진 상품 개수 출력
      if(document.querySelector('.notice') !== null){
        document.querySelector('.notice').remove(); // 초기화
      }
      const uploadedProductNotice = document.createElement('div');
      uploadedProductNotice.classList.add('notice');
      uploadedProductNotice.innerText = `선택한 상품은 ${uploadedProducts.length}개 입니다.`
      document.body.append(uploadedProductNotice);

      products = [];
      contentsContainer.after(contentInfo);
      isfetching = false;
    })
    if(document.querySelector('#loading-bar')){
      document.querySelector('#loading-bar').remove();
    }
  }else if(e.target.className.includes('carousel')){ // 캐러셀 클릭시 좌우로 이동
    if(e.target.className.includes('right')){
      contentsContainer.scrollBy({
        top: 0,
        left: 600,
        behavior: 'smooth'
      });
    }else{
      contentsContainer.scrollBy({
        top: 0,
        left: -600,
        behavior: 'smooth'
      });
    }
  }
}

// 세팅 메뉴 생성 
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
  // 나중에 수정 해보자 (프로미스 활용)
  // (new Promise((resolve, reject) => {
  //   menuBar.classList.add('hidden');
  //   settingMenu.classList.add('show');
  //   return resolve();
  // }))().then(() => {
  //   setTimeout(() => settingMenu.style.transform = `translateX(-300px)`,100);
  // })

  setTimeout(() => {
    menuBar.classList.add('hidden');
    settingMenu.classList.add('show');
    setTimeout(() => settingMenu.style.transform = `translateX(-300px)`,100)
  }, 200);
  return settingMenu.addEventListener('click', settingMenuClick);
}
// 기본 메뉴 보여줌
function showMenuBar(elem){
  elem.style.transform = `translateX(300px)`;
  setTimeout(() => {
    elem.remove();
    menuBar.classList.remove('hidden');
    setTimeout(() => menuBar.style.transform = `translateX(0)`,100);
  }, 200);
}
// 세팅 메뉴창에서 클릭 시 작용하는 여러 이벤트
function settingMenuClick(event){
  if(!event.target.classList.contains('setting-menu')){
    if(event.target.tagName === 'BUTTON'){
      // 세팅 메뉴 완료 버튼 누를시 메뉴바로 바꿈
      const settingMenu = document.querySelector('.setting-menu');
      showMenuBar(settingMenu);
    }else if(event.target.id === 'dark-mode'){
      // 다크모드 클릭시 설정
      document.body.classList.toggle('dark');
      const darkModeToggle = document.querySelector('#dark-mode');
      const isDark = document.body.classList.contains('dark')? 'on' : 'off';
      darkModeToggle.innerText = `toggle_${isDark}`;
    }
  }
}
// 카드를 재정렬
function arrangeShowCard(product){
  const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <div><img src="${product.image_link}" alt="">
        </div>
      <div>
        <h2>${product.name}</h2>
        <p>${product.price}$</p>
      </div>
    `;
    const productCardContainer = document.querySelector('.product-card-container');
    productCardContainer.append(productCard);
}
function refactoringShowingCards(keyword = ''){
  copyShowingCards = [...showingCards];
  if(keyword !== ''){
    copyShowingCards.filter(copyShowingCard => {
      copyShowingCard.name.toLowerCase().includes(keyword.toLowerCase())
    })
  }
  if(isPrice){
    // 정렬할 배열에 기존 카드 복사 후 가격순 정렬
    copyShowingCards.sort((a, b) => {
      return a.price - b.price;
    })
  }
  return copyShowingCards;
}
// 검색 기능 구현
function searchProduct(event){
  // 보여진 상품 카드중 검색한것과 일치하는것을 필터 배열에 푸쉬
  const Allcards = document.querySelectorAll('.product-card');
  Allcards.forEach(card => card.remove()); //카드 초기화
  
  if(event.target.value !== ''){
    // 카피 배열 필터링
    let copyShowingCards = refactoringShowingCards(event.target.value);
    // 필터된 배열로 다시 카드 생성
    copyShowingCards.forEach(copyShowingCard => {
      arrangeShowCard(copyShowingCard);
    });
  }else if(event.target.value === ''){
    showingCards.forEach(showingCard => {
      arrangeShowCard(showingCard);
    })
  }
  
}

// 검색 메뉴 생성
function showSearchMenu(){
  if(!document.querySelector('.search-menu')){
    const searchDiv = document.createElement('div');
    searchDiv.classList.add('search-menu');
    searchDiv.innerHTML = `
      <input type="text" placeholder="제품명을 입력하세요."><a href="#">
        <span class="material-symbols-outlined">
        search
        </span>
      </a>
    `
    const menuBar = document.querySelector('.menu-bar');
    menuBar.before(searchDiv);

    setTimeout(() => {
      searchDiv.style.opacity = '1';
    }, 200);
    return searchDiv.addEventListener('input', searchProduct);
  }else{
    // 메인메뉴의 찾기를 한번더 누르면 없어짐
    document.querySelector('.search-menu').remove();
  }
}
// 가격순 또는 기본값으로 카드 재정렬
function rearrangeCard(){
  const Allcards = document.querySelectorAll('.product-card');
  Allcards.forEach(card => card.remove()); //카드 초기화
  if(isPrice){
    let keyword = document.querySelector('.search-menu input')?.value || '';
    let copyShowingCards = refactoringShowingCards(keyword);
    copyShowingCards.forEach(copyShowingCard => {
      arrangeShowCard(copyShowingCard);
    });
    document.querySelector('#price').innerText = '원래대로';
  }else{
    showingCards.forEach(showingCard => {
      arrangeShowCard(showingCard);
    });
    document.querySelector('#price').innerText = '가격순';
  }
}
// 기본 메뉴 클릭시 발생 이벤트
function menuBarClick(event){
  event.preventDefault();
  if(!event.target.classList.contains('menu-bar')){
    if(event.target.id === 'setting'){
      showSettingMenu();
    }else if(event.target.id === 'search'){
      showSearchMenu();
    }else if(event.target.id === 'price'){
      if(isPrice === null){
        isPrice = false;
      }
      isPrice = !isPrice;
      rearrangeCard();
    }
  }
}


openButton.addEventListener('click', modal);
openButton.addEventListener('mouseenter', showToolTip);
openButton.addEventListener('mouseleave', removeToolTip);
submitButton.addEventListener('click', uploadProduct);
//openButton.addEventListener('mouseover', moving);
window.addEventListener('scroll', ScrollEvents);
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
contentsContainer.addEventListener('click', contentsContainerClick);
menuBar.addEventListener('click', menuBarClick)


