const http = require("http");
const { listeners } = require("process");

http.createServer(function (req, res) {
  res.writeHead(200, { Contact: "text/html" });
  res.end("Hello World");
}),
  listen(8080);
