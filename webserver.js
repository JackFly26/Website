var http = require('http');
var url = require('url');
var fs = require('fs');
var prevreq;
http.createServer(function(req, res) {
  var url = req.url;
  if (prevreq) url = prevreq + req.url; //.replace(/\//, "");
  console.log(url);
  try {
    if (!/\./.test(url.split(/\//)[url.split(/\//).length - 1])) {
      fs.readFile(url.replace(/\//, '') + "/index.html", function(err, data) {
        if (err) {
          console.log(err);
        } else {
          res.writeHead(200, {
            'Content-Type': 'text/html'
          });
          console.log('html');
          res.write(data);
          res.end();
        }
      });
    } else if (url.length > 1) {
      fs.readFile(url.replace(/\//, ''), function(err, data) {
        if (err) {
          console.log(err);
        } else {
          //console.log(url.split(/\./)[url.split(/\./).length - 1]);
          switch (url.split(/\./)[url.split(/\./).length - 1]) {
            case 'css':
              res.writeHead(200, {
                'Content-Type': 'text/css'
              });
              console.log('css');
              break;
            case 'js':
              res.writeHead(200, {
                'Content-Type': 'text/javascript'
              });
              console.log('js');
              break;
            case 'jpg':
              res.writeHead(200, {
                'Content-Type': 'image/jpeg'
              });
              console.log('jpg');
              break;
            case 'ico':
              res.writeHead(200, {
                'Content-Type': 'image/x-icon'
              });
              console.log('ico');
              break;
            case 'html':
              res.writeHead(200, {
                'Content-Type': 'text/html'
              });
              console.log('html');
              break;
            default:
              res.writeHead(200, {
                'Content-Type': 'text/plain'
              });
              break;
          }
          res.write(data);
          res.end();
        }
      });
    } else {
      fs.readFile('index.html', function(err, data) {
        if (err) throw err;
        res.writeHead(200, {
          'Content-Type': 'text/html'
        });
        console.log('html');
        if (data) res.write(data);
        res.end();
      });
    }
  } catch (err) {
    console.log(err);
  }
  prevreq = req.url.replace(/[^\/]*\.[^\/]*$/, "");
  console.log(prevreq);
}).listen(80);
