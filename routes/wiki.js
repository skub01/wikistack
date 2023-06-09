const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/users');


router.get('/', (req, res, next) => {
    res.send('got to GET /wiki/');
  });
  
  router.post('/', (req, res, next) => {
    res.send('got to POST /wiki/');
  });
  
  router.get('/add', (req, res, next) => {
    res.send('got to GET /wiki/add');
  });


app.use('/wiki', wikiRouter);

