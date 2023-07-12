/*
const movies = [
  {title: 'Harry Potter', release: '2003-02-22'}, 
  {title: 'Indiana Jhones', release: '2009-01-09'}, 
  {title: 'Jurassic Park', release: '2007-04-13'},
  {title: 'Iron man', release: '2012-12-18'},
  {title: 'Spider man', release: '2017-03-07'}
]; 

function findMovie(movie){
  console.log(parseInt(movie.release.split('-')[0]));
  if(2005 <= parseInt(movie.release.split('-')[0]) && movie.release.split('-')[0] <= 2010) return movie;
}
console.log(movies.find(findMovie)); */

/*
function findManMovie(movie){
  console.log(movie.title.includes('man'));
  if(movie.title.includes('man')) return movie;
}
console.log(movies.find(findManMovie)); */

/*
function findJMovie(movie){
  console.log(movie.title.startsWith('J'));
  if(movie.title.startsWith('J')) return movie;
}
console.log(movies.find(findJMovie)); */

/* 5번 연습문제
const words = [
  'abc',
  'animal',
  'fruit',
  'abba',
  'abcba',
  'location',
  'radar',
  'madam',
  'mario',
  'level'
];

function aWords(word){
  if(word.includes('a')) console.log(word);
}
words.forEach(aWords); */

/* 6번 연습문제
const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' 

fetch(API_URL)
.then(function(res){
  return res.json()
})
.then(function(products){
  //console.log(products)
  function findProdcuts(product){
    if(product.product_type.includes('mascara') && parseFloat(product.price) < 10) console.log(product);
  }
  products.forEach(findProdcuts);
    
}) */

/*
const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' 

fetch(API_URL)
.then(function(res){
    return res.json()
})
.then(function(products){
    // console.log(products)
    function findProdcuts(product){
      if(product.product_type.includes('lipstick') && 4 < parseFloat(product.rating) && parseFloat(product.rating) < 5) console.log(product);
    }
    products.forEach(findProdcuts);
  
}) */

/*
const friends = [
  {name: 'victoria', age: 13, city: 'seoul'},
  {name: 'sun', age: 34, city: 'busan'},
  {name: 'johseb', age: 25, city: 'busan'},
  {name: 'syleemomo', age: 9, city: 'seoul'},
  {name: 'hannah', age: 41, city: 'daegu'},
  {name: 'shara', age: 37, city: 'seoul'},
  {name: 'martin', age: 28, city: 'daegu'},
  {name: 'gorgia', age: 39, city: 'seoul'},
  {name: 'nana', age: 24, city: 'busan'},
  {name: 'dannel', age: 19, city: 'seoul'},
]; */

/*
const SNSFriends = friends.filter(findSNSFriends);
function findSNSFriends(friend){
  if(friend.city === 'seoul' && parseInt(friend.age) < 30) return friend;
}
console.log(SNSFriends); */
/*
const friendCity = {
  seoul : 0,
  busan : 0,
  daegu : 0
};

function findFriendCity(friend){
  switch(friend.city) {
    case 'seoul':
      friendCity.seoul++;
      break;
    case 'busan':
      friendCity.busan++;
      break;
    case 'daegu':
      friendCity.daegu++;
      break;
    default:
      break;
  }
}
friends.forEach(findFriendCity);
console.log(`seoul : ${friendCity.seoul}\n busan : ${friendCity.busan}\n daegu : ${friendCity.daegu}`);  */

/*
function findFortyFriend(friend){
  return parseInt(friend.age) > 40;
}
console.log(friends.some(findFortyFriend)); */
/*
const users = [
  {name: 'victoria', age: 13, city: 'seoul', email: 'victoria@gmail.com'},
  {name: 'sun', age: 34, city: 'busan', email: 'sun@gmail.com'},
  {name: 'johseb', age: 25, city: 'busan', email: 'johseb@gmail'},
  {name: 'syleemomo', age: 9.23, city: 'seoul', email: 'syleemomo@nate.com'},
  {name: 'hannah', age: 41, city: 'daegu', email: 'hannah0923*gmail.com'},
  {name: 'shara', age: 37, city: 'seoul', email: 'shara@gmail.com'},
  {name: 'martin', age: -34, city: 'daegu', email: 'martin@gmail.com'},
  {name: 'gorgia', age: 39, city: 'seoul',  email: 'gorgia@gmail.com'},
  {name: 'nana', age: 24, city: 'busan', email: 'nana@gmail.com'},
  {name: 'dannel', age: 19, city: 'seoul', email: 'dannel@gmail.com'},
];

function filteringUsers(user){
  if(parseInt(user.age) > 0 && Number.isInteger(user.age) && user.email.endsWith('.com') && user.email.includes('@')) return user;
}
const filteredUsers = users.filter(filteringUsers);
console.log(filteredUsers); */

