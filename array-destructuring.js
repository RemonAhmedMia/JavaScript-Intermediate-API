// const sania = {
//     name: 'Sania Ahmed',
//     age : 180,
//     friends: ['Anika', 'Maimona' , 'Shakiba'],
//     status: 'Not-Found'
// };

// //console.log(sania.name);
// //console.log(sania.age);
// //evahbe bar bar likhe kora jhamela

// const {name, age, friends, status} = sania;
// console.log(name);
// এখানে { name, age, friends } হলো object এর keys যেগুলো আমরা variable হিসেবে declare করেছি।

// array destructring==============

// const person = ['rimon' , {age: 10} , 'shakib'];
// const [nayok,boyos,villain] = person

// console.log(nayok);


const person = ['Rimon', { age: 10, city: 'Dhaka' }, 'Shakib', 'Sakib2'];

const [nayok, { age: boyos, city }, ...villains] = person;

console.log(nayok);    // Rimon
console.log(boyos);    // 10
console.log(city);     // Dhaka
console.log(villains); // ['Shakib', 'Sakib2']
