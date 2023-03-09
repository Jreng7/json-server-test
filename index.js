const express = require('express');

const server = express();

server.get('/', () => {
  console.log('Servidor online! =)')
})

server.listen(3550);