const http = require('http')
const  requesHandler = require('./chunk');

const server = http.createServer(requesHandler);

const PORT = 3000;

server.listen(PORT,()=>{
   console.log(`listen on http://127.0.0.1:3000`);
});
