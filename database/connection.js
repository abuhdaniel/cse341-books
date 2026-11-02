import { MongoClient } from 'mongodb';

let client;
let database;

const connectToDatabase = async () => {
  const connectionString = process.env.MONGODB_URI;
  const databaseName = process.env.MONGODB_DB_NAME;

  if (!connectionString) {
    throw new Error('MONGODB_URI is missing from .env');
  }

  if (!databaseName) {
    throw new Error('MONGODB_DB_NAME is missing from .env');
  }

  client = new MongoClient(connectionString);

  await client.connect();

  database = client.db(databaseName);

  console.log('Connected to MongoDB Atlas');

  return database;
};

const getDatabase = () => {
  if (!database) {
    throw new Error('Database has not been connected.');
  }

  return database;
};

export { connectToDatabase, getDatabase };