const express = require('express');

const usersRouter = express.Router();

usersRouter.get('/', (req, res, next) => {
  res.send('got to GET /users/');
});

usersRouter.post('/', (req, res, next) => {
  res.send('got to POST /users/');
});

usersRouter.get('/add', (req, res, next) => {
  res.send('got to GET /users/add');
});

module.exports = usersRouter