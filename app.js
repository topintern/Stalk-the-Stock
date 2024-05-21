const express = require('express');
const app  = express();
require('dotenv').config();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const morgan = require('morgan');

const userRoutes = require('./routes/user');

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
  }).catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

  app.use(morgan('dev'));
  app.use(bodyparser.json());

  app.use("/api",userRoutes)

app.get('/',(req, res)=>{
    res.send('Hi ra pumka');
});

const port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
})