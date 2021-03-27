//Dependecies
const fs = require ('fs'); 
const uuid = require ('uuid/v1');
const express= require('express');
const path = require('path');
let data = require (__dirname + "/./db/db.json")

//Sets up the Express App
const app = express();
const PORT = process.env.PORT ||3000;

//Sets up the express app

//Middleware Functions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Static file hosting for public director
app.use(express.static("public"));

//API routes
app.get("/api/notes", function (req, res){
res.json(data)

 //Retrieves all notes and res.json them back to the front end.
    });
    
app.post("/api/notes", function (req, res){
 req.body.id = uuid()  
 data.push(req.body)
 const newdata = JSON.stringify(data)
 fs.writeFile(__dirname + "/./db/db.json", newdata, function(err){
     if (err) throw err 
 })
 res.end ()
//creates a note from the req. body
    });

    
app.delete("/api/notes/:id", function(req, res){
      //delete a note based off id
        const { id } = req.params;
  let filterData = data.filter(function (notes){
return notes.id != id 
  })      
let newNote= JSON.stringify(filterData)
data = filterData
fs.writeFile(__dirname + "/./db/db.json",newNote, function (err) {
    if (err) throw err
})
res.end ()
    }); 


//HTML routes
app.get("/notes", function (req, res){
   res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("*", function (req, res){
    res.sendFile(path.join(__dirname, "./public/index.html"));
 });



app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));