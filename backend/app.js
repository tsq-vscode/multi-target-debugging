const http = require('http');

const server = http.createServer((req, res) => {
    res.end("pong");
});

server.listen(4000, () => {
    console.log("Server is listening on 4000");
}); 