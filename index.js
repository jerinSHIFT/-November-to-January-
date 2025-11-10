<<<<<<< HEAD
const express = require("express");
const app = express();
const port = 5000;

app.get("/homepage",(req,res)=>{
    res.send("Searching for home page!!!");
});

// query tusk //get post duiter jonno same

app.get("/search",(req,res)=>{
    const name  = req.query.name;
    const city= req.query.city;
    if(!name || !city){
     res.status(400)
     .json({
        message:"Sorry query params were not provided properly  !!!!!",
     });
    };
    res.json({
    message:"Yes !! Got the query params !!!",
    name,
    city,
    });
         res.send(`searching person ${name} and ${city}`);
    });

path parameter -----// get and post duitar jonno e same thakbe ..

app.get("/profile/:profileId/post/:postId",(req,res)=>{
const profileId = req.params.profileId;
const postId = req.params.postId;
if(!profileId || !postId){
    res.status(404)
    .json({
    message:"Sorry!! path params were not provided properly..",
    });
};
res.json({
    message:"Yes!! Got the path params properly",
    profileId,
    postId,
});
res.send("successfully done!!");
});// /profile/:profileId/post/:postId[profileId and postId path parameter .. ]

middleware er jonno 
const loggerMiddleware =(req,res,next)=>{ 
console.log( ➡️ [${res.statusCode}] ${req.method}:${req.url});//terminal e output dekhabe [ ➡️ [200] GET:/profile/1234567890/post/100?token=1234] 
next(); } 
app.use(loggerMiddleware); 

 // Request Header er jonno -------- 


app.get("/profile/:profileId/post/:postId",(req,res)=>{
 const userAgent = req.get("User-Agent");// kon user theke request ta hit korse oita dekhar jonno use hoi ... 
const contentype = req.get("Accept"); const authToken = req.get("Authorization");
// authorization key er jonno 
if(authToken=== '1234')
{ res.json({ message:"Hey! here is your request header ", userAgent, contentype, authToken, });
 } 
else{ res.status(401) .json({ error:"Your authentication failed !!!", });
 }; 
    res.json({   // authorization na use korle eivabe use korte hobe ..
     message:"Hey! here is your request header ", 
     userAgent, 
     contentype, 
    });
                    });
 app.listen(port,()=>{ 
console.log(Server is running at http://localhost:${port});
 });

//  final and clear code ---


// const express = require("express");
// const app = express();
// const port = 5000;

// // -------- Logger: response finish হলে log করো
// const loggerMiddleware = (req, res, next) => {
//   const start = Date.now();
//   res.on("finish", () => {
//     console.log(`➡️ [${res.statusCode}] ${req.method}:${req.originalUrl} ${Date.now() - start}ms`);
//   });
//   next();
// };
// app.use(loggerMiddleware);

// // -------- Simple pages
// app.get("/homepage", (req, res) => {
//   return res.send("Searching for home page!!!");
// });

// // -------- Query params example
// app.get("/search", (req, res) => {
//   const { name, city } = req.query;
//   if (!name || !city) {
//     return res.status(400).json({
//       message: "Sorry query params were not provided properly !!!!!",
//     });
//   }
//   return res.json({
//     message: "Yes !! Got the query params !!!",
//     name,
//     city,
//   });
// });

// // -------- Path params + headers + auth (একটাই ডিফাইন করা থাকবে)
// app.get("/profile/:profileId/post/:postId", (req, res) => {
//   const { profileId, postId } = req.params;

//   if (!profileId || !postId) {
//     return res.status(404).json({
//       message: "Sorry!! path params were not provided properly..",
//     });
//   }

//   const userAgent = req.get("user-agent");
//   const accept = req.get("accept");
//   const authToken = (req.get("authorization") || "").trim();

//   if (authToken !== "1234") {
//     return res.status(401).json({ error: "Your authentication failed !!!" });
//   }

//   return res.json({
//     message: "Hey! here is your request header",
//     userAgent,
//     contenttype: accept,
//     authToken,
//     profileId,
//     postId,
//   });
// });

// // -------- Start server
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
=======

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
>>>>>>> da612e7fb4ec39ec7b1a3504951328c22b6a1d3c
