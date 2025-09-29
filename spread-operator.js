// ... তিনটা dot দিয়েই spread operator বানানো হয়।
// এর কাজ হলো: array, object বা iterable কে আলাদা আলাদা element/field আকারে ছড়িয়ে দেওয়া।

const friends = ["Rimon" , "Shakib" , "Akib"];
// console.log(friends); jodi shodu friends dei tobe pura array tai dhekabe, ar er age ... dile array er vitore er value ta only dhekabe

console.log(...friends);

const newFriends = ["Minhaz" , ...friends];
//console.log(newFriends);
console.log(...newFriends);


const numbers =[23,65,70,3,56,9,90,900,5678];
//console.log(Math.max(numbers)); eivhabe dile NaN ashbe karon tokhn pura array ta dhorbe amader dorkar shodu array er vitor er value gula;

console.log(Math.max(...numbers));
