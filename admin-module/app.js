const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const dataBase = require('./dbServer');
dataBase();
const app = express();
const bodyParser = require('body-parser');
const page = require('./routes/pageRoute');
const apiRoute = require('./routes/apiRoutes');
// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//to use static file(css,js,img..)

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
//page routes
app.use('/', page);

//API Routes
app.use('/api/v1', apiRoute);

//server listening
app.listen(process.env.PORT, () => {
  console.log(`server listening at ${process.env.PORT}`);
});
