
// const http = require("http")  // http 

//  createServer is used for server creation
// user sends request to server , server sends responce to user
// const server = http.createServer((req,res)=>{ 

    // status code for how the responce will send
        // res.statusCode = 200
        //  message sends from the server through  "end"  keyword
        // res.end(`<h1>Hwllo world</h1>`)
       
        
// })

//set port number for server listening
// server.listen(8080 , () =>  console.log("server is running on the port http://localhost:8080"))




const http =require("http")


const server  =  http.createServer((req,res)=>{
   if( req.url == "/"){
    res.statusCode = 200
    res.end("Welcome to home page")
   }
   else if(req.url == "/about"){
    res.statusCode =200 
    res.end ("welcome to about page")
   }
   else if(req.url == "/contact"){
    res.statusCode =200 
    res.end ("welcome to contact page")
   }
   else {
    res.statusCode = 404
    res.end ("page not found")
   }
})


server.listen(3000 , ()=> console.log("server is running http://localhost:3000"))