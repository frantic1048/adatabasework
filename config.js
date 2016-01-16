/* eslint-env node */
/* eslint-disable no-var, prefer-const, func-names */
/* eslint-disable ecmaFeatures */

var config = {
  serverPort: 3999,
  databaseURI: 'mssql://username:password@localhost/database',
  logLevel: 'silly', // log levels: silly, info, warn, error, Infinity(no log)
};

module.exports = config;
