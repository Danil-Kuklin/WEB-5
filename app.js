const http = require('http');
const router = require('./router/router');
const express = require('express');

const HOST = "127.0.0.1";
const PORT = 5500;
const app = express();

app.use(express.static('public'));
app.use("/v1", router);

app.listen(PORT, HOST, () => {
  console.log(`Начало работы сервера http://${HOST}:${PORT}`);
});


app.use(function(err, req, res, next) {
	if(err.statusCode)
	{
		res.status(err.statusCode).json(err.message);
	}else{
		res.status(400).json("400 Bad request");
	}
});