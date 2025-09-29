// Template String (অথবা Template Literal) হলো JavaScript-এ string লেখার একটা নতুন ও সহজ পদ্ধতি।
// আগে আমরা string বানাতাম ' ' বা " " দিয়ে। কিন্তু Template String এ আমরা ব্যবহার করি backtick ( ` ` )।

// ১. সাধারণ String==========
const name = "Remon";
const message = `Hello, ${name}! How are you?`;

console.log(message); 
// Output: Hello, Remon! How are you?
// এখানে ${name} হলো placeholder।
// Backtick ব্যবহার করলে আমরা string-এর মধ্যে variable / expression বসাতে পারি।

const multiLine = `
This is line one
This is line two
This is line three
`;

console.log(multiLine);


const friendOne = "Omar Faruk"