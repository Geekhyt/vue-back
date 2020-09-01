let http = require('http');
let users = [
    {id: 1, name: 'tong11'},
    {id: 2, name: 'tong22'},
    {id: 33, name: 'tong33'}
]
let server = http.createServer(function(req, res) {
    res.setHeaders('Access-Control-Allow-Origin', '*');
    if (req.url === '/api/users') {
        res.end(JSON.stringify(users));
    } else {
        res.end('Not Found');
    }
});
server.listen(5000, () => {
    console.log('后端服务器已经启动在 5000 端口啦！')
});