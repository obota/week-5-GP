require('dotenv').config();

const mongoose = require('mongoose');

const databaseConnectionString = process.env.MONGO_CONNECTION_STRING

mongoose.connect(databaseConnectionString);
const DB = mongoose.connection;

DB.once('connected', () => {
    console.log('Database connected successfully');
});

DB.on('error', (error) => {
    console.log(error);
});
