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
