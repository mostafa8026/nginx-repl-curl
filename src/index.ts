import * as http from 'http';
var buf0 = new Buffer([0]);

var server = http.createServer(function (req, res) {
    res.setHeader('content-type', 'multipart/octet-stream');
    res.write('Welcome to the Fun House\r\n');
    res.write('> ');
    
    req.on('data', function (buf) {
        res.write(buf);
        res.write('> ');
    });
    
    console.log(req.headers['user-agent']);
    var iv = setInterval(function () {
        res.write(buf0);
    }, 100);

    req.on('end', function () {
        res.write('Ended\r\n');
        clearInterval(iv);
    });
});
server.listen(8000);