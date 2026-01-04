const { buffer } = require("node:stream/consumers");

const sumRequestHandler = (req,res)=>{
  console.log("in sum request handler",req.url);
  const body = [];
  req.on('data',chunk=>body.push(chunk));
  req.on('end',()=>{
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    const reuslt = Number(bodyObj.first) + Number(bodyObj.second);


  res.setHeader('content-Type','text/html');
  res.write(`
    <html>
      <head><title>Calculater</title></head>
      <body>
        <h1>Sum : ${reuslt}</h1>
       
      </body>
    </html>`
  );

     return res.end();
   
  })


}


exports.sumRequestHandler = sumRequestHandler;