function signup(e){
e.preventDefault()
let username=document.getElementById("username").value
let email=document.getElementById("email").value
let password=document.getElementById("password").value
console.log(username,email,password);
localStorage.setItem("username",username)
localStorage.setItem("email",email)
localStorage.setItem("password",password)
window.location.href="../../index.html"
}


function login(e){
e.preventDefault()
let email=document.getElementById("user").value
let password=document.getElementById("pass").value
let signupEmail=localStorage.getItem("email")
let signupPass=localStorage.getItem("password")
if(email == signupEmail && password == signupPass){
    window.location.href="./assets/pages/Home.html"
}
else{
alert("email or password is invalid")
}
}