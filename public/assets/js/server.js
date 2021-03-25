//Dependecies

const express= require('express');
const path = require('path');

//Sets up the Express App
const app = express();
const PORT = 3000;

//Sets up the express app

//Middleware Functions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Static file hosting for public director
app.use(express.static("public"));

//HTML routes
app.get("./notes", function (req, res){
   res.sendFile(path.join(_dirname, "public", "notes.html"));
});

//API routes
app.get("/api/notes", function (req, res){
//Retrieves all notes and res.json them back to the fron end.
});

app.post("/api/notes", function (req, res){
    //creates a note from the req. body
});
app.delete("/api/notes/:id", function(req, res){
    //delete a note based off id
    const { id  } = req.params;
}); 