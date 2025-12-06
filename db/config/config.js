const path = require('path');
const fs = require('fs');

const configFile = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, 'config.json'), 'utf-8')
);

module.exports = configFile;