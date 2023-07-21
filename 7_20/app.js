const openButton = document.querySelector('.open-btn');
const submitButton = document.querySelector('.submit-btn');
const modalWindow = document.querySelector('.modal-window');
const container = document.querySelector('.container');
const upload = document.querySelector('#file-upload');
let products = [];
let index = 0;
let data = [];

// function ajax(obj){
	
// 	const xhr = new XMLHttpRequest();
	
// 	var method = obj.method || 'GET';
// 	var url = obj.url || '';
// 	var data = obj.data || null;
	
// 	/* 성공/에러 */
// 	xhr.addEventListener('load', function() {
		
// 		const data = xhr.responseText;
		
// 		if(obj.load)
// 			obj.load(data);
// 	});
	
// 	/* 성공 */
// 	xhr.addEventListener('loadend', function() {
		
// 		const data = xhr.responseText;
		
// 		//console.log(data);
		
// 		if(obj.loadend)
// 			obj.loadend(data);
// 	});
	
// 	/* 실패 */
// 	xhr.addEventListener('error', function() {
		
// 		console.log('Ajax 중 에러 발생 : ' + xhr.status + ' / ' + xhr.statusText);
		
// 		if(obj.error){
// 			obj.error(xhr, xhr.status, xhr.statusText);
// 		}
// 	});
	
// 	/* 중단 */
// 	xhr.addEventListener('abort', function() {
		
// 		if(obj.abort){
// 			obj.abort(xhr);
// 		}
// 	});
	
// 	/* 진행 */
// 	xhr.upload.addEventListener('progress', function() {
		
// 		if(obj.progress){
// 			obj.progress(xhr);
// 		}
// 	});
	
// 	/* 요청 시작 */
// 	xhr.addEventListener('loadstart', function() {
		
// 		if(obj.loadstart)
// 			obj.loadstart(xhr);
// 	});
	
// 	if(obj.async === false)
// 		xhr.open(method, url, obj.async);
// 	else
// 		xhr.open(method, url, true);
	
// 	if(obj.contentType)
// 		xhr.setRequestHeader('Content-Type', obj.contentType);	
		
// 	xhr.send(data);	
// }
// function isValid(data){
		
//   //파일인지 유효성 검사
//   if(data.types.indexOf('Files') < 0)
//     return false;
  
//   //이미지인지 유효성 검사
//   if(data.files[0].type.indexOf('image') < 0){
//     alert('이미지 파일만 업로드 가능합니다.');
//     return false;
//   }
  
//   //파일의 개수는 1개씩만 가능하도록 유효성 검사
//   if(data.files.length > 1){
//     alert('파일은 하나씩 전송이 가능합니다.');
//     return false;
//   }
  
//   //파일의 사이즈는 50MB 미만
//   if(data.files[0].size >= 1024 * 1024 * 50){
//     alert('50MB 이상인 파일은 업로드할 수 없습니다.');
//     return false;
//   }
  
//   return true;
// }
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
    if(document.querySelector('#basic-open-btn') != null){
      document.querySelector('#basic-open-btn').remove();
    }
    if(document.querySelector('nav') === null){
      const navTag = document.createElement('nav');
      navTag.innerHTML = `<button class="open-btn" type="button">업로드</button>`;
      document.body.append(navTag);
      const openButton = document.querySelector('.open-btn');
      openButton.addEventListener('click', modal);
      openButton.addEventListener('mouseenter', showToolTip);
      openButton.addEventListener('mouseleave', removeToolTip);
    }
  }else if(window.pageYOffset < 50){
    if(document.getElementById('basic-open-btn') === null){
      const openButton = document.createElement('button');
      openButton.classList.add('open-btn');
      openButton.id = 'basic-open-btn';
      openButton.innerText = '업로드';
      document.body.prepend(openButton);
      openButton.addEventListener('click', modal);
      openButton.addEventListener('mouseenter', showToolTip);
      openButton.addEventListener('mouseleave', removeToolTip);
    }
    if(document.querySelector('nav') != null){
      document.querySelector('nav').remove();
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

// function fileUpload(e){
//   //const data = e.dataTransfer;
//         console.log(data1);
// 		//유효성 Check
// 		//if(!isValid(data)) return;

// 		const formData = new FormData();
// 		formData.append('uploadFile', data1.files[0]);
		
// 		ajax({
// 			url: './upload',
// 			method: 'POST',
// 			data: formData,
// 			progress: () => {
				
// 			},
// 			loadend: () => {
				
// 			}
// 		});
//   if(document.body.style.overflow == 'hidden'){
//     document.body.style.overflow = '';
//   }else{
//     document.body.style.overflow = 'hidden';
//   }
//   modalWindow.classList.toggle('show');
//   container.classList.toggle('show');
// }

function displayImg(e){
  e.preventDefault();  
  const contentsContainer = document.querySelector('.contents-container');
  contentsContainer.style.display = 'flex';
  const contentContainer = document.createElement('div');
  contentContainer.classList.add('content');
  contentContainer.innerHTML = `
  <div class="img-container">
    <img src="${data[0].path}" alt="">
  </div>
  <h2>${data[0].title}</h2>
  <p>${data[0].desc}</p>
  `
  contentsContainer.append(contentContainer);
  index++;

  if(document.body.style.overflow == 'hidden'){
    document.body.style.overflow = '';
  }else{
    document.body.style.overflow = 'hidden';
  }
  modalWindow.classList.toggle('show');
  container.classList.toggle('show');
  let addJSON = {
    title : e.target.form['0'].value,
    desc : e.target.form['1'].value,
    path : 'a'
}

//JSON.stringify(data.push(addJSON))
//const jsonParse = JSON.parse(data.push(addJSON));
console.log(JSON.stringify(data.push(addJSON)));
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

async function api(){
  // const response = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
  // const productsJson = await response.json();

  // await productsJson.forEach(json => products.push(json));
  // console.log(products);
  console.log("fetching..")
  const response = await fetch("./upload/data.json");
  const dataJson = await response.json();

  await dataJson.forEach(json => data.push(json));
  
}
api();
