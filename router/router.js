const express = require("express");
const jsonParser = express.json();
const router = express.Router();

let count = {user_agent: 0};
let com = '';

function validation(req, res, next){
	if(JSON.stringify(req.body) == '{}'){
		next(error);
	}else next();
}

function checkAuthorization(req, res, next){
	const key = req.query.key;
	if (key !== '123'){
		next(err);
	}
	else next();
}

router.get("/", (req, res) => {
    res.send("Hello");
});
  
router.post('/login', jsonParser, validation, checkAuthorization, (req, res) => {
    res.send('successfully');
});
  
router.get("/stats", (req, res) => {
      count.user_agent++;
        res.send(`<table border= "1">
        <tr><td>user-agent:</td>
        <td>request:</td></tr>
        <tr><td>${req.headers['user-agent']}</td><td>${count.user_agent}</td></tr>
        </table>`);
});
  
router.get("/comments", (req, res) => {
    res.send(com);
});
  
router.post("/comments", jsonParser, validation, (req, res) => {
    console.log(req.body);
      com += JSON.stringify(req.body);
      res.send('successfully comments');
});
  
router.use((req, res, next) =>{
    res.status(400).send('Not Found');
});

module.exports = router;

