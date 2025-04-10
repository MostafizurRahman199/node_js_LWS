const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'bigdata.txt'); // Safely join paths
    const myReadStream = fs.createReadStream(filePath, 'utf-8');
    
    myReadStream.pipe(res);

    // Handle read stream errors
    myReadStream.on('error', (err) => {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('File not found');
    });
});

server.listen(3000);
console.log(`Listening on port 3000`);
