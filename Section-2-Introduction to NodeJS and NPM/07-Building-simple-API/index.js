const fs = require("fs");
const http = require("http");
const url = require("url");

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const productData = JSON.parse(data);

http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "overview") {
    res.end("This is the OVERVIEW");
  } else if (pathName === "/product") {
    res.end("This is the PRODUCT");
  } else if (pathName === "/api") {
    res.writeHead(200, {
        'Content-type': 'application/json',
        "my-own-header": "hello-world",
    })
    res.end(data)
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page Not Found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});

/* 

http.createServer((req, res) => {
  // console.log(req.url);
  // res.end('Hello from the server');

  const pathName = req.url;

  if (pathName === "/" || pathName === "overview") {
    res.end("This is the OVERVIEW");
  } else if (pathName === "/product") {
    res.end("This is the PRODUCT");
  } else if (pathName === "/api") {
    fs.readFile(`$${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
        const productData = JSON.parse(data);
        // console.log(productData);
        res.writeHead(200, {
            'Content-type': 'application/json',
        })
        res.end(data)
    })
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page Not Found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});


*/