import { MongoClient } from 'mongodb';
import { ConnectionOptions } from './types';

export const mongodb = (options: ConnectionOptions) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(options.url, (error, client) => {
      if (error) {
        reject(error);
      } else {
        resolve(client);
      }
    });
  });
};
