/* 연습문제 1
function findMaxValue(...args){
  let maxValue = args[0];
  for(let i = 1; i < args.length; i++){
    const firstNumber = parseFloat(maxValue);
    const secondNumber = parseFloat(args[i]);
    if(!firstNumber){
      maxValue = secondNumber;
    }else if(!secondNumber){
      continue;
    }else {
      maxValue = firstNumber >= secondNumber ? firstNumber : secondNumber;
    }
  }
  return maxValue;
}

// 테스트 케이스 
console.log(findMaxValue(-3, 7, -345, 41, 9, 137, 69))
console.log(findMaxValue(-31, 8, null, -26, false, 92, {}, 284, 923, [], "2045.8", 'zip', 54, "1024")) */


function Movie(title, author, release){
  this.title = title
  this.author = author
  this.release = release
  console.dir(this)

  this.printMovieInfo = () => {
      const getInfo = () =>{
        console.dir(this)
          return `${this.title}-${this.author}는 ${this.release}에 발매되었다.`
      }
      console.log(getInfo()) 
  }
}

const movie = new Movie("해리포터", "조앤K롤링", "2003 년 3월 23일")
movie.printMovieInfo();


function getDistance(...args){
  const firstX = args[0].x;
  const firstY = args[0].y;
  if(args.length > 1){
    const secX = args[1].x ?? 0;
    const secY = args[1].y ?? 0;
    return Math.sqrt((firstX - secX) ** 2 + (firstY - secY) ** 2);
  }else{
    return Math.sqrt(firstX ** 2 + firstY ** 2);
  }
}

 // 테스트 케이스
 console.log(getDistance({x: 3, y: 2}, {x: 8, y: 14}))
 console.log(getDistance({x: 3, y: 4}))

 // countDuplication 함수 구현하기 
function countDuplication(...args){
  const firstElement = args[0];
  let count = 0;
  for(let arg of args){
    if(arg === firstElement) count++;
  }
  return count - 1;
}

// 테스트 케이스 
console.log(countDuplication('cat', 'apple', 'cat', 'tiger', 'cat', 'water', 'computer', 'cat', 'lion', 'pear', 'cat')) // 4


function add(...args){
  console.log(args)
  let result = 0;
  for(let arg of args){
    const parseArg = parseFloat(arg);
    if(parseArg){
      result += parseArg;
    } 
  }
  return result;
}

// 테스트 케이스
console.log(add(3, null, 19, false, '9', [], 7, {}, '', 34, 'earth', '3.9')) // 75.9


function divider(...args){
  const divideNumber = args[0];
  const resultArray = [];
  for(let i = 1; i < args.length; i++){
    if(divideNumber){
      resultArray.push(args[i]/divideNumber);
    }else{
      resultArray.push(args[i]);
    }
  } 
  return resultArray;
}


// 테스트 케이스 
console.log(divider(2, 39, 4, 7, 28, 62, 28))
console.log(divider(0, 39, 4, 7, 28, 62, 28))


const numbers = [121, 23, 345, 43, 59]

function pickIndex(len){
    return Math.floor(Math.random() * len)
}
function shuffle(arr){
    for(let i in arr){
      const randomIndex = pickIndex(arr.length);
      let temp = arr[i];
      arr[i] = arr[randomIndex];
      arr[randomIndex] = temp;
    }
    return arr;
}

console.log(shuffle(numbers))


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
]
// function filterSeoul(element){
//   const newArray = [];
//   for(let i = 0; i < element.length; i++){
//     if(element[i].city === 'seoul') newArray.push(element[i])
//   }
//   return newArray;
// }
// function filter(f, arr){
//   return f(arr);
// }
function filterSeoul(element){
  return element.city === 'seoul'
}
function filter(f, arr){
  const newArray = [];
  let j = 0
  for(let i in arr){
    if(f(arr[i])){
      newArray[j] = arr[i];
      j++;
    }
  }
  // for(let i in newArray){
  //   if(newArray[i] === undefined){
  //     delete newArray[i];
  //   }
  // }
  return newArray;
}
const seoulFriends = filter(filterSeoul, friends)
console.log(seoulFriends)


function add(a, b){
  return a + b
}
function subtract(a, b){
  return a - b
}
function multiply(a, b){
  return a * b
}
function divider(a, b){
  return a / b
}
function pow(a, b){
  let result = a;
  for(let i = 1; i < b; i++){
    result *= a;
  }
  return result;
}

function calculator(mode, a, b, ...funcs){
  let ret = null
  switch(mode){
      case '+':
          ret = funcs[0](a, b)
          break
      case '-':
          ret = funcs[1](a, b)
          break
      case '*':
          ret = funcs[2](a, b)
          break
      case '/':
          ret= funcs[3](a, b)
          break
      case '^':
          ret = funcs[4](a, b)
          break
  }
  return ret
}

// 테스트 케이스
const ret1 = calculator('+', 3, 4, add, subtract, multiply, divider, pow)
const ret2 = calculator('-', 3, 4, add, subtract, multiply, divider, pow)
const ret3 = calculator('*', 3, 4, add, subtract, multiply, divider, pow)
const ret4 = calculator('/', 3, 4, add, subtract, multiply, divider, pow)
const ret5 = calculator('^', 3, 4, add, subtract, multiply, divider, pow)

console.log(ret1)
console.log(ret2)
console.log(ret3)
console.log(ret4)
console.log(ret5)