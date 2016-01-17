import { Router } from 'express';

const download = new Router();

download.get('/', (req, res) => {
  res.render('download', {activePage: 'download'});
});

export default download;
