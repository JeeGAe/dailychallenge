const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');
const app = express();
const router = express.Router()
const port = 3000;
let books = {"홍길동": [], "김영희": [], "김철수" : []};
const userData = require('./src/models/User');
const bookData = require('./src/models/Book');

const corsOptions = {
  origin : 'http://127.0.0.1:5500',
  credentials : true
}

const CONNECT_URL = 'mongodb://127.0.0.1:27017/library';
mongoose.connect(CONNECT_URL)
.then(() => console.log('mongoDB is connected ...'))
.catch(e => console.log(`Failed to connect mongodb : ${e}`));

const logger = function (req, res, next){
  console.log(Date.now());
  next();
}

// const saveUser = function (req, res, next){
//   req.user = req.params.uname;
//   console.log(req.user);
//   next();
// }

app.use(cors(corsOptions));
app.use(express.json());
app.use(logger);
// app.use('/users/:uname/books', saveUser);
app.get('/library', async (req, res) => {
  const response = await axios.get('mongodb://127.0.0.1:27017/library');
  // res.send(response.data);
})

app.post('/create/user', (req, res) => {
  console.log(req.body);
  
  const user1 = new userData.User({
    name : req.body.name,
    userId : req.body.userId,
    email : req.body.email,
    password : req.body.password,
    birth : req.body.birth,
    borrowedBook : req.body.borrowedBook
  })
  
  user1.save()
  .then((() => {console.log('user data created!!')}))
  .catch(e => console.log(`Failed to create user data : ${e}`));

  res.json({ name : req.body.name, email : req.body.email, userId : req.body.userId, password : req.body.password, birth : req.body.birth, borrwedBook : req.body.borrowedBook});
})

app.post('/create/book', (req, res) => {
  console.log(req.body);
  
  const book = new bookData({
    title : req.body.title,
    release : req.body.release,
    author : req.body.author,
    category : req.body.category,
    borrowUserId : req.body.borrowUserId,
  })
  
  book.save()
  .then((() => {console.log('book data created!!')}))
  .catch(e => console.log(`Failed to create book data : ${e}`));

  res.json({ title : req.body.title, release : req.body.release, author : req.body.author, category : req.body.category, borrowUserId : req.body.borrowUserId});
})
// router.post('/', (req, res, next) => {
//   console.log(req.query.name);
//   if(req.query.name){
//     books[req.user].push(req.query.name);
//   }
//   next('route');
// })

// router.get('/', (req, res) => {
//   res.send(`안녕하세요 ! 
//   도서 목록에 ${books[req.user]} 가 있습니다.
//   `)
// })

// router.get('/:name', (req, res, next) => {
//   if(books[`${req.user}`].includes(`${req.params.name}`)){
//     res.send(`${req.params.name}는 도서목록에 포함되어있습니다.`)
//   }else{
//     res.send('도서목록에 없는 책입니다.')
//   }
// })

// router.put('/:name', (req, res) => {
//   console.log("PUT")
//   books[`${req.user}`] = books[`${req.user}`].map(book => {
//     console.log(book, req.params.name, req.query.book)
//     if(book === req.params.name && req.query.book !== undefined){
//       console.log('바꿈')
//       return req.query.book
//     }else{
//       console.log('안바꿈')
//       return book
//     }
//   })
//   res.send('수정되었습니다.')
// })

// router.delete('/:name', (req, res) => {
//   console.log("DELETE");
//   let newBooks = books[`${req.user}`].filter(book => {
//     if(book !== req.query.book && req.query.book !== undefined){
//       console.log('바꿈')
//       return true
//     }else return false;
//   })
//   books[`${req.user}`] = newBooks;
//   res.send('삭제되었습니다.')
// })

app.use('/users/:uname/books', router);

app.listen(port, () => {
  console.log('listen...');
})