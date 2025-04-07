
// const people = require("./people.js");

// console.log(global);

// const path = require("path");
// const myPath = "C:/Users/admin/OneDrive/Desktop/node_js/people.js"

// console.log(path.basename(myPath));


// const os = require("os");
// console.log(os.platform());

// console.log(os.cpus());

// const fs = require("fs");
// fs.writeFileSync("myfile.txt", "Hello programmer");


// const fileData = fs.readFileSync("myfile.txt");
// console.log(fileData.toString());


// fs.readFile("myfile.txt", (err, data)=>{
//     console.log(data.toString());
// })

// const EventEmitter = require("events");
// const emitter = new EventEmitter();



const School = require("./school.js")

const school = new School();

// Correctly listening for 'bellring' event on the school instance
school.on("bellring", (data) => {
    console.log("We need to run");
    console.log(data);  // You can log the data if you want to see more information.
});

school.startClass();
