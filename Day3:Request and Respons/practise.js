const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/home') {
    res.write('<h1>HOME</h1>');
    return res.end();
  }
  else if (req.url.toLowerCase() === '/men') {
    res.write('<h1>MEN</h1>');
    return res.end();
  }
  else if (req.url.toLowerCase() === '/women') {
    res.write('<h1>WOMEN</h1>');
    return res.end();
  }
  else if (req.url.toLowerCase() === '/kids') {
    res.write('<h1>KIDS</h1>');
    return res.end();
  }
  else if (req.url.toLowerCase() === '/cart') {
    res.write('<h1>CART</h1>');
    return res.end();
  }

  res.write(`
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Myntra</title>
</head>
<body>
  <nav>
    <ul>
      <li><a href="/home">Home</a></li>
      <li><a href="/men">Men</a></li>
      <li><a href="/women">Women</a></li>
      <li><a href="/kids">Kids</a></li>
      <li><a href="/cart">Cart</a></li>
    </ul>
  </nav>
</body>
</html>
  `);

  res.end();
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server is listen on http://127.0.0.1:3000`);
});
