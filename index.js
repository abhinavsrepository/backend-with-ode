const fs = require("fs");
//reading from the text
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);
const textOut =
  "this is  we know about node js:  ${textIn}.\nCreated on ${Date.now()}";

//writing in new module
fs.writeFileSync("./txt/output.txt", textOut);
console.log("file written");
