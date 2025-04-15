// Uptime Monitoring Application
//description : A restfull application for monitor up or down time for user defined links


//dependency

const http = require("http");
const url = require("url");

// app object  - module scaffolding
const app = {};


// 
app.config = {
    port:3000
};


// _______________create server
app.createServer = ()=>{
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, ()=>{
        console.log(`Listening to the port ${app.config.port}`);
    });
}


// __________handle Request Response
app.handleReqRes = (req, res)=>{

    const parseURL = url.parse(req.url, true);
    const pathname = parseURL.pathname;
    const trimmedPath = pathname.replace(/^\/+|\/+$/g,"")
    // console.log(parseURL);
    console.log(pathname);
    console.log(trimmedPath);

    res.end("Hello programmer");
}


app.createServer();