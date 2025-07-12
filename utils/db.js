import mongoose from 'mongoose';

let connection = null;

export async function getConnection() {
  if (!connection) {
    connection = await mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000');
    console.log('connected to db successfuly')
  }
  return connection;
}
