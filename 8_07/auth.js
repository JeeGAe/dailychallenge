const config = require('./config');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign({
    _id : user._id,
    name: user.name,
    userId : user.userId,
    email : user.email,
    password : user.password,
    birth : user.birth,
    borrowedBook : user.borrowedBook,
    isAdmin : user.isAdmin,
    createdAt : user.createdAt,
    lastModifiedAt : user.lastModifiedAt,
  },
  config.JWT_SECRET,
  {
    expiresIn : '1h',  // 만료기한 한시간 되나?
    issuer : 'JeeGae'
  })
}

const isAuth = (req, res, next) => {
  const bearToken = req.headers.authorization;

  if(!bearToken){
    res.status(401).json({ code : 401, message : 'Token is not supplied'});
  }else{
    const token = bearToken.slice(7, bearToken.length);
    jwt.verify(token, config.JWT_SECRET, (err, userInfo) => {
      if(err && err.name === 'TokenExpiredError'){
        res.status(419).json({ code : 419, message : 'token expired!'});
      }else if(err){
        res.status(401).json({ code : 401, message : 'Invalid Token!!'});
      }
      req.user = userInfo;
      next();
    })
  }
}

const isAdmin = (req, res, next) => {
  if(req.user && req.user.isAdmin){
    next();
  }else{
    res.status(401).json({ code : 401, message : 'You are not Admin'});
  }
}

module.exports = {
  generateToken,
  isAuth,
  isAdmin,
}