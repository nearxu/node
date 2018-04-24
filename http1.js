var http = require("http");
var url = require("url");
var querystring = require("querystring");

// get
// var server = http.createServer((req, res) => {
//   var urlObj = url.parse(req.url);
//   console.log(urlObj);
//   console.log(urlObj.query);
//   res.end("url" + req.url);
// });

// post
var server = http.createServer((req, res) => {
  var body = "";
  req.on("data", thunk => {
    body += thunk;
  });
  req.on("end", () => {
    console.log("body" + body);
    res.end("ok");
  });
});

server.listen(3000);

// var client = http.get("http://127.0.0.1:3000", clientRes => {
//   clientRes.pipe(process.stdout);
// });
