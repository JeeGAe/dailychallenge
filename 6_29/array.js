function biggerThanThree(numbers){
  const newNumbers = []
  for(let i = 0, j = 0; i < numbers.length; i++){
    if(numbers[i] > 3) {
      newNumbers[j] = numbers[i]
      j++;
    }
  }
  return newNumbers;
}

const numbers = [-1,5,36,0,5,11,-213,'s'];
console.log(biggerThanThree(numbers));

function biggerThanThree2(numbers){
  let j = 0
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 3) {
      numbers[j] = numbers[i]
      j++;
    }
  }
  while(numbers.length > j){
    numbers[j] = null
    j++
  }
  return numbers;
}

const numbers2 = [-1,5,36,0,5,11,-213,'s'];
console.log(biggerThanThree2(numbers2));

function biggerThanThree3(numbers){
  let newNumbers = []
  for(let i = 0; numbers.length > i; i++){
    if(numbers[i] > 3){
      newNumbers.push(numbers[i]);
    }
  }
  return newNumbers
}

const numbers3 = [-1,5,36,0,5,11,-213,'s'];
console.log(biggerThanThree3(numbers3));