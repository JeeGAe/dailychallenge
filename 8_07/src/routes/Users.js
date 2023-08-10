const express = require('express');
const User = require('../models/User');
const expressAsyncHandler = require('express-async-handler');
const { generateToken, isAuth } = require('../../auth');

const router = express.Router();

router.post('/register', expressAsyncHandler(async (req, res, next) => {
  console.log(req.body);
  const user = new User({
    name : req.body.name,
    email : req.body.email,
    password : req.body.password,
    birth : new Date(req.body.birth),
  })

  const newUser = await user.save();

  if(!newUser){
    res.status(401).json({ code : 401, message : 'Invalid User Data!'})
  }else{
    const { name, email, birth, isAdmin, createdAt} = newUser;
    res.json({
      code : 200,
      //token : generateToken(newUser),
      name, email, birth, isAdmin, createdAt,
    })
  }
}))

router.post('/login', expressAsyncHandler(async (req, res, next) => {
  console.log(req.body);
  const loginUser = await User.findOne({
    email : req.body.email,
    password : req.body.password
  })

  if(!loginUser){
    res.status(401).json({ code : 401, message : "Invalid Email or password!"})
  }else{
    const { name, email, birth, borrowedBook, isAdmin, createdAt, lastModifiedAt } = loginUser;
    res.json({ 
      code : 200,
      token : generateToken(loginUser),
      name, email, birth, borrowedBook, isAdmin, createdAt, lastModifiedAt
    })
  }
}))

router.put('/:id', isAuth, expressAsyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if(!user){
    res.status(404).json({ code : 404, message : 'User not found'});
  }else{
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email; // 유니크 값인데 이미 있는 이메일 값으로 수정 하면 ??
    user.password = req.body.password || user.password;
    user.isAdmin = req.body.isAdmin || user.isAdmin;
    user.lastModifiedAt = Date.now();
    const updateUser = await user.save();
    const { name, email, birth, borrowedBook, isAdmin, createdAt, lastModifiedAt } = updateUser;
    res.json({
      code : 200,
      token : generateToken(updateUser),
      name, email, birth, borrowedBook, isAdmin, createdAt, lastModifiedAt,
    })
  }
}))

router.delete('/:id', isAuth, expressAsyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id)
  if(!user){
    res.status(404).json({ code : 404, message : 'User not found'});
  }else{
    res.status(204).json({ code : 204, message : 'User deleted Success'});
  }
}))

module.exports = router;