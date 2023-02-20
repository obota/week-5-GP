require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const studentsRoute = require('./routes/students');

const PORT = process.env.PORT
const databaseConnectionString = process.env.MONGO_CONNECTION_STRING

mongoose.connect(databaseConnectionString);
const DB = mongoose.connection;

DB.once('connected', () => {
    console.log('Database connected successfully');
});

DB.on('error', (error) => {
    console.log(error);
});

app.use(express.json());
  
app.use('/students', studentsRoute);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

  