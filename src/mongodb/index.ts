import { MongoClient } from 'mongodb';
import { ConnectionOptions } from './types';

export const mongodb = async (options: ConnectionOptions) => {
  try {
    const client = await MongoClient.connect(options.url);
    return client;
  } catch (error) {
    throw error;
  }
};
