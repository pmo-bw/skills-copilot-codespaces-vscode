// Create web server and use port
const server = http.createServer((req, res) => {
  res.end('Hello from Node.js!');
});

server.listen(3000);

