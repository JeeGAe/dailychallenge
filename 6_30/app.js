const nav = document.createElement('div');
nav.id = 'nav';
const menu = document.createElement('div');
for(let i = 0; i < 3; i++){
  const bar = document.createElement('div');
  bar.className = 'bar';
  menu.appendChild(bar);
}
const screenMode = document.createElement('div');
screenMode.id = 'screen-mode';
const circleBtn = document.createElement('div');
circleBtn.id = 'circle-btn';
screenMode.appendChild(circleBtn);
const profileMenu = document.createElement('div');
profileMenu.id = 'profile-menu';
profileMenu.innerHTML = `<img src="./photo.jpg" alt=""/>`;
nav.append(menu, screenMode, profileMenu);

const title = document.createElement('div');
title.id = 'title';
const center = document.createElement('div');
center.id = 'center';
title.appendChild(center);
const heading = document.createElement('div');
heading.id = 'heading';
heading.innerHTML = `<h1>My photo gallery</h1>
<h4>my old memories from my life</h4>`;
const search = document.createElement('div');
search.id = 'search';
const searchPhoto = document.createElement('input');
searchPhoto.type = 'text';
searchPhoto.palceholder = 'Search photo ...';
search.appendChild(searchPhoto);
center.append(heading, search);

const photoList = document.createElement('div');
photoList.id = 'photo-list';
for(let i = 0; i < 9; i++){
const photoContainer = document.createElement('div');
photoContainer.className = 'photo-container';
const photoCard = document.createElement('div');
photoCard.className = 'photo-card';
const photoImg = document.createElement('img');
photoImg.src = './photo.jpg';
photoImg.alt = '';
photoCard.appendChild(photoImg);
const photoName = document.createElement('div');
photoName.className = 'photo-name';
photoName.innerText = 'sunrise'
photoContainer.append(photoCard, photoName);
photoList.appendChild(photoContainer);
}

const modalWindow = document.createElement('div');
modalWindow.className = 'modal-window hide';
const header = document.createElement('div');
header.id = 'header';
header.innerText = 'Food Recipe';
const modalBody = document.createElement('div');
modalBody.id = 'body';
const bodyContent = document.createElement('p');
bodyContent.innerText = 'lorem';
modalBody.appendChild(bodyContent);
const footer = document.createElement('div');
footer.id = 'footer';
const closeBtn = document.createElement('button');
closeBtn.innerText = 'Close';
footer.appendChild(closeBtn);
modalWindow.append(header, modalBody, footer);

const root = document.querySelector('#root');
root.append(nav, title, photoList, modalWindow);