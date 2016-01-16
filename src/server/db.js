import sql    from 'mssql';
import config from '../../config';

function db(action) {
  sql.connect(config.databaseURI).then(action);
}

export default db;
