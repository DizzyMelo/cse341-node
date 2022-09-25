const express = require('express');
const app = express();
const mongodb = require('./db/connection');
const port = process.env.PORT || 3000;
const index = require('./routes/')
const contactRouter = require('./routes/contactsRoutes')

app.use('/', index);
app.use('/contacts', contactRouter);

mongodb.initDb((err, mongodb) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port, () => {
          console.log(`Connected to DB and listening on ${port}`);
      });
    }
  });