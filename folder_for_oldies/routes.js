const fs = require("fs");

const handleRequests = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html><head><body><h1>Hello World</h1>
          <form action="/message" method="POST">
             <input type="text" name="name">
             <button type="submit">Send</button> 
          </form>
          </body></head></html>`);
    return res.end();
  }

  if (method === "POST" && url === "/message") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        console.log("testing....");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
};

module.exports = handleRequests;
