const EventEmitter = require('events');
const http = require('http');



const server = http.createServer();

server.on('request', (req, res) => {
    console.log('Log Request received!');
    console.log(req.url);
    res.end('Response Request received!');
});

server.on('request', (req, res) => {
    console.log('Another Request 😊!');
});

server.on('close', () => {
    console.log('Server closed!');
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Waiting for requests...');
})
