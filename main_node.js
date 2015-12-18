var http = require('http');
var pi = require('./piMaker.js');
var url = require('url');
var script = require('./script.js');

var port = 8080;


http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/plain'});
    var params = script.parseUrl(req.url);

    var itrs = 100;
    if(params && params.itrs) {
        itrs = Number(params.itrs);
    }

    var strResponse = pi.nilakPi(itrs).toString() + ", " + pi.fftPi(itrs).toString();
    res.write(strResponse);
    res.end();

}).listen(port);

console.log('Server running at http://127.0.0.1:' + port);