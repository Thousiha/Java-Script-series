"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
var user_1 = require("./user");
// Create a new user object
var userObj = (0, user_1.createUser)("JohnDoe", 25, "johndoe@example.com");
// Log user details using template literals
console.log("User: ".concat(userObj.username, ", Age: ").concat(userObj.age, ", Email: ").concat(userObj.email));
