import { CosmosClient } from '@azure/cosmos';
import { ConnectionOptions } from './types';

export const cosmos = (options: ConnectionOptions) => {
  return new Promise((resolve, reject) => {
    const client = new CosmosClient(options);
    client.databases.createIfNotExists({ id: options.databaseId }).then(() => {
      resolve(client);
    }).catch((error) => {
      reject(error);
    });
  });
};
