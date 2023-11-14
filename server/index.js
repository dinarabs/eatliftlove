'use strict';

const express = require('express');
const app = express();
const router = require('./router');
var cors = require('cors');


const PORT = 3000;
const HOST = 'localhost';

// enable cors
app.use(cors());

// Serve images from a directory
app.use('/images', express.static('./images'));

// handle incoming JSON data in the request body
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`🤖 Server running @ http://${HOST}:${PORT}`);
});
