const express = require('express');
const bodyParser = require('body-parser');
// const http = require('http');
// const logger = require('morgan');
const path = require('path');

const port = process.env.PORT || 3000;

const app = express();

const _build = path.join(__dirname, '/build');

app.use(express.static(_build));

// app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/*', (req, res) => {
  res.sendFile(`${_build}/index.html`);
});

app.listen(port, () => {
  console.log(`Application is now listening on port ${port}`);
});
