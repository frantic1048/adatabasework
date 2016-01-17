import { Router } from 'express';

const manage = new Router();

manage.get('/', (req, res) => {
  res.render('manage', {activePage: 'manage'});
});

export default manage;
