import { Router } from 'express';
import db         from '../db';

const international = new Router();

international.get('/', (req, res) => {
  db('select * from international_collaboration', (recordset) => {
    res.render('international', {activePage: 'international', collaborations: recordset});
  });
});

export default international;
