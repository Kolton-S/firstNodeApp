const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;
const user = process.env.USER;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type' : 'text/html'});

  var file = fs.createReadStream('index.html');
  file.pipe(res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/Logged in as ${user}`);
});
