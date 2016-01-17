import { Router } from 'express';

const about = new Router();

about.get('/', (req, res) => {
  res.render('about', {activePage: 'about'});
});

export default about;
