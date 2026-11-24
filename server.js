const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        
        res.end('Welcome to the HOME page');
    }

    else if(req.url === '/about') {
        res.end('Welcome to the ABOUT page');
    }
    
    else{
        res.end('404 Page Not Found');
    }

});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});