const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");

if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log("Data folder created");
}

const filePath = path.join(dataFolder, "example.txt");

fs.writeFileSync(filePath, "Hello from node js");

const readContentFromFile = fs.readFileSync(filePath, "utf8")


console.log("File Content: ", readContentFromFile);

fs.appendFileSync(filePath, "\nThis is a new line added to this file");
console.log("New file content added");


const asyncFilePath = path.join(dataFolder, "async-example.txt");
fs.writeFile(asyncFilePath, "Hello Async node js", (err) => {
    if(err) throw err;
    console.log("Async file has been created successfully");
    fs.readFile(asyncFilePath, "utf8", (error, data) => {
        if(err) throw err;
        console.log("Async file content:", data);

        fs.appendFile(asyncFilePath, "\nThis is a new line for async file", (error) => {
            if(error)throw error;
            console.log("New line added to async file");
        })
        fs.readFile(asyncFilePath, "utf8", (error, udpatedData) => {
            if(error) throw error;
            console.log("Updated data: ", udpatedData)
        });
    })
})