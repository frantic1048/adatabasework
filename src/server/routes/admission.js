import { Router } from 'express';

const admission = new Router();

admission.get('/', (req, res) => {
  res.render('admission', {activePage: 'admission'});
});

export default admission;
