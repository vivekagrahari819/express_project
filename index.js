const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static('public')); // middleware in express 

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html'); // every html file you can access
//   });
  
// app.get('/about', (req, res) => {
//   res.send("about page")     // simple text access by using res.send 
// }) 
// app.get('/about3/:name', (req, res) => {     //this is just parameter using 
//   res.send("about page :- "+req.params.name)
// }) 
// app.get('/about2', (req, res) => {
//   res.sendFile(path.join(__dirname,'about2.html'))
//   res.json({"vivek":23,'age':45})                 // you can use json also 
// }) 
//------------------------------------------------------------------------------
// app.use('/',require(path.join(__dirname,'./routes/portfolio')))
//how to access routers folders portfolio.js page using this 





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)  
})