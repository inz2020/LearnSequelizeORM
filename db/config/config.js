const path = require('path');
const fs = require('fs');

// const configFile = JSON.parse(
//   fs.readFileSync(path.resolve(__dirname, 'config.json'), 'utf-8')
// );
 require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME_DEV,
    password: process.env.DB_PASSWORD_DEV,
    database: process.env.DB_NAME_DEV,
    host: process.env.DB_HOST_DEV,
    dialect: process.env.DB_DIALECT_DEV
  }
};
//module.exports = configFile;