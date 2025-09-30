const team = {
    name: 'Shakib',
    age: 45,
    country: 'Bangladesh'
}

// for ( let key in team) {
//     //console.log(key); key gula pawa jabe just
//     console.log(`key: ${key} value: ${team[key]}`);
// }

 // ekhon amra chaile for of diyeo korte pari sekhetre object k array te convert korte hobe Object.entreies diye|

//  for(let key of Object.entries(team)) {
//     console.log(key); // evhabe object k array te nile 3 ta array dhekabe
//  }

//ekhn amra object k destructring korte pari

for(let [key,value] of Object.entries(team)) {
    console.log(`The key Is: ${key} And value is: ${value}`);
}