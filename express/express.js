setInterval(()=>{console.log("1 second ")},1000)
// node js web server and language written in 
// express is node'
//  basic routing 
const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.send('hello world ')
})
//  Route methods

// http methods and is attached to an instance of the express class.
// the follwoing code is ab example of routes that define the get and the post methods to the root of the app
// get method