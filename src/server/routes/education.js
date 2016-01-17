import { Router } from 'express';

const education = new Router();

education.get(['/', '/index'], (req, res) => {
  res.render('education/index', {activePage: 'education', secondaryActivePage: 'index'});
});

education.get('/work', (req, res) => {
  res.render('education/work', {activePage: 'education', secondaryActivePage: 'work'});
});

export default education;
