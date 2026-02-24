const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1) Middlewares
app.use(morgan('dev'));

app.use(express.json());

app.use((req, res, next) => {
  console.log('Hellio form middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
})



// 2) Route Handlers




// Routes

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// Start the Server
module.exports = app;
