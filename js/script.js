
//  -------------------------------------------------------------------------
//  <copyright file="script.js"  author="Raj Thomas | iamrajthomas" >
//      Copyright (c) 2021 All Rights Reserved.
//  </copyright>
// 
//  <summary>
//       This is for writing data to an external file and reading data from an external file using Node
//  </summary>
//  <SampleToExecuteThisSnippet>
//       CMD Terminal > node script.js
//  </SampleToExecuteThisSnippet>
//  -------------------------------------------------------------------------

// Requiring fs module in which
// writeFile function and readFile function are defined.
var fs = require("fs");

//====================================================================================================
// Open a new file with name output.txt and write some data and read that file again.
// First Write and Then Read
//====================================================================================================
let data = "This is for beginner level. Learning how to read/write in a file using Node with JS \n..\n..\nAuthor: Raj Thomas";
let fileName = "output-1.txt";
console.log("Let's write the data to an external file");
fs.writeFile(fileName, data, function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("Data written successfully!");

   // Read the newly written file and print all of its data on the console
    console.log("Let's read newly written data");
    fs.readFile(fileName, function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
    });
});

console.log("\n");
console.log("====================================================================================================");
console.log("====================================================================================================");
console.log("\n");
//====================================================================================================
// Reading data from input.txt File and writing it's data to output.txt file
// First Read and Then Write 
//====================================================================================================
console.log("Let's read the written data from assets/input.txt File");
fileName = "assets/input.txt";
fs.readFile(fileName, function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());

    //Writing to Another File 
    fileName = "output-2.txt";
    data += '\n~ [Wrote The data From input.txt to output.txt File]'
    fs.writeFile(fileName, data, function(err) {
        if (err) {
           return console.error(err);
        }
        console.log("Data written successfully!");
     });

});