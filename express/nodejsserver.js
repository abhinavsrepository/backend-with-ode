const { checkPrime } = require('crypto');
const http =require('http');
// the http module has a createserver method 
// take 1 arg:
//callback has 2 args :req,res
const server = http.createServer((req,res)=>{
console.log (req) 
// res ==our way torespond the msgs
// http messages 
// 1. start-line -checkPrime
// 2. Headers
// 3.body
//  write Head takes 2 args :
// status code 
// object for the mime-type
res.writeHead(200,{'content-type':'text/html'}); 
res.write ('<h1>helllo to the world becoming best coder in the world </h1>')
res.end();
});
// createServer returns an object  with a listen method 
// listen takes 1 arg 
// port to for http traffic on 
server.listen(3000);