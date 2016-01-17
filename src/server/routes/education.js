import { Router } from 'express';

const education = new Router();

education.get('/', (req, res) => {
  res.render('education', {activePage: 'education'});
});

export default education;
