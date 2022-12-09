//importing our packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;


// Mongoose connection

mongoose.set('strictQuery', false);

mongoose.connect(MONGODB_URI || 'mongodb://localhost/stateful_count', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log("Mongoose is connected");
})


// HTTP request logger
app.use(morgan('tiny'));

app.get('', (req, res) => {
    const data = {
        state: 0
    };
    res.json(data);
})

app.listen(PORT, console.log(`Server is starting at ${PORT}`))