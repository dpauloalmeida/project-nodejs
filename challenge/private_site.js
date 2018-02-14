const http = require("http");
const url = require('url');
const fs = require("fs");
const path = require('path');

const page = (result) => {
    if (result && result !== "/") {
        const file = path.join(__dirname, `../html/${file}.html`);
        const exist = fs.existsSync(file);

        if (exists) {
            return file;
        }
        return path.join(__dirname, "../html/404.html");
    }
    return path.join(__dirname, "../html/index.html");
};

const server = http.createServer((req, res) => {
    const result = url.parse(req.url).result;

    fs.readFile(page(result), (error, html) => {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(html);
    });
});

server.listen(3000, function() {
    console.log("Run private site");
});