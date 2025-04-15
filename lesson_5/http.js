const http = require("http");


const server = http.createServer((req, res)=>{
         if(res.url === "/"){
            res.write("");
            res.write("");
            res.end();
        }else if(res.url === "/about"){
            res.write("This is about us page");
            res.end();
        }else{
            res.write("Not found");
            res.end();
        }
    });

    

// server.on('connection', ()=>{
//     console.log("New Connection...");
// })

server.listen(3000);
console.log("Server is listening");