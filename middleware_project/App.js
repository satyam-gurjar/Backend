const express = require("express");
const parser = require('body-parser');

const app = express();

app.use((req,res,next)=>{
  console.log('first Dummy Middleware',req.url,req.method);
  next();
});

app.use((req,res,next)=>{
  console.log('second Dummy midleware',req.url,req.method);
  next();
});

// app.use((req,res,next)=>{
//   console.log( `third dummy middleware`,req.url,req.method);
//   res.send("hello india");
// })

app.get("/",(req,res,next)=>{
  console.log('handlling / for get',req.url,req.method)
  res.send(`<h1>hello india</h1>`);
})

app.get("/contact",(req,res,next)=>{
  console.log(`Handling /contact `,req.url,req.method);
  res.send(
    `<h1>Enter your detail</h1>
    <form action="/contact" method="POST">
      <input type="text" name="name" placeholder="Enter Your Name" />
      <input type="email" name="email" placeholder="Enter Your Email" />
      <input type="submit"/>
    `)
})



app.use(parser.urlencoded())


app.post("/contact",(req,res,next)=>{
  console.log( `Handling contact  for post`,req.url,req.method,req.body);
  res.send("<h2>your details</h2>")
})



app.listen(3000,()=>{
  console.log(`server listen on http://127.0.0.1:3000`)
})