const express = require('express');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/error.controller');

const app = express();

app.use(express.json());

app.all('*', (req, res, next) => {
    return next(new AppError(`Can't find ${req.originalUrl} on this server`), 404);
  });
  
app.use(globalErrorHandler);

module.exports = app;