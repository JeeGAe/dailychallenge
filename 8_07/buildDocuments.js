const Book = require('./src/models/Book');
const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.MONGODB_URL)
.then(() => console.log('mongodb is connected ...'))
.catch(e => console.log(`failed to connect : ${e}`))

const category = ['소설', '과학', '인문학', '요리', '학습', '만화', '자기계발']
// 랜덤 문자열
const RandomString = n => {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let str = Array(n).fill('a')
  return str.map(s => alphabet[Math.floor(Math.random() * alphabet.length)]).join('');
}
// 랜덤 날짜
const RandomDate = (from, to) => {
  return new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime()));
}
// 랜덤 배열 추출
const RandomArray = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

const createBookData = async (n) => {
  for(let i = 0; i < n; i++){
    const book = new Book({
      title : RandomString(7),
      release : RandomDate(new Date("1990-01-01"), new Date("2023-08-10")),
      author : RandomString(5),
      category : RandomArray(category),
    })
    await book.save()
  }
}

createBookData(5);