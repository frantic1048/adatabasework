import sql    from 'mssql';
import config from '../../config';

function db(query, action) {
  sql.connect(config.databaseURI).then(() => {
    new sql.Request().query(query).then(action);
  });
}

export default db;
