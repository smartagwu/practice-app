const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  const html = fs.readFileSync(__dirname.replace('server', '') + 'client/second.html', 'utf8');
  res.end(html);
});

server.listen(process.env.PORT || 3000, function () {
  console.log('started server')
});
