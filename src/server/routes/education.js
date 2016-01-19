import { Router } from 'express';

const education = new Router();

const baseTemplateParam = {
  activePage: 'education',
};

education.get(['/', '/index'], (req, res) => {
  res.render('education/index', {...baseTemplateParam, secondaryActivePage: 'index'});
});

education.get('/education/:education_id', (req, res) => {
  const templateParam = {...baseTemplateParam, secondaryActivePage: 'index'};
  const educationId = req.params.education_id;
  // TODO: query educationId from SQL Server and write back
  res.render('education/index_article', templateParam);
});

education.get('/work', (req, res) => {
  res.render('education/work', {...baseTemplateParam, secondaryActivePage: 'work'});
});

education.get('/work/work_id', (req, res) => {
  const templateParam = {...baseTemplateParam, secondaryActivePage: 'work'};
  const workId = req.params.work_id;
  // TODO: query data from SQL Server and write back
  res.render('education/work_article', templateParam);
});

export default education;
