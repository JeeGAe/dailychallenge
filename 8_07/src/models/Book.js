const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types : { ObjectId }} = Schema;

const bookShema = new Schema({
  title : {
    type : String,
    required : true,
    trim : true,
  },
  release : {
    type : Date,
    required : true,
  },
  author : {
    type : String,
    required : true,
    trrm: true
  },
  category : {
    type : String,
    required : true,
  },
  isBorrowed : {
    type : Boolean,
    default : false,
  },
  borrowUserId : {
    type : ObjectId,
    ref : 'User',
  },
  borrowedAt : {
    type : Date,
    default : Date.now
  },
  returnAt : {
    type : Date,
    default : Date.now,
  }

})

const Book = mongoose.model('book', bookShema);
module.exports = Book;

// Book 데이터 생성 테스트
// const book1 = new Book({
//   title : '해리포터',
//   release : new Date(1997-6-26),
//   author : 'j.k. 롤링',
//   category : 'novel',
//   borrowUserId : '111111111111111111111111', 
// })

// book1.save()
// .then(() => console.log('book data created !!'))
// .catch(e => console.log(`Failed to create book data : ${e}`));