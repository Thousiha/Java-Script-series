// main.ts
import { createUser } from "./user";

// Create a new user object
const userObj = createUser("JohnDoe", 25, "johndoe@example.com");

// Log user details using template literals
console.log(`User: ${userObj.username}, Age: ${userObj.age}, Email: ${userObj.email}`);
