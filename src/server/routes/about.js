import { Router } from 'express';

const about = new Router();

about.get(['/', '/index'], (req, res) => {
  res.render('about/index', {activePage: 'about', secondaryActivePage: 'index'});
});

about.get('/teacher', (req, res) => {
  res.render('about/teacher', {activePage: 'about', secondaryActivePage: 'teacher'});
});

about.get('/student', (req, res) => {
  res.render('about/student', {activePage: 'about', secondaryActivePage: 'student'});
});

about.get('/contact', (req, res) => {
  res.render('about/contact', {activePage: 'about', secondaryActivePage: 'contact'});
});

export default about;
