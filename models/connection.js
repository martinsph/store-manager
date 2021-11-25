const { MongoClient } = require('mongodb');
require('dotenv').config();

const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/StoreManager`;
const DB_NAME = 'StoreManager';

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = async () => {
  try {
    return await MongoClient.connect(MONGO_DB_URL, OPTIONS).db(DB_NAME);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
