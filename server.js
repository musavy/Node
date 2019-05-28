//module
const http = require('http');
const PORT = 5000;

const students = [
  {
    name: 'Xurxe',
    country: 'Galicia',
    age: 25
  },
  {
    name: 'Masood',
    country: 'Afghan',
    age: 25
  },
  {
    name: 'Garland',
    country: 'Indian',
    age: 21
  },
  {
    name: 'Kunjan',
    country: 'Nepal',
    age: 21
  }
];

http
  .createServer(function (req, res) {
    const url = req.url;
    const method = req.method;
    if (method === 'GET' && url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<h1>Welcome Home<h1>');
    } else if (method === 'GET' && url === '/info') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write(
        'We are just starting Node.js. I hope everybody is enjoying it.'
      );
    } else if (method === 'GET' && url === '/students') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify(students));
    }
    res.end();
  })
  .listen(PORT);
