const express = require ("express");
const app = express();
const port = 4000;
app.get('/',(req,res)=>{
    res.send("My page ");
});
app.get("/home-page",(req,res)=>{
 res.send ("My Home page is exist in server!!!! ");
});
app.listen(port,()=>{ // annonymous arrow function jabe ,, eitar moddhe req, res kono tai jabe na ...
    console.log(`server is running at http://localhost:${port}`);
});