let express = require("express"),
	app = express();

let http = require('http').Server(app);
let io = require('socket.io')(http);
let path = require('path');

app.use(express.static('.'));

var recette= new mongoose.Schema({
	id : Schema.ObjetId,
	nom: String,
	description: String,
	ingredients:[ingredients],
})

app.get('/',(req, res)=>{
    	console.log("hello");
		res.status(200);
});

app.listen(3000,function(){
    console.log('HTTP server started on port 3000');
});