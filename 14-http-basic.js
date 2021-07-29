const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/')
    {
        res.end("<h1> This is home page </h1>");
      
    }
    if(req.url === '/about')
    {
        res.end("<h1> This is about us page");
       
    }
    res.end('<h1> Page not found 404 error</h1>');
    
    
});

server.listen(5000);