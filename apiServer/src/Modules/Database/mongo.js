import { MongoClient } from 'mongodb';

const uri = 'mongodb://simpleorder-mongodb:27017'
const connectDB = async () => {
  try {
    const db = await MongoClient.connect(uri, { useNewUrlParser: true });
    return db;
  } catch (error) {
    return console.log(error);
  }
};


module.exports = { connectDB };
