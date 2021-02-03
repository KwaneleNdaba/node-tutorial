const http = require("http");

const server = http.createServer((req,res) => {
const url = req.url;
if(url === "/"){
    res.writeHead(200, {
        "Content-Type" : "text/plain"
    });
    res.end("This is home page");
}else if(url == "/cart"){
    res.writeHead(200, {
        "Content-Type" : "text/plain"
    });
    res.end("This is cart page");
}else {
    res.writeHead(404, {
        "Content-Type" : "text/plain"
    });
    res.end("This page is not found");
}
})

const port = 3000;

server.listen(port, () => {
    console.log("Server is running on port", port)
})