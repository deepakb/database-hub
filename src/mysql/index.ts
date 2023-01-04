import * as ms from 'mysql2';
import { ConnectionOptions } from './types';

export const mysql = (options: ConnectionOptions) => {
  return new Promise((resolve, reject) => {
    const client = ms.createConnection(options);
    client.connect((error) => {
      if (error) {
        reject(error);
      } else {
        resolve(client);
      }
    });
  });
};
