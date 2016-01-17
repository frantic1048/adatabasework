import { Router } from 'express';

const activity = new Router();

activity.get(['/', '/index'], (req, res) => {
  res.render('activity/index', {activePage: 'activity', secondaryActivePage: 'index'});
});

activity.get('/notification', (req, res) => {
  res.render('activity/notification', {activePage: 'activity', secondaryActivePage: 'notification'});
});

activity.get('/academic', (req, res) => {
  res.render('activity/academic', {activePage: 'activity', secondaryActivePage: 'academic'});
});

export default activity;
