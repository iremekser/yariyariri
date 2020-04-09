const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());
const postsRoue = require('./routes/posts');
app.use('/posts', postsRoue);

app.get('/', (req, res) => {
    res.send('yariyariri');
})

mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Connect to DB");
    });

app.listen(2000);



