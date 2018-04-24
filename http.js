const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plan");
  //   if (req.url !== "/favicon.ico") {
  //     let out = fs.createWriteStream("./log.txt");
  //     out.write(`请求方法：${req.method} \n`);
  //     out.write(`请求url：${req.url} \n`);
  //     out.write(`请求头对象：${JSON.stringify(req.headers, null, 4)} \n`);
  //     out.write(`请求http版本：${req.httpVersion} \n`);
  //   }

  fs.readFile("log.txt", (err, data) => {
    if (err) {
      return console.error(err);
    }
    console.log("aysic" + data.toString());
  });
});

server.listen(3000, () => {
  console.log("listen 3000");
});
