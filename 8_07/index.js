const express = require('express');
const app = express();
const router = express.Router()
const port = 3000;
let books = {"홍길동": [], "김영희": [], "김철수" : []};

const logger = function (req, res, next){
  console.log(Date.now());
  next();
}

const saveUser = function (req, res, next){
  req.user = req.params.uname;
  console.log(req.user);
  next();
}

app.use(logger);
app.use('/users/:uname/books', saveUser);

router.post('/', (req, res, next) => {
  console.log(req.query.name);
  if(req.query.name){
    books[req.user].push(req.query.name);
  }
  next('route');
})

router.get('/', (req, res) => {
  res.send(`안녕하세요 ! 
  도서 목록에 ${books[req.user]} 가 있습니다.
  `)
})

router.get('/:name', (req, res, next) => {
  if(books[`${req.user}`].includes(`${req.params.name}`)){
    res.send(`${req.params.name}는 도서목록에 포함되어있습니다.`)
  }else{
    res.send('도서목록에 없는 책입니다.')
  }
})

router.put('/:name', (req, res) => {
  console.log("PUT")
  books[`${req.user}`] = books[`${req.user}`].map(book => {
    console.log(book, req.params.name, req.query.book)
    if(book === req.params.name && req.query.book !== undefined){
      console.log('바꿈')
      return req.query.book
    }else{
      console.log('안바꿈')
      return book
    }
  })
  res.send('수정되었습니다.')
})

router.delete('/:name', (req, res) => {
  console.log("DELETE");
  let newBooks = books[`${req.user}`].filter(book => {
    if(book !== req.query.book && req.query.book !== undefined){
      console.log('바꿈')
      return true
    }else return false;
  })
  books[`${req.user}`] = newBooks;
  res.send('삭제되었습니다.')
})

app.use('/users/:uname/books', router);

app.listen(port, () => {
  console.log('listen...');
})