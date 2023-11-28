//synchronus
//process one after the other 
//its also called blocking code 
const fs = require('fs')
const input =fs.readFileSync('input.txt' ,'utf-8');
console.log(input);
/*
asynchronous -- non blocking code*/ 

const fs =require('fs')
fs = readFile ('input.txt','utf-8'),(err,data) =>{
    console.log(data);

}

