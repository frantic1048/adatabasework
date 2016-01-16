import express from 'express';
import morgan  from 'morgan';
import logger  from './logger';
import config  from '../../config';
import root    from './routes/root';

const app = express();

app.set('view engine', 'jade');

app.use(morgan('dev'));

app.use('/', root);

const server = app.listen(config.serverPort, () => {
  logger.silly(`adw ponpon on http://localhost:${server.address().port}`);
});

export default server;
