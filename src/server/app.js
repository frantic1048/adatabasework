import express from 'express';
import logger  from './logger';
import config  from '../../config';
import root    from './routes/root';

const app = express();

app.set('view engine', 'jade');

app.use('/static', express.static(__dirname + '/../../static'));
app.use('/', root);

const server = app.listen(config.serverPort, () => {
  logger.silly(`adw ponpon on http://localhost:${server.address().port}`);
});

export default server;
