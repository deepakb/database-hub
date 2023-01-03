# database-hub

Connect to multiple types of databases including MySQL, PostgreSQL, MongoDB, CosmosDB, and Couchbase with a single, easy-to-use interface.

## Installation

To install `database-hub`, run the following command:

![image](https://user-images.githubusercontent.com/1321311/210366631-7f9f2bff-b345-4365-80ac-9095db744f74.png)

## Usage

To use `database-hub`, import the desired database functions and pass the necessary options.

![image](https://user-images.githubusercontent.com/1321311/210366782-211f3855-beea-44d9-bbdc-933b7012fd31.png)

## Options

### MySQL

- `host`: The hostname of the MySQL server. (required)
- `user`: The username to connect to the MySQL server. (required)
- `password`: The password for the user. (required)
- `database`: The database to connect to. (required)

### PostgreSQL

- `host`: The hostname of the PostgreSQL server. (required)
- `user`: The username to connect to the PostgreSQL server. (required)
- `password`: The password for the user. (required)
- `database`: The database to connect to. (required)

### MongoDB

- `url`: The URL of the MongoDB server. (required)

### CosmosDB

- `endpoint`: The endpoint URL of the CosmosDB account. (required)
- `auth`: An object containing the authentication options. (required)
  - `masterKey`: The master key for the CosmosDB account. (required)

### Couchbase

- `url`: The URL of the Couchbase cluster. (required)

## License

`database-hub` is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
