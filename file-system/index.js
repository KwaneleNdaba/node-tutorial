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