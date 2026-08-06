import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, "text");
  res.end("hello from server");
});

const port = 5000;

server.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`server running on port ${port}`);
});
