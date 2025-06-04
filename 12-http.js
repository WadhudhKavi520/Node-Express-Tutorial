const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our Home page');
    } else if (req.url === '/about') {
        res.end(`Welcome to our About Page
Here is our short history!`);
    } else {
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find that page :(</p>
            <a href='/'>Go back to Home Page</a>
        `);
    }
});

server.listen(5000);