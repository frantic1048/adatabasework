import { Router } from 'express';
import logger     from '../logger';

const root = new Router();

root.get('/', (req, res) => {
  logger.silly('yoo index');
  res.render('index');
});

export default root;
