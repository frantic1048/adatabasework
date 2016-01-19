import { Router } from 'express';
import sql        from 'mssql';
import db         from '../db';

const about = new Router();

about.get(['/', '/index'], (req, res) => {
  res.render('about/index', {activePage: 'about', secondaryActivePage: 'index'});
});

about.get('/teacher', (req, res) => {
  console.log('/teacher');
  db(() => {
    new sql.Request().query('select * from teacher')
    .then((recordset) => {
      console.log(recordset);
      res.render('about/teacher', {activePage: 'about', secondaryActivePage: 'teacher'});
    });
  });
});

about.get('/student', (req, res) => {
  res.render('about/student', {activePage: 'about', secondaryActivePage: 'student'});
});

about.get('/contact', (req, res) => {
  res.render('about/contact', {activePage: 'about', secondaryActivePage: 'contact'});
});

export default about;
