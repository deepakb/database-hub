import { CosmosClient } from '@azure/cosmos';
import { ConnectionOptions } from './types';

export const cosmos = async (options: ConnectionOptions) => {
  try {
    const client = new CosmosClient(options);
    await client.databases.createIfNotExists({ id: options.databaseId });
    return client;
  } catch (error) {
    throw error;
  }
};
