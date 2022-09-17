const express = require('express');
const app = express();

const routes = require('./routes');

app.use(routes(express.Router()));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});