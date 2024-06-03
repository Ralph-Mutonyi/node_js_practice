const express = require("express");
const app = express();

app.get("/", function(request, response){
    response.send("<h1 style='text-align:center'>Hey Friends welcome to my app</h1>");
})

// sending a response to the user 
// listening on a local server
app.listen(3000, function(error){
    if(error == true){
        console.log("Some err occured");
    }else{
        console.log("listening on localhost:3000");
    }
})