import mongoose from 'mongoose';
import { config } from 'dotenv';
config();
import connect from './connection';

export const dropCollection = name => {
  const { MONGODB_URI } = process.env;
  connect(MONGODB_URI);
  return mongoose.connection.dropCollection(name)
    .catch(err => {
      if (err.codeName !== 'NamespaceNotFound') throw err;
    });
};
