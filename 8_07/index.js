const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;
const config = require('./config');
const usersRouter = require('./src/routes/Users');
const booksRouter = require('./src/routes/Books')

const corsOptions = {
  origin : 'http://127.0.0.1:5500',
  credentials : true
}

mongoose.connect(config.MONGODB_URL)
.then(() => console.log('mongoDB is connected ...'))
.catch(e => console.log(`Failed to connect mongodb : ${e}`));

const logger = function (req, res, next){
  console.log(Date.now());
  next();
}


app.use(cors(corsOptions));
app.use(express.json());
app.use(logger);
// 라우트 실행
app.use('/api/users', usersRouter);
app.use('/api/books', booksRouter);


app.listen(port, () => {
  console.log('listen...');
})