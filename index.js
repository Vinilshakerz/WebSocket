const http = require('http');
const url = require('url');
const server = new http.Server(function(req, res) {
console.log(req.method, req.url);
const urlParsed = url.parse(req.url, true);
console.log(urlParsed);
if (urlParsed.pathname == '/echo' && urlParsed.query.message) {
  res.end(urlParsed.query.message);
}
else {
  res.statuscode = "404";
  res.end("страница не найдена");
}
});
server.listen(4000, '127.0.0.1');

// let counter = 0;
// let emit = server.emit;
// server.emit = function(event) {
//   console.log(event);
//   emit.apply(server, arguments);
// };
// server.on('request', function(req, res) {
//   res.end("hello world!" + ++counter);
// });
