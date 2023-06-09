const express = require('express');
const app = express();
const morgan = require('morgan');
const { db, Page, User } = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/users');

app.use('routes/wiki', wikiRouter);
app.use('routes/users', userRouter);
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/stylesheets'));

db.authenticate() 
  .then(() => { 
    console.log('connected to the database'); 
})


app.get('/', async (req, res) => {
   try {
    res.send(
      `<html>
      <head> <link rel='stylesheet' href='/style.css'/> </head>
        <body>
          Hellooooo
        </body>
      </html>`

    );
   } 
   catch(e) {
    next(e)
  }  
})

const init = async () => {
  await db.sync({force: true});
const PORT = 1337;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
}

init();