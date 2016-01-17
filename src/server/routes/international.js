import { Router } from 'express';

const international = new Router();

international.get('/', (req, res) => {
  res.render('international', {activePage: 'international'});
});

export default international;
