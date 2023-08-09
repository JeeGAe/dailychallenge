const express = require('express');
const Book = require('../models/Book');
const User = require('../models/User');
const expressAsyncHandler = require('express-async-handler');
const { isAuth } = require('../../auth');

const router = express.Router();

router.get('/', isAuth, expressAsyncHandler(async (req, res, next) => {
  const borrowedBook = await Book.find({ borrowUserId : req.user._id });
  if(borrowedBook.length === 0){
    res.json({ code : 200, message : 'borrowed book is not exist!'})
  }else{
    res.json({ code : 200, borrowedBook : [borrowedBook.name]})
  }
}))

router.post('/', expressAsyncHandler(async (req, res, next) => {
  const searchBook = Book.find({ title : req.body.title, author : req.body.author});
  if(!searchBook){
    res.status(204).json({ code : 204, message : 'Book is already'});
  }else{
    const book = new Book({
      title : req.body.title,
      release : new Date(req.body.release),
      author : req.body.author,
      category : req.body.category,
    })
    const newBook = book.save();
    const { title, release, author, category } = newBook;
    res.json({ code : 200, title, release, author, category });
  }
}))

router.post('/borrow/:id', isAuth, expressAsyncHandler(async (req, res, next) => {
  const searchBook = await Book.find( {_id : req.params.id});
  console.log(req.params.id)
  if(searchBook.isBorrowed){
    res.json({ code: 200, message : 'Book is already borrowed'})
  }else{
    const user = await User.find({ email : req.user.email});
    console.log(user.email);
    user.borrowedBook = searchBook.name;
    const borrowUser = await user.save();
    res.json({ code: 200, message : 'borrow is success!!'})
  }
}))

module.exports = router;