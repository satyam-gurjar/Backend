
const http = require('http');
const user = require('./user');
const express = require('express');

const app = express();

app.use("/",(req,res,next)=>{
  console.log("req came in first ",req.url, req.method)
  // res.send("<h1>hello this is first</h1>")
  next();
})

app.post("/submit-details",(req,res,next)=>{
  console.log("req came in third ",req.url, req.method)
  res.send("<p> submit-detials</p>")
})

app.use("/",(req,res,next)=>{
  console.log("req came in second ",req.url, req.method)
   res.send("<h1>hello this is second</h1>")
})




const PORT = 3000;
app.listen(PORT,()=>{
  console.log(`server listen on http://127.0.0.1:${PORT}`);
});