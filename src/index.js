const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/health') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('OK');
        return;
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello DevSecOps');
});

server.listen(3000, () => {
    console.log('Servidor iniciado en puerto 3000');
});