const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  name : {
    type : String,
    required : true,
    trim : true,
  },
  userId : {
    type : String,
    required : true,
  },
  email : {
    type : String,
    required : true,
    trim : true,
  },
  password : {
    type : String,
    required : true,
    trim : true,
  },
  birth : {
    type : Date,
  },
  borrowedBook : {
    type : Array,
  },
  isAdmin : {
    type : Boolean,
    default : false,
  },
  createdAt : {
    type : Date,
    default : Date.now
  },
  lastModifiedAt : {
    type : Date,
    default : Date.now
  }
})

const User = mongoose.model('User', userSchema);
module.exports.User = User;

// User 데이터 생성 테스트
// const user1 = new User({
//   name : '김철수',
//   userId : 'kcs1234',
//   email : 'kcsemail@google.com',
//   password : 'afio324234uhuhu',
//   birth : new Date('2001-08-08'),
//   borrowedBook : ['해리포터', '삼국지']
// })

// user1.save()
// .then((() => {console.log('user data created!!')}))
// .catch(e => console.log(`Failed to create user date : ${e}`));