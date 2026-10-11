const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "content-type": "text/plain" });
    return res.end("ok");
  }
  if (req.method === "POST" && req.url === "/v1/charges") {
    res.writeHead(201, { "content-type": "application/json" });
    return res.end(JSON.stringify({ status: "captured" }));
  }
  res.writeHead(404);
  res.end();
});

if (require.main === module) server.listen(8080);
module.exports = server;
