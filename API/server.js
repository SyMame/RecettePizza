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
	ingredients:[ingredients]
})
 var ingredients = new mongoose.Schema({
 	nom :String,
 	description: String,
 	mesure: int,
 	tempsdecuisson:int 
 })

app.get("/recette", (req,res)=>{
	res.status(200).json(recette)
})
app.post ('/recette', (req,res)=>{
	res.status.json(recette)
})

app.listen(3000,function(){
    console.log('HTTP server started on port 3000');
});