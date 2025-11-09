
const express = require("express"); // Express module import
const cookieParser = require("cookie-parser");
const app = express(); // Express app create
app.use(cookieParser());// middlewair hishbe kaj kor ..
// body theke data grape korar jonno 
app.use(express.json()); // eitar request oboshoi post request hobe ..

const port = 3000; // Port number
// Route: Home
app.get("/", (req, res) => {
   res.send("Home page ");
});

// Route: About // local host er url e "/about add korte hobe last e  tahole about page ta read kora jabe .."
app.get("/about", (req, res) => {
   res.send("About page");
});
app.get("/contact",(req,res)=>{
res.send("Contact Page!!");
 });
//Response status code 
app.get("/not-found",(req,res)=>{
    res.status(404).send("Page not found !! ");
});
app.get('/user',(req,res)=>{
res.json({name:"jerin" , age:"23"});

});
//file download korar jononno 
app.get("/download",(req,res)=>{

    res.download(__dirname,"/files/sample.txt");
});
// redirect korar jonno 
app.get("/google",(req,res)=>{
    res.redirect("https://www.google.com/webhp?authuser=0");
});

//cookie....
app.get("/set-cookie",(req,res)=>{
res.cookie("token","abc123",{httpOnly:true});//name:token and abc123 =value
res.send("Cookie Set!!!");
});
//cookie clear korar jonno 
app.get("/Clear-Cookie",(req,res)=>{
    res.clearCookie("token");
    res.send("Cookie Cleand !!!");
});
//Request
app.get("/search",(req,res)=>{
    // console.log(req); full data terminal e show korbe 
    // res.send("ok!!!");
    //just nam ta show korar jonno .. /search?name =fahim ;; ei url er jonno 
    const {name} = req.query; // query parameter 
    res.send(`Searchig for :${name} `);
});

 // user id r jonno o request kota jai ..
  app.get("/user/:id",(req,res)=>{
    const {id}  = req.params ;
    res.send(`user id : ${id}`);
  });
  // post  and request  body
  app.post("/Submit",(req,res)=>{
    const {name,email} = req.body ; // const  data = req.body; [ eivabe o lekha jai disstructuring charaw ..]
    res.send(` Received : ${name} - ${email}`); //res.send(`Recieved : ${data.name} - ${data.email});
  });
//server  listen
app.listen(port, () => {
   console.log(`Server is running at http://localhost:${port}`);
});

 // jodi home page and about page eksate dekhate chai taile 2 ta way te kora jai ,,, 

 //way 1 :-------
//  app.get("/",(req,res)=>{

//     res.send(`
//         <h1> Home page </h1>
//        <hr>
//         <h2> About page</h2>`);
//  });
//  app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
//  });

// Way -2 ---
// const express = require("express"); // Express module import
// const app = express(); // Express app create
// const path = require("path");
// const port = 3000; // Port number
// app.use(express.static(path.join(__dirname,"public")));// static html serve korar jonno 
// app.get("/",(req,res)=>{
// res.sendFile(path.join(__dirname,"public","index.html"));// jodi html file ta alda vabe thake tahole eita k path join diye connect kora jai .. 
// });