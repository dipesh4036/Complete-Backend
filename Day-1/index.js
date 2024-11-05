// creating a HTTP server

const server = http.createServer((req, res) => {
    // Send the response body
    res.end('Hello, World!\n');
});

// The server listens on port 3000
server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});