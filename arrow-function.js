// Arrow Function হলো JavaScript ES6-এর একটি ফিচার, যা দিয়ে function লিখা অনেক ছোট ও সহজ হয়ে যায়।

// **Regular Function=====

function sum (num1 , num2) {
    return num1 + num2;
}
const output = sum(10,20);
console.log(output);

// // Another Way Of Normal Function====

const sum2 = function (num1, num2) {
    return num1 + num2;
}

const finalOne = sum2(20,30);
console.log(finalOne)


// Arrow Function=========

// single line arrow function er khetre kono return kora ba likhte hoi na
const arrowOne = (num1,num2) => num1 + num2;
console.log(arrowOne(100,200));


// Multiple line er khetre return likhte hoi ta na hole undefined dhekabe
const arrowTwo = (num1,num2) => {
    return num1 + num2;
}
const arrowOutput = arrowTwo(200,200);
console.log(arrowOutput);
