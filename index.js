// requiring node module
const express = require('express');
const path = require('path');

// importing routes 
const BLOG = require('./routes/blog');
const DASHBOARD = require('./routes/dashboard');
const THEME = require('./routes/theme');
const INDEX = require('./routes/index');

//creating express app
let app = express();

// defining port number
const PORT = process.env.PORT || 80;

// plublic directry setup
app.use(express.static(path.join(__dirname, 'public')));

// view directory setup
app.set('views', path.join(__dirname, 'views'));

// view engine setup
app.set('view engine', 'ejs');

// All the routing start from here 
app.use('/blog', BLOG);
app.use('/dashboard', DASHBOARD);
app.use('/theme', THEME);
app.use('/', INDEX);

// assgining port number
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));