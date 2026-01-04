const http = require('http');
const {requestHandler} = require('./handler')

const server = http.createServer(requestHandler);

const PORT = 3000;

server.listen(PORT,()=>{
  console.log(`Sercer starting on http://127.0.0.1:${PORT}`)
})