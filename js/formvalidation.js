function signinvalidation()
{
    var user=document.getElementById("username").value;
    var pw=document.getElementById("password").value;
    ok="true";
    if(user=="" && pw=="")
    {
        alert("Please write username and password!");
        ok="false";
    }
    else if(user=="")
    {
        alert("Please write username!");
        ok="false";
    }
    else if(pw=="")
    {
        alert("Please write password!");
        ok="false";
    }
    else if (pw.length < 8 ) {
        alert("Password should be atleast 8 characters long!");
		ok = "false";
    }
    if (ok == "false") {
        return false;
       }	
}

function signupvalidation()
{
var user=document.getElementById("username").value;
var email=document.getElementById("email").value;
var pw=document.getElementById("password").value;
var cpw=document.getElementById("cpassword").value;

ok="true";

if(user=="")
{
    alert("Username cannot be blank!");
    ok = "false";
}

else if(user.length>15)
{
    alert("Username should be less than 15 characters!");
    ok = "false";
}
if(pw=="")
{
    alert("Password is required");
    ok = "false";
}
else if (pw.length < 8 ) {
        alert("Password should be atleast 8 characters long!");
		ok = "false";
        }
else if (pw.search(/[a-z]/i) < 0) {
        alert("Password should contain at least one letter!");
		ok="false";
       }
else if (pw.search(/[0-9]/) < 0) {
        alert("Password should contain at least one digit!"); 
		ok="false";
     }
else if(password.search(/[!#$%&? "]/)<0)
	  {
	  alert("Password should contain at least one special character!"); 
		ok="false";
      }
 if(cpw!=""){
     alert("Confirm password is required!");
     ok="false";
 }     
     if(!pw.match(cpw))
     {
      alert("Passwords do not match!");
      ok="false";
     }
    if (ok == "false") {
    return false;
   }	
}