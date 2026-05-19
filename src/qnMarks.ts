// ?. ---> optional chaining
// ?? --> nullish coalescing -- null or undefined
// ?: --> ternary operator


const isAuthenticated = null;
const user = isAuthenticated ?? "log in successfully";
console.log(user);


const isAuthenticated1 = true;
const user1 = isAuthenticated1 ?? "log in successfully";
console.log(user1);