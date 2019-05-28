//module
const http = require("http");
const fs = require("fs");
const os = require("os");
// const { displayDateTime } = require('./shared/display-day-time.js');
// const { isEmpty } = require('./shared/is-empty.js');
// console.log(displayDateTime());
// console.log(isEmpty('exmaple@example.com'));
const { displayDateTime, isEmpty, solveQuadratic } = require("./shared/utils");
console.log(displayDateTime());
console.log(isEmpty("Asab"));
console.log(solveQuadratic(1, -1, -2));
const PORT = 5000;

const students = [
  {
    id: 1,
    name: "Xurxe",
    country: "Galicia",
    age: 25
  },
  {
    id: 2,
    name: "Masood",
    country: "Afghan",
    age: 25
  },
  {
    id: 3,
    name: "Garland",
    country: "Indian",
    age: 21
  },
  {
    id: 4,
    name: "Kunjan",
    country: "Nepal",
    age: 21
  }
];

http
  .createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    // fs.readFile('views/index.html', function(err, data) {
    //   if (err) {
    //     res.statusCode = 404;
    //     console.log('error message', err.message);
    //   }

    //   res.writeHead(200, { 'Content-Type': 'text/html' });
    //   res.write(data);
    //  res.end();
    // });
    const hostname = os.hostname();
    const platform = os.platform();
    const content = hostname + " at " + displayDateTime() + " from " + platform+"\n";

    fs.appendFile("log.txt", content, () => {
      res.end();
    });

    // if (method === 'GET' && url === '/') {
    //   res.write('Home');
    // } else if (method === 'GET' && url === '/info') {
    //   res.writeHead(200, { 'Content-Type': 'text/plain' });

    //   res.write(
    //     'We are just starting Node.js. I hope everybody is enjoying it.'
    //   );
    // } else if (method === 'GET' && url === '/students') {
    //   res.writeHead(200, { 'Content-Type': 'application/json' });
    //   res.write(JSON.stringify(students));
    // }
  })
  .listen(PORT);
