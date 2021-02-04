const fs = require("fs")



function person(name , callbackFn){
    console.log(`Hello ${name}`);
    callbackFn();
}

function address(){
    console.log("South Africa");
}

person("Kwanele Ndaba", address);

fs.readFile("input.txt","utf8", (error , data) => {
        if(error){
            console.error("Error reading the file", error);
            return;
        }
        console.log("Data :", data)
})