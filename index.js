// require('dotenv').config();

// const mongoose = require('mongoose');

// const databaseConnectionString = process.env.MONGO_CONNECTION_STRING

// mongoose.connect(databaseConnectionString);
// const DB = mongoose.connection;

// DB.once('connected', () => {
//     console.log('Database connected successfully');
// });

// DB.on('error', (error) => {
//     console.log(error);
// });

// mongodb+srv://obota:BNXxQWmLkxu4RLh4@moringacluster.bulbv0v.mongodb.net/test

//connect mongo db
var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb+srv://obota:BNXxQWmLkxu4RLh4@moringacluster.bulbv0v.mongodb.net/test";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});