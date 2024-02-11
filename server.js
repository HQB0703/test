const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

//Khai bao Router
const authorRoutes = require('./routes/author');
const bookRoutes = require('./routes/book');
const userRoutes = require('./routes/User');
// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb'}));
app.use(morgan("common"));

// Routes
app.use('/author', authorRoutes);
app.use('/book', bookRoutes);
app.use('/user', userRoutes);

//Connect to Database
mongoose.connect(process.env.MONGODB_URI,)
    .then(() => {
        console.log('Connected to Database');
    })
    .catch(err => console.log(err));

app.listen(8000, () => {
    console.log('Server is running on http://localhost:8000/');
});
