const http = require('http');

const server = http.createServer((req,res)=>{
  console.log(req.url, req.method, req.headers);
  res.setHeader( 'Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Welcome</title></head>');
  res.write('<body><h1>hello satya this side</h1></body>');
  res.write('</html>');
  res.end();
})
const PORT = 3000;

server.listen(PORT,()=>{
  console.log(`server is listen on http://127.0.0.1:3000`);
})