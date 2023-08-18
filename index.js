const config = require('./config');
const loaders = require('./loaders');
const express = require('express');

async function startServer() {
  const app = express();
  await loaders({ expressApp: app });

  app.listen(config.port, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Server is listening on port ${app.get('port')}...`)
  })
}
startServer();
