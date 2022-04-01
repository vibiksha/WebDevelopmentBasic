const url='http://localhost:300/signin'
    const form=document.querySelector('form');
    form.addEventListener("submit",(e)=>{
    e.preventDefault()
    var email1=document.getElementById('loginemail').value
    var password1=document.getElementById('loginpassword').value
    
    fetch("http://localhost:3000/signin",{
        method:'POST',
        body:JSON.stringify({
            email:email1,
            password:password1
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8' 
        }
    })
     
  .then(res => Promise.all([res.status, res.json()]))
  .then(([status, jsonData]) => {
  if(status!=200)
  {
  	alert(jsonData)
  	location.href='signin.html'
  }
  else
  {
    location.href='success.html'
    console.log(jsonData);
    console.log(status);
  }
  });
 
     
     });
  
  
   
