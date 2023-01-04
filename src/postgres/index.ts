import { Client } from 'pg';
import { ConnectionOptions } from './types';

export const postgres = (options: ConnectionOptions) => {
  return new Promise((resolve, reject) => {
    const client = new Client(options);
    client.connect((error) => {
      if (error) {
        reject(error);
      } else {
        resolve(client);
      }
    });
  });
};
