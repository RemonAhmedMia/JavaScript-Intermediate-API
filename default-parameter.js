function add(num1, num2) {
    let result = 0;
    result = num1 + num2;
    console.log(result);
}
add(3,4); //argument


// Default Parameter========
function sum ( num1=0, num2=0){
    const final = num1 + num2;
    console.log(final);
    
}
sum(100,10)