//const os = require('os');
//const fs = require('fs');
//const path = require('path');
//OS MODULE
//We bind the "os" Module to the os variable to use its functions
/*
let os = require('os');
let bytes = os.freemem();

let kbytes = bytes/1000;
let mbytes = kbytes/1000;
let gbytes = mbytes/1000;


console.log("Free memory: " + bytes + "Bytes");
console.log("Free memory: " + kbytes + "KB");
console.log("Free memory: " + mbytes + "MB");
console.log("Free memory: " + Math.round(gbytes) + "GB");

//------------------------------------------------------------------------------------
// FILESYSTEM MODULE
let fs = require('fs');
let callback = (err,files) => console.log(files);

fs.mkdir("Testordner", ()=>{
  console.log("Fertig erstellt!");
  fs.appendFile("datei1.txt", "Hallo", ()=>console.log("datei1.txt file Erstellt")); //Make a new file
  fs.rename("datei1.txt", "./Testordner/datei1.txt", ()=>console.log("Verschoben!")); //Move file in a new Folder 
});
fs.readdir("./Testordner", callback);
*/
