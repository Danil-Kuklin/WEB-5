const http = require('http');

const HOST = 'localhost';
const PORT = 5500;
let count = {user_agent: 0};

const server = http.createServer((req, res) => {
    if(req.method == 'GET'){
        console.log('Получен GET запрос')
        if(req.url == '/'){
            console.log('Получен запрос на корневой путь')
            res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end('Hello');

        }
        if(req.url === "/stats"){
			console.log(`Получен запрос на /stats`);
			res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
			count.user_agent++;
			res.end(`<table>
			<tr><td>user-agent:</td>
			<td>request:</td></tr>
			<tr><td>${req.headers['user-agent']}</td><td>${count.user_agent}</td></tr>
			</table>`);	
		}
    }

})

server.listen(PORT, HOST, () => {
    console.log(`Начало работы сервера http://${HOST}:${PORT}`)
})