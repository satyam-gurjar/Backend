const {sumRequestHandler} = require('./sum');


const requestHandler = (req,res) => {
  console.log(req.url,req.method);
  if(req.url == '/'){
    res.setHeader('content-Type','text/html');
    res.write(`
    <html>
      <head><title>Calculater</title></head>
      <body>
        <h1>Go to calculater</h1>
        <a href="/calculater">Calculater</a>
      </body>
    </html>
    `);
    return res.end();
  }
  else if(req.url.toLowerCase() === '/calculater')
  {
    res.setHeader('content-Type','text/html');
    res.write(`
    <html>
      <head><title>Calculater</title></head>
      <body>
        <h1>Welcome to calculater</h1>
        <form action="/calculate-result" method = "POST">
          <input type="text" placeholder="first Num" name="first">
          <input type="text" placeholder="second Num" name="second">
          <input type="submit" value="Sum">
        </form>
      </body>
    </html>
    `);
    return res.end();


  }

  else if(req.url.toLowerCase() === "/calculate-result" && req.method === "POST"){
    return sumRequestHandler(req,res);
  }



      res.setHeader('content-Type','text/html');
    res.write(`
    <html>
      <head><title>Calculater</title></head>
      <body>
        <h1>404 Error</h1>
        <a href="/">Go To Home</a>
      </body>
    </html>
    `);
    return res.end();
  
}

exports.requestHandler = requestHandler;