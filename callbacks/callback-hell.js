const fs = require("fs");

fs.readFile("input.txt", "utf8", (error,data) => {
    if(error){
        console.error("Error reading the file", error);
        return;
    }

    const modifiedData = data.toUpperCase();

    fs.writeFile("output.txt", modifiedData, (error,data) => {
        if(error){
            console.error("Error reading the file", error);
            return;
        }
        console.log("Data written to file: ");

        fs.readFile("output.txt", "utf8", (error, data) => {
            if(error){
                console.error("Error reading to file", error);
                return;
            }
            console.log("Data from output file: ", data)
        })

    });
  
    
})