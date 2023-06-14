const http = require('http');
const router = require('./router/router');
const express = require('express');
const morgan = require("morgan");
const helmet = require("helmet");
const dbAPI = require("./controllers/controller");

const HOST = "127.0.0.1";
const PORT = 5500;
const app = express();

app.use(express.static('public'));
app.use("/v1", router);
app.use(morgan('tiny'));
app.use(helmet());
app.use("/db", dbAPI);


app.listen(PORT, HOST, () => {
	console.log(`Начало работы сервера http://${HOST}:${PORT}`);
  });

app.use(function(err, req, res, next) {
	if(err.statusCode)
	{
		res.status(err.statusCode).json(err.message);
	}else{
		res.status(400).json("400 Bad");
	}
}); 
  