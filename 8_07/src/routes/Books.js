const express = require('express');
const Book = require('../models/Book');
const User = require('../models/User');
const expressAsyncHandler = require('express-async-handler');
const { isAuth, isAdmin } = require('../../auth');
const { deleteOne } = require('../models/Book');
const mongoose = require('mongoose');
const { Types : { ObjectId }} = mongoose;

const router = express.Router();
// 유저가 대출한 책 목록 
router.get('/', isAuth, expressAsyncHandler(async (req, res, next) => {
  const user = await User.findOne({ email : req.user.email })
  if(user.borrowedBook.length === 0){
    res.json({ code : 200, message : 'borrowed book is not exist!'})
  }else{
    res.json({ code : 200, borrowedBook : user.borrowedBook })
  }
}))
// 라이브러리에 책 추가
router.post('/', isAuth, isAdmin, expressAsyncHandler(async (req, res, next) => {
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
    res.status(201).json({ code : 201, title, release, author, category });
  }
}))
// 책 대출 api
router.post('/borrow/:id', isAuth, expressAsyncHandler(async (req, res, next) => {
  const searchBook = await Book.findOne( {_id : req.params.id});
  console.log(req.params.id, searchBook);
  if(searchBook.isBorrowed){
    res.status(404).json({ code: 404, message : 'Book is already borrowed'})
  }else{
    const user = await User.findOne({ email : req.user.email});
    user.borrowedBook.push(searchBook.title);
    searchBook.borrowUserId = req.user._id;
    searchBook.isBorrowed = true;
    searchBook.borrowedAt = Date.now();
    console.log(user);
    const borrowUser = await user.save();
    const borrowBook = await searchBook.save();
    res.json({ code: 200, message : 'borrow is success!!'})
  }
}))
// 특정 도서 조회
router.get('/:id', expressAsyncHandler(async (req, res, netx) => {
  const searchBook = await Book.findOne( { _id : req.params.id }).populate('borrowUserId');
  if(!searchBook){
    res.status(404).json({ code : 404, message : "Book is not found"});
  }else{
    res.json({ code : 200, searchBook});
  }
}))
// 특정 도서 정보 수정
router.put('/:id', isAuth, isAdmin, expressAsyncHandler(async (req, res, next) => {
  const searchBook = await Book.findOne({ _id : req.params.id });
  if(!searchBook){
    res.status(404).json({ code : 404, message : "Book is not found"});
  }else{
    console.log(req.body.isBorrowed);
    searchBook.title = req.body.title || searchBook.title;
    searchBook.release = req.body.release || searchBook.release;
    searchBook.author = req.body.author || searchBook.author;
    searchBook.category = req.body.category || searchBook.category;
    searchBook.isBorrowed = req.body.isBorrowed ? true : false;
    const updateBook = await searchBook.save();
    res.status(201).json({ code : 201, updateBook});
  }
}))
// 특정 도서 삭제
router.delete('/:id', isAuth, isAdmin, expressAsyncHandler(async (req, res, next) => {
  const searchBook = Book.findOne({ _id : req.params.id });
  if(!searchBook){
    res.status(404).json({ code : 404 , message : "Book is not found"});
  }else{
    await Book.deleteOne({ _id : req.params.id });
    res.sendStatus(204).json({ code : 204, message : "Book is deleted!"})
  }
}))
// 대출 도서 반납 api
router.post('/return/:id', isAuth, expressAsyncHandler(async (req, res, next) => {
  const searchBook = await Book.findOne({ _id : req.params.id });
  if(!searchBook && req.user.borrowedBook.includes(searchBook.title)){
    res.status(404).json({ code : 404, message : "Book is not found"});
  }else{
    const user = await User.findOne({ email : req.user.email })
    // await searchBook.updateOne(
    //   {$unset : { 'borrowUserId' : 1 }},
    //   { strict : false}
    // )
    console.log(user);
    const filterBook = req.user.borrowedBook.filter(book => book != searchBook.title);
    console.log(filterBook)
    user.borrowedBook = filterBook;
    searchBook.isBorrowed = false;
    searchBook.borrowUserId = ObjectId('');
    await user.save();
    await searchBook.save();
    res.json({ code : 200, message : "Book return Success!"})
  }
}))
// 대출 책 카테고리 별 조회
router.get('/group', isAuth, expressAsyncHandler(async (req, res, next) => {
  const docs = await Book.aggregate([
    {
      $match : { borrowUserId : new ObjectId(req.user._id)}
    },
    // {
    //   $group : { 
    //     _id : `$category`,
    //     count : { $sum : 1 },
    //   }
    // }
  ])
  console.log(docs.length);
  res.json({ code : 200, docs });
}))
module.exports = router;