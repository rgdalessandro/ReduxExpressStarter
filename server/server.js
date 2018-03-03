'use strict';

const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;
const app = express();

const assetFolder = path.join(__dirname, '../client/build');

app.use(express.static(assetFolder));

app.get('/ping', (req, res) => {
  res.json('pong');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(assetFolder, 'index.html'));
});

app.listen(port);
console.log('Server started and listening on port', port);
