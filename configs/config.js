const db = require("mongoose");

db.connect("mongodb://127.0.0.1:27017/8", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(() => console.log('Connected to the db'))
.catch(err => console.log('error', err));

module.exports = db;
