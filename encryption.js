// const crypto = require("crypto");
// const algorithm ='aes-256-cbc';// crypto algorithm list theke require kore ansi 
// // key [encryption and decryption  er jonno same rakha lagbe ]
// const key = crypto.randomBytes(32);
// const iv = crypto.randomBytes(16);// initial vector [iv]

// //Encryption function 

// function encrypt(text){
// const cipher = crypto.createCipheriv(algorithm,key,iv);
// return Buffer.concat(
//     [cipher.update(text,"utf-8"),cipher.final()]
// ).toString(
//  "hex"
// );
// };
// const encrypted = encrypt(" I am from bangladesh");
// console.log(encrypted);

// //decryption er function 
// function decrypt(encrypted){
// const dcipher = crypto.createDecipheriv(algorithm,key,iv);
// return Buffer.concat([
// dcipher.update(Buffer.from(encrypted,"hex")),
// dcipher.final(),
// ]).toString
// ("utf-8");

// };
// const decrypted = decrypt(encrypted);
// console.log(decrypted);

// key and initial vector er value print korar jonno .. 
// console.log(key);
// console.log(iv);