import { Router } from 'express';

const research = new Router();

research.get('/', (req, res) => {
  res.render('research', {activePage: 'research'});
});

export default research;
