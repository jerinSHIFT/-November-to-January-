const jwt = require("jsonwebtoken");
const user = {id: 1, name:"jerin kabir "};
const secret = "mysecret"; 
//token generate korar jonno used hosse ,,
const token = jwt.sign(user,secret,{expiresIn: "1h"});
console.log(token);
//decode korar jonno 
const decoded = jwt.verify(token,secret);// verify hoi token .. 
console.log(decoded);
