import { Router } from 'express';

const research = new Router();

research.get(['/', '/index'], (req, res) => {
  res.render('research/index', {activePage: 'research', secondaryActivePage: 'index'});
});

research.get('/science', (req, res) => {
  res.render('research/science', {activePage: 'research', secondaryActivePage: 'science'});
});

export default research;
