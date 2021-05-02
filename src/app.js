var express = require('express');
var path = require('path');
require('dotenv').config();
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('../core/dbConnect');

var indexRouter = require('./routes/index');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


module.exports = app;
