const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();



const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = ATLAS_URI
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true }
);

const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("MongoDB database connection established successfully");
})

const projects = require('./routes/projects');


app.use('/api/projects', projects);

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static('front-end/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname + '/front-end/build/index.html'));
    });
  }


app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})