const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    let data = fs.readFileSync("./home.html", "utf8");
    res.end(data);
  } else if (req.url === "/contact") {
    let data = fs.readFileSync("./contact.html", "utf8");
    res.end(data);
  } else if (req.url === "/about") {
    let data = fs.readFileSync("./about.html", "utf8");
    res.end(data);
  } else if (req.url === "/blogs") {
    let data = fs.readFileSync("./blogs.html", "utf8");
    res.end(data);
  }
});
let PORT = process.env.PORT || 4040;
server.listen(PORT, () => {
  console.log(`Server is listening at the port ${PORT}......`);
});
