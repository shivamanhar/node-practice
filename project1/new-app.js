const http = require('http');
const {readFileSync} = require('fs');

const homePage = readFileSync('./home.html');
const aboutPage = readFileSync('./about.html');
const server = http.createServer((req, res)=>{
    //req.method
    //req.url
    if(req.url === '/')
    {
        res.writeHead(200, {'content-type':'text/html'});
        res.write(homePage);
        res.end();
    }
    if(req.url === '/about')
    {
        res.writeHead(200, {'content-type':'text/html'});
        res.write(aboutPage);
        res.end();
    }
    res.writeHead(404, {'content-type':'text/html'});
    res.write("Page not found");
    res.end();
    

});

server.listen(5000, ()=>{

    console.log('Server is running ....5000');
});