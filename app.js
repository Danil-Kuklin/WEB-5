const http = require('http');

const HOST = 'localhost';
const PORT = 5500;

const server = http.createServer((req, res) => {
    if(req.method == 'GET'){
        console.log('Получен GET запрос')
        if(req.url == '/'){
            console.log('Получен запрос на корневой путь')
            res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end('Hello');

        }
    }
})

server.listen(PORT, HOST, () => {
    console.log(`Начало работы сервера http://${HOST}:${PORT}`)
})
