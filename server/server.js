const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
var app = express();
var port = 3000;

var passport = require('passport');
var flash = require('connect-flash');

require('./config/passport')(passport);

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/script'));
app.use(express.static(__dirname + '/widgets'));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
 extended: true
}));

app.set('view engine', 'ejs');

app.use(session({
 secret: 'justasecret',
 resave:true,
 saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./app/routes.js')(app, passport);

app.listen(port);
console.log("Port: " + port);