let index1 = 1; index2 = 1; index3 = 1; index4 = 1; index5 = 1; index6 = 1; index7 = 1; index8 = 1; index9 = 1; index11 = 1; index11 = 1;
let moveImg1 = document.querySelector('#moveimg1');
let imgs1 = ['https://i.pinimg.com/236x/e3/41/4b/e3414b2fcf00375a199ba6964be551af.jpg', 'https://i.pinimg.com/236x/28/85/8c/28858cedb11e772b00edd867009c5e88.jpg', 'https://i.pinimg.com/236x/7a/e3/37/7ae3370edba908ba0df9469d5d6133b0.jpg', 'https://i.pinimg.com/236x/d3/fb/69/d3fb6973cddc1d875dc7c2e04525d2e7.jpg'];
setInterval(() => {moveImg1.src = imgs1[index1];console.log(index1); index1++; if(index1 > 3){index1 = 0;};} , 5000);

let moveImg2 = document.querySelector('#moveimg2');
let imgs2 = ['https://i.pinimg.com/236x/78/6e/00/786e00eab219eca59803d118fbe0feb3.jpg', 'https://i.pinimg.com/236x/42/57/16/4257161f841b16b62c3aa92d881a9e8d.jpg', 'https://i.pinimg.com/236x/d2/3f/c8/d23fc8dd63c85874f8e12fd79c9662e1.jpg', 'https://i.pinimg.com/236x/01/84/ca/0184cafdc51049a7d1cc9df88e87db18.jpg'];
setInterval(() => {moveImg2.src = imgs2[index2]; index2++; if(index2 > 3){index2 = 0;};} , 5000);

let moveImg3 = document.createElement('img');
moveImg3.id = 'moveimg3';
moveImg3.src = 'https://i.pinimg.com/236x/c4/57/bd/c457bd9496170bfa3845b7cee775df65.jpg'
const img3 = document.querySelector('.move-img3');
let imgs3 = ['https://i.pinimg.com/236x/c4/57/bd/c457bd9496170bfa3845b7cee775df65.jpg', 'https://i.pinimg.com/236x/a4/7c/6e/a47c6eff8a1b1d5e92f8985cb6aed67d.jpg', 'https://i.pinimg.com/236x/b8/ac/51/b8ac51e8e5d9de70114f431574907072.jpg', 'https://i.pinimg.com/550x/a7/87/20/a78720c39a39ac50a2856420d636d113.jpg'];
setTimeout(() => {img3.append(moveImg3);
  moveImg3.classList = 'moving-animation';
  setInterval(() => {moveImg3.src = imgs3[index3]; index3++; if(index3 > 3){index3 = 0;};} , 5000);
}, 200);

let moveImg4 = document.createElement('img');
moveImg4.id = 'moveimg4';
moveImg4.src = 'https://i.pinimg.com/236x/05/65/20/05652045e57af33599557db9f23188c0.jpg'
const img4 = document.querySelector('.move-img3');
let imgs4 = ['https://i.pinimg.com/236x/05/65/20/05652045e57af33599557db9f23188c0.jpg', 'https://i.pinimg.com/236x/ae/91/ab/ae91abd87cc085d894a44f6b34c8129c.jpg', 'https://i.pinimg.com/236x/7c/4f/39/7c4f3961236c4914b25a7ec06f8e08e2.jpg', 'https://i.pinimg.com/236x/51/97/90/5197905f29a3bf796150506e12cb234c.jpg'];
setTimeout(() => {img4.append(moveImg4);
  moveImg4.classList = 'moving-animation';
  setInterval(() => {moveImg4.src = imgs4[index4]; index4++; if(index4 > 3){index4 = 0;};} , 5000);
}, 200);

let moveImg5 = document.createElement('img');
moveImg5.id = 'moveimg5';
moveImg5.src = 'https://i.pinimg.com/236x/95/f3/73/95f373590dad79bcf3202ce6edad5bcd.jpg'
const img5 = document.querySelector('.move-img5');
let imgs5 = ['https://i.pinimg.com/236x/95/f3/73/95f373590dad79bcf3202ce6edad5bcd.jpg', 'https://i.pinimg.com/236x/c3/5f/ca/c35fcaff9941bce718cf9f4de3f33f57.jpg', 'https://i.pinimg.com/550x/47/92/b7/4792b7bdc6bb8d59304f23d7ac6d109a.jpg', 'https://i.pinimg.com/236x/f1/13/df/f113df475d4566caa0075c6729960fa3.jpg'];
setTimeout(() => {img5.append(moveImg5);
  moveImg5.classList = 'moving-animation';
  setInterval(() => {moveImg5.src = imgs5[index5]; index5++; if(index5 > 3){index5 = 0;};} , 5000);
}, 400);

let moveImg6 = document.createElement('img');
moveImg6.id = 'moveimg6';
moveImg6.src = 'https://i.pinimg.com/236x/fb/18/de/fb18deb4959e9a0678e1bf99105ea775.jpg'
const img6 = document.querySelector('.move-img6');
let imgs6 = ['https://i.pinimg.com/236x/fb/18/de/fb18deb4959e9a0678e1bf99105ea775.jpg', 'https://i.pinimg.com/236x/ca/ee/6f/caee6fb84a927407fd03e9f499ecaae2.jpg', 'https://i.pinimg.com/236x/3f/05/2c/3f052c9b0f402d3373b9e0916c53bac7.jpg', 'https://i.pinimg.com/236x/71/9a/84/719a84fd80e49047407371ef9b3c224d.jpg'];
setTimeout(() => {img6.append(moveImg6);
  moveImg6.classList = 'moving-animation';
  setInterval(() => {moveImg6.src = imgs6[index6]; index6++; if(index6 > 3){index6 = 0;};} , 5000);
}, 600);

