const express=require('express')
const app=express()
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const knex = require('knex');
const cors = require('cors');
app.use(cors())

 const db=knex({
client:'mysql',
connection:{
host:'127.0.0.1',
user:'vibis',
password:'vibis',
database:'register'
}
})


var authenticateController=require('./controllers/signin');
var registerController=require('./controllers/register');
 
app.post('/register',(req, res) => { registerController.register(req,res,db)});
app.post('/signin', authenticateController.authenticate(db));

const port=3000
app.listen(port,function(err){
	if(err) console.log("error in listening")
	console.log("listening on port",port);
})

