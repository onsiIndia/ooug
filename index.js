// requiring node module
let express = require('express');
let path = require('path');

//creating express app
let app = express();

// defining port number
const PORT = process.env.PORT || 80;

// requiring routing
let indexRouter = require('./routes');
let dashboardRouter = require('./routes/dashboard');

// plublic directry setup
app.use(express.static(path.join(__dirname, 'public')));

// view directory setup
app.set('views', path.join(__dirname, 'views'));

// view engine setup
app.set('view engine', 'ejs');

// main routing
app.use('/', indexRouter);
//app.use('/dashboard', dashboardRouter);

// assgining port number
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
