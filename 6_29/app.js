let userInput = prompt('100보다 큰 수를 입력하시오')
console.log(userInput)
// while(true){
//   if(userInput === null) break;
//   if(userInput > 100) break;
//   if(userInput === '') break;
//   userInput = prompt('100보다 큰 수를 입력하시오')
// }
while(!(userInput === null) && !(userInput > 100) && !(userInput === '') && (userInput === NaN)){
  userInput = prompt('100보다 큰 수를 입력하시오')
}
//(isNaN(userInput))