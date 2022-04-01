const authenticate=(db)=>(req,res)=>{

var mail=req.body.email
var pass=req.body.password
  

db.from('collectdata').select("email").where('email','=',mail)
	.then((rows)=>{
		for(row of rows){
	 
		var check1=(`${row['email']}`);
		}
	
		if(check1)
		{
			console.log("you have entered the valid email...now validating the password");
			db.from('collectdata').select("password").where('password','=',pass)
				.then((rows)=>{
				for(row of rows){
				var check2=(`${row['password']}`);	
				}
				if(check2)
				{
				
					res.status(200).json('logged in successfully')
				}
		
				else
				{
					
					res.status(400).json('Wrong Password..Try again')
					
				}
				}).catch(err => res.status(400).json('wrong credentials'))
		}
				
				
		else
		{
			
			 return res.status(400).json('Please Register');
		}
		}).catch(err=> res.status(400).json('wrong credentials'))
		
				
}

module.exports = {
  authenticate:authenticate
}
