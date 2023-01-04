import { Cluster } from 'couchbase';
import { ConnectionOptions } from './types';

export const couchbase = async (options: ConnectionOptions) => {
  try {
    const cluster = await Cluster.connect(options.url, {
      username: options.username,
      password: options.password,
    });
    return cluster;
  } catch (error) {
    throw error;
  }
};
