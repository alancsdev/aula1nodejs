const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
//NOME DO FOLDER DAS VIEWS
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  next();
});

app.use((req, res, next) => {
  const userName = req.body.username || 'Unknown user';

  res.render('index', { user: userName });
});

app.listen(3000);
