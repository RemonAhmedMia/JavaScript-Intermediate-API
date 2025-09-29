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


const friendOne = "Omar Faruk";
const friendTwo = "Moin Intejar";
const friendThree = "Someone";
const places = "Kaptai And Noakhali"
const tour = `we have three friend like ${friendOne} and ${friendTwo} also ${friendThree} we are going the place of ${places}`

console.log(tour);

// এখানে ${name} হলো placeholder।
// Backtick ব্যবহার করলে আমরা string-এর মধ্যে variable / expression বসাতে পারি।

// Expression বসানো
const a = 10;
const b = 20;

console.log(`Sum is: ${a + b}`); 
// Output: Sum is: 30


// Function এর ভেতরে====
function greet(name) {
  return `Welcome, ${name}!`;
}

console.log(greet("Mia"));
// Output: Welcome, Mia!