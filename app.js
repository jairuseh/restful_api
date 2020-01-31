const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const app = express();

app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);


//Routes home
app.get('/', (req, res) => {
    res.send('Home');
});

//DB connection
mongoose.connect(process.env.db, 
    { useNewUrlParser: true }, 
    () => console.log('connected to db...')
);

app.listen(3000, () => console.log("Listening to port 3000..."));