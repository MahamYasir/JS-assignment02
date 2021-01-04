var password = "JavaScript";
var userPassword = prompt("Enter your password");

if (!userPassword)
{
    alert("Please enter your password")
}
else if (userPassword === password) 
{
    alert("Correct! The password you entered matches the original password");
}
else {
    alert("Incorrect password");
  }