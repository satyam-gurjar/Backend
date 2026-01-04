const http = require('http');
const fs = require('fs');

  const requesHandler =  ((req,res)=>{
  console.log(req.url, req.method);

  if(req.url === '/')
  {
    res.setHeader('Content-Type', 'text/html');

    res.write('<html>');
    res.write('<head><title>Welcome</title></head>');
    res.write('<body><h1>Enter Your Detail</h1>');

    res.write('<form action="/submit-details" method="POST">');

    res.write('<input type="text" name="username" placeholder="Enter your Name"><br><br>');

   
    res.write('<label>Gender:</label><br>');

   
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male</label><br>');

    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label><br><br>');

    res.write('<input type="submit" value="submit">');

    res.write('</form>');
    res.write('</body>');
    res.write('</html>');

    return res.end();
  }

  else if(req.url.toLocaleLowerCase()==='/submit-details' && req.method == 'POST'){
    const body =[];
    req.on('data',(chunk)=>{
      console.log(chunk);
      body.push(chunk);
    });

    req.on('end',()=>{
      const fullbody = Buffer.concat(body).toString();

      const params = new URLSearchParams(fullbody);
      // const bodyObject ={};
      // for(const [key,value] of params.entries()){
      //   bodyObject[key]=value;
      // }
      const bodyObject = Object.fromEntries(params);

      fs.writeFileSync('user.txt',JSON.stringify(bodyObject));
  

      console.log(fullbody);
      console.log(bodyObject)
    });


    res.statusCode = 302;
    res.setHeader('Location','/');

  }
});

module.exports = requesHandler;

