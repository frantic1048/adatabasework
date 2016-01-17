import { Router } from 'express';

const activity = new Router();

activity.get('/', (req, res) => {
  res.render('activity', {activePage: 'activity'});
});

export default activity;
