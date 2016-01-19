import { Router } from 'express';
import db         from '../db';

const research = new Router();

research.get(['/', '/index'], (req, res) => {
  res.render('research/index', {activePage: 'research', secondaryActivePage: 'index'});
});

research.get('/science', (req, res) => {
  const records = {};
  // TODO: should parallelly query these ~(>_<~)
  db('select * from research_book', (bookRecordset) => {
    records.books = bookRecordset;
    db('select * from research_patent', (patentRecordset) => {
      records.patents = patentRecordset;
      db('select * from research_paper ', (paperRecordset) => {
        records.papers = paperRecordset;
        db('select * from research_achievement', (achievementRecordset) => {
          records.achievements = achievementRecordset;
          res.render('research/science', {activePage: 'research', secondaryActivePage: 'science', records});
        });
      });
    });
  });
});

export default research;