let moveImg7 = document.createElement('img');
moveImg7.id = 'moveimg7';
moveImg7.src = 'https://i.pinimg.com/236x/d5/5f/97/d55f97078c0d7b60b758cac3b34114c9.jpg'
const img7 = document.querySelector('.move-img7');
let imgs7 = ['https://i.pinimg.com/236x/d5/5f/97/d55f97078c0d7b60b758cac3b34114c9.jpg', 'https://i.pinimg.com/236x/22/3a/40/223a4015ad7e274eb928024d4aa59f95.jpg', 'https://i.pinimg.com/236x/81/20/26/812026f8ac451726e00f05c7ebed409a.jpg', 'https://i.pinimg.com/236x/f4/dc/58/f4dc58f3bddf1c5b5249511820246df8.jpg'];
setTimeout(() => {img7.append(moveImg7);
  moveImg7.classList = 'moving-animation';
  setInterval(() => {moveImg7.src = imgs7[index7]; index7++; if(index7 > 3){index7 = 0;};} , 5000);
}, 800);

let moveImg8 = document.createElement('img');
moveImg8.id = 'moveimg8';
moveImg8.src = 'https://i.pinimg.com/236x/48/9c/d9/489cd9ae5fec17977c73677866202d59.jpg'
const img8 = document.querySelector('.move-img8');
let imgs8 = ['https://i.pinimg.com/236x/48/9c/d9/489cd9ae5fec17977c73677866202d59.jpg', 'https://i.pinimg.com/236x/f8/97/30/f89730229686d12c34f5a5a500aaebcd.jpg', 'https://i.pinimg.com/236x/ec/3d/16/ec3d16a602038f70dba288bc00ec7e37.jpg', 'https://i.pinimg.com/236x/88/05/12/8805128eef83a0d8b724567611ddf7a1.jpg'];
setTimeout(() => {img8.append(moveImg8);
  moveImg8.classList = 'moving-animation';
  setInterval(() => {moveImg8.src = imgs8[index8]; index8++; if(index8 > 3){index8 = 0;};} , 5000);
}, 1000);

let moveImg9 = document.createElement('img');
moveImg9.id = 'moveimg9';
moveImg9.src = 'https://i.pinimg.com/236x/14/73/0a/14730af41a58e05384b86b0bacf9d57b.jpg'
const img9 = document.querySelector('.move-img9');
let imgs9 = ['https://i.pinimg.com/236x/14/73/0a/14730af41a58e05384b86b0bacf9d57b.jpg', 'https://i.pinimg.com/236x/b1/1b/31/b11b310559340fbd1b7777f806a418a9.jpg', 'https://i.pinimg.com/236x/a7/02/84/a70284853f4e02c9038123ea77fd0186.jpg', 'https://i.pinimg.com/236x/61/be/0f/61be0fd258626af4deab36336b9abd94.jpg'];
setTimeout(() => {img9.append(moveImg9);
  moveImg9.classList = 'moving-animation';
  setInterval(() => {moveImg9.src = imgs9[index9]; index9++; if(index9 > 3){index9 = 0;};} , 5000);
}, 1000);

let moveImg10 = document.createElement('img');
moveImg10.id = 'moveimg10';
moveImg10.src = 'https://i.pinimg.com/236x/d4/32/cd/d432cdc35cf6cc5c7ec07a5036a87bca.jpg'
const img10 = document.querySelector('.move-img10');
let imgs10 = ['https://i.pinimg.com/236x/d4/32/cd/d432cdc35cf6cc5c7ec07a5036a87bca.jpg', 'https://i.pinimg.com/236x/ee/d3/dc/eed3dca79abceab30f836d2db806c0e1.jpg', 'https://i.pinimg.com/236x/bf/36/3a/bf363a930744d78f467787241198e51a.jpg', 'https://i.pinimg.com/236x/6a/77/ed/6a77ed2962aa7e66bac8ff727d939e96.jpg'];
setTimeout(() => {img10.append(moveImg10);
  moveImg10.classList = 'moving-animation';
  setInterval(() => {moveImg10.src = imgs10[index10]; index10++; if(index10 > 3){index10 = 0;};} , 5000);
}, 1200);

let moveImg11 = document.createElement('img');
moveImg11.id = 'moveimg11';
moveImg11.src = 'https://i.pinimg.com/236x/c1/d0/7f/c1d07f45a5c2b121255ba9ec54b9adf7.jpg'
const img11 = document.querySelector('.move-img11');
let imgs11 = ['https://i.pinimg.com/236x/c1/d0/7f/c1d07f45a5c2b121255ba9ec54b9adf7.jpg', 'https://i.pinimg.com/236x/18/8a/6f/188a6f3c7c25901023cd7c564281a40c.jpg', 'https://i.pinimg.com/236x/b9/44/72/b944727d606e5429bd1774790ef79353.jpg', 'https://i.pinimg.com/236x/4a/bf/51/4abf5134ee423d583ce03707a166c16e.jpg'];
setTimeout(() => {img11.append(moveImg11);
  moveImg11.classList = 'moving-animation';
  setInterval(() => {moveImg11.src = imgs11[index11]; index11++; if(index11 > 3){index11 = 0;};} , 5000);
}, 1200);