
    const form=document.querySelector('form');
    form.addEventListener("submit",(e)=>{
    e.preventDefault()
    var username1=document.getElementById('regusername').value
    var email1=document.getElementById('regemail').value
    var password1=document.getElementById('regpassword').value    
    fetch("http://localhost:3000/register",{
        method:'POST',
        body:JSON.stringify({
            username:username1,
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
  	location.href='register.html'
  }
  else
  {
    alert(jsonData)
    location.href='signin.html'
    console.log(jsonData);
    console.log(status);
  }
  });
 
     
     });
  
  