/*
const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' 

// 상품 정보에 대한 배열로부터 웹화면에 보여줄 DOM 객체로 이루어진 배열로 변환하기
// product 객체의 image_link, name, price, description 프로퍼티 사용하기
const rootDiv = document.getElementById('root');

function buildElement(product){
  const productContainer = document.createElement('div');
  productContainer.classList.add('product');
  const productImgDiv = document.createElement('div');productImgDiv.classList.add('product-img');
  const productImgTag = document.createElement('img');
  productImgTag.src = `${product.image_link}`;
  productImgDiv.appendChild(productImgTag);
  const productName = document.createElement('div');
  productName.classList.add('product-name');
  productName.innerText = `${product.name}\n($${product.price})`
  const productDescription = document.createElement('div');
  productDescription.classList.add('product-description');
  productDescription.innerText = `${product.description}`
  productContainer.append(productImgDiv, productName, productDescription)
  console.log(productContainer);
  return productContainer;
}

// DOM 객체로 이루어진 배열을 사용하여 웹 화면에 상품 정보 보여주기
function displayProduct(product){
  rootDiv.append(product);
}

fetch(API_URL)
.then(function(res){
    return res.json()
})
.then(function(products){
    console.log(products)

    // 상품 정보에 대한 배열로부터 웹화면에 보여줄 DOM 객체로 이루어진 배열로 변환하기
    const productsRefined = products.map(buildElement)
    
    // DOM 객체로 이루어진 배열을 사용하여 웹 화면에 상품 정보 보여주기
    productsRefined.forEach(displayProduct)
})  */

const ary = new Array(100).fill(0);
for(let index in ary){
  if(parseInt(index) != 0 && (parseInt(index) + 1) % 3 === 0){
    ary[index] = parseInt(index) + 1;
  }
}
console.log(ary);

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
for(let index in alphabet){
  if(parseInt(index) != 0){
    alphabet[parseInt(index)] = alphabet[parseInt(index) - 1] + alphabet[parseInt(index)]
  }
}
console.log(alphabet);

const threeArray = new Array(100);
let threeArrayIndex = 0;
while(threeArrayIndex < threeArray.length){
  threeArray[threeArrayIndex] = (threeArrayIndex + 1) * 3;
  threeArrayIndex++;
}
console.log(threeArray);

const alphabet2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function randomStr(n){
  const randomAlphabet = [];
  for(let i = 0; i < n; i++){
    randomAlphabet[i] = alphabet2[parseInt(Math.random()*alphabet2.length)]
  }
  return randomAlphabet;
}
console.log(randomStr(6));
console.log(randomStr(6));
console.log(randomStr(8));

for(let index in threeArray){
  if(threeArray[index] % 6 === 0){
    threeArray[index] = null;
  }
}
console.log(threeArray);

const movies = [
  {title: 'Harry Potter', release: '2003-02-22'}, 
  {title: 'Indiana Jhones', release: '2009-01-09'}, 
  {title: 'Jurassic Park', release: '2007-04-13'},
  {title: 'Iron man', release: '2012-12-18'},
  {title: 'Spider man', release: '2017-03-07'}
];

const movies_copied = [];

function copyMovies(movie){
  let copyMovie = {};
  for(let key in movie){
    copyMovie[key] = movie[key]
    console.log(copyMovie[key]);
  }
  //const copyMovie = {title: movie.title, release: movie.release};
  movies_copied.push(copyMovie);
}
movies.forEach(copyMovies);

movies[1].title = 'syleemomo' ;// 원본배열 변경

console.log(movies);
console.log(movies_copied);

const words = [
  'abc',
  'animal',
  'fruit',
  'abba',
  'abcba',
  'location',
  'radar',
  'madam',
  'mario',
  'level'
]
const filteredwords = words.filter(isPalindrome);
function isPalindrome(word) {
  if(word.length <= 2) return false;
  const halfWordLength = parseInt(word.length / 2);
  let splitWord = word.split('');
  for(let i = 0; i < halfWordLength; i++){
    if(splitWord.length >= 3){
      if(splitWord[0] === splitWord[splitWord.length - 1]){
        if(halfWordLength - i <= 2) return true;
      }else return false;
    }
    
  }

}

console.log(filteredwords.length);