
const register=(req, res, db) =>{

var mail=req.body.email


db.from('collectdata').select("email").where('email','=',mail)
.then((rows)=>{
		for(row of rows){
		var check1=(`${row['email']}`);
		}
		
		if(check1)
		{
			
			return res.status(400).json('Email already exists..Please register with another Email');
               	
		}
		else
		{
			db('collectdata').insert(req.body)
			return res.status(200).json('Registered successfully')
		
		}
		
}).catch((err)=>{console.log(err);throw err})
				

}

module.exports = {
  register:register
}

