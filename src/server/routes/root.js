import { Router } from 'express';
import logger     from '../logger';

import about         from './about';
import activity      from './activity';
import admission     from './admission';
import education     from './education';
import international from './international';
import research      from './research';

import manage   from './manage';
import download from './download';
import help     from './help';

const root = new Router();

root.get(['/', '/index'], (req, res) => {
  logger.silly('yoo index');
  res.render('index', {activePage: 'index'});
});

root.use('/about', about);
root.use('/activity', activity);
root.use('/admission', admission);
root.use('/education', education);
root.use('/international', international);
root.use('/research', research);

root.use('/manage', manage);
root.use('/download', download);
root.use('/help', help);

export default root;
