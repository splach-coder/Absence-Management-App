const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();


// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the directory for EJS templates
app.set('views', path.join(__dirname, 'views'));

// Body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Mongoose database connection
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/omar_db', {
        useNewUrlParser: true
    })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Serving static files from the public folder
app.use(express.static('public'));
app.use(express.static('node_modules'));


// Define your routes here
app.use('/', require('./routes/index-routes'));
app.use('/users', require('./routes/index'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`);
});