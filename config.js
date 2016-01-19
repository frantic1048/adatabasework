/* eslint-env node */
/* eslint-disable no-var, prefer-const, func-names */
/* eslint-disable ecmaFeatures */

var config = {
  serverPort: 3999, // 服务器端口号
  databaseURI: 'mssql://newbies:newbies@10.50.141.9/CNSRDB', // SQL Server 的地址 mssql://username:password@localhost/database
  logLevel: 'silly', // 日志等级: silly, info, warn, error, Infinity(no log)
};

module.exports = config;
