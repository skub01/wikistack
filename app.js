const express = require('express');
const app = express();
const morgan = require('morgan');


app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/stylesheets'));

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

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
