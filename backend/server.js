const http = require('http');
const exrpess = require('./rest');

const server = http.createServer(exrpess);

server.listen(3000);