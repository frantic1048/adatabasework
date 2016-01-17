/* eslint-env node */
/* eslint-disable no-var, prefer-const, func-names */
/* eslint-disable ecmaFeatures */

var config = {
  serverPort: 3999, // 服务器端口号
  databaseURI: 'mssql://username:password@localhost/database', // SQL Server 的地址
  logLevel: 'silly', // 日志等级: silly, info, warn, error, Infinity(no log)
};

module.exports = config;
