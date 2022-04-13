const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const dataBase = require('./dbServer');
dataBase();
const session = require('express-session');
const MongoDBSession = require('connect-mongodb-session')(session);
const app = express();
const bodyParser = require('body-parser');
const pageRoute = require('./routes/pageRoute');
const apiRoute = require('./routes/apiRoute');

const store = new MongoDBSession({
  uri: 'mongodb://localhost:27017/main-project',
  collection: 'mysessions',
});

// view engine

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//session middleware
app.use(
  session({
    secret: 'this is my session',
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
  })
);

//to use static file(css,js,img..)

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//auth route
app.use('/api/v1/auth', apiRoute);

// page routes
app.use('/', pageRoute);

//server listening
app.listen(process.env.PORT, () => {
  console.log(`server listening at ${process.env.PORT}`);
});
