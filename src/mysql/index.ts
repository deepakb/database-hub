import * as ms from 'mysql2';
import { ConnectionOptions } from './types';

export const mysql = async (options: ConnectionOptions) => {
  try {
    const client = ms.createConnection(options);
    await client.connect();
    return client;
  } catch (error) {
    throw error;
  }
};
