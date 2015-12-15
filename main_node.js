var http = require('http');
var pi = require('./piMaker.js');


http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/plain'});

    var itrs = 100;
    if(req.hasOwnProperty('itrs')) {
        itrs = Number(req.query.itrs);
    }

    var strResponse = pi.nilakPi(itrs).toString() + ", " + pi.fftPi(itrs).toString();
    res.write(strResponse);
    res.end();

}).listen(8080);

console.log('Server running at http://127.0.0.1:8080');