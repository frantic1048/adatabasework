import { Router } from 'express';
import db         from '../db';

const about = new Router();

about.get(['/', '/index'], (req, res) => {
  res.render('about/index', {activePage: 'about', secondaryActivePage: 'index'});
});

about.get('/teacher', (req, res) => {
  db('select * from teacher;', (recordset) => {
    res.render('about/teacher', {activePage: 'about', secondaryActivePage: 'teacher', teachers: recordset});
  });
});

about.get('/student', (req, res) => {
  db('select * from student;', (recordset) => {
    res.render('about/student', {activePage: 'about', secondaryActivePage: 'student', students: recordset});
  });
});

about.get('/contact', (req, res) => {
  res.render('about/contact', {activePage: 'about', secondaryActivePage: 'contact'});
});

export default about;
