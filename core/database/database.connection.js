import mongoose from 'mongoose';

const {
  MONGO_INITDB_USERNAME,
  MONGO_INITDB_PASSWORD,
  MONGO_INITDB_DATABASE,
  DB_PORT,
} = process.env;

export const databaseStartConnect = async () => {
  console.log('database start');
  try {
    await mongoose.connect(`mongodb://${MONGO_INITDB_USERNAME}:${MONGO_INITDB_PASSWORD}@localhost:${DB_PORT}/${MONGO_INITDB_DATABASE}`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
