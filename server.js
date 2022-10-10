const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mongodb = require('./db/connection');
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());
app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port, () => {
          console.log(`Connected to DB and listening on ${port}`);
      });
    }
  });