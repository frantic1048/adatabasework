import { Router } from 'express';

const help = new Router();

help.get('/', (req, res) => {
  res.render('help', {activePage: 'help'});
});

export default help;
