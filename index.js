const http = require("http");

let arr = [];

http
  .createServer((req, res) => {
    if (req.method === "GET") {
      console.log("mtav stex");

      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET");
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify({ status: 200, message: "ok", data: arr }));
      return res.end();
    }
    if (req.method === "POST") {
      const body = "";
      req.on("data", (data) => {
        body += data;
      });
      return req.on("end", () => {
        arr.push(JSON.parse(body));
        res.write(JSON.stringify({ message: "OK", statusCode: 201 }));
      });
    }
    return res.end();
  })
  .listen(8000);
hasmik.movsisyan;
