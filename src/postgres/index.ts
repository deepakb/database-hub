import { Client } from 'pg';
import { ConnectionOptions } from './types';

export const postgres = async (options: ConnectionOptions) => {
  try {
    const client = new Client(options);
    await client.connect();
    return client;
  } catch (error) {
    throw error;
  }
};
