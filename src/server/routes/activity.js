import { Router } from 'express';

const activity = new Router();

const baseTemplateParam = {
  activePage: 'activity',
};

activity.get(['/', '/index', '/news'], (req, res) => {
  res.render('activity/index', {...baseTemplateParam, secondaryActivePage: 'index'});
});

activity.get('/news/:news_id', (req, res) => {
  const templateParam = {...baseTemplateParam, secondaryActivePage: 'index'};
  const newsId = req.params.news_id;
  // TODO: query newsId from SQL Server and write into template
  res.render('activity/index_article', templateParam);
});

activity.get('/notification', (req, res) => {
  res.render('activity/notification', {...baseTemplateParam, secondaryActivePage: 'notification'});
});

activity.get('/notification/:notification_id', (req, res) => {
  const templateParam = {...baseTemplateParam, secondaryActivePage: 'notification'};
  const notificationId = req.params.notification_id;
  // TODO: query notificationId from SQL Server and write into template
  res.render('activity/notification_article', templateParam);
});

activity.get('/academic', (req, res) => {
  res.render('activity/academic', {...baseTemplateParam, secondaryActivePage: 'academic'});
});

activity.get('/academic/:academic_id', (req, res) => {
  const templateParam = {...baseTemplateParam, secondaryActivePage: 'academic'};
  const academicId = req.params.academic_id;
  // TODO: query academicId from SQL Server and write into template
  res.render('activity/academic_article', templateParam);
});

export default activity;
