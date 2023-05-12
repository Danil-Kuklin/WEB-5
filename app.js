const http = require('http');

const HOST = 'localhost';
const PORT = 5500;
let count = {user_agent: 0};
let comments = '';


const server = http.createServer((req, res) => {
    if(req.method === 'GET'){
        if(req.url === '/'){
            console.log(`Получен ${req.method} запрос на корневой путь`)
            res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end('Hello');

        }
        else if(req.url === "/stats"){
			console.log(`Получен ${req.method} запрос на /stats`);
			res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
			count.user_agent++;
			res.end(`<table border= "1">
			<tr><td>user-agent:</td>
			<td>request:</td></tr>
			<tr><td>${req.headers['user-agent']}</td><td>${count.user_agent}</td></tr>
			</table>`);	
		}
        else if(req.url === "/comments"){
            console.log(`Получен ${req.method}-запрос на /comments`);
			res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
			res.end(`${com}`);
        }
        else{
            res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
            res.end("400 Bad Request!");
        }
    }

    if(req.method == "POST"){
		if(req.url === "/comments"){
			console.log(`Получен запрос на /comments`);
            
		}
	}
})



server.listen(PORT, HOST, () => {
    console.log(`Начало работы сервера http://${HOST}:${PORT}`)
})
