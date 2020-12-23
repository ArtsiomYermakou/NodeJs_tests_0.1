const fs = require("fs");
const path = require("path");

//File system


// fs.mkdir(path.join(__dirname, "notes"), error => {
//     if (error) throw error
//     console.log("Directory added")
// });

fs.writeFile(path.join(__dirname, "notes", "newFileNotes.js"),
    "Hello World",
    err => {
        if (err) throw err
        console.log("File created")

        fs.appendFile(
            path.join(__dirname, "notes", "newFileNotes.js"),
            "From append file",
            err => {
                console.log(err)
                fs.rename(
                    path.join(__dirname, "notes", "newFileNotes.js"),
                    path.join(__dirname, "notes", "file.js"),
                    err => {
                        if (err) throw err
                        console.log("File renamed")
                    }
                )
            }
        )
    }
)

fs.readFile(
    path.join(__dirname, "notes", "newFileNotes.js"),
    "utf-8",
    (error, data) => {
        if (error) throw error;
        console.log(data);

    }
)

