const team = {
    name: 'Shakib',
    age: 45,
    country: 'Bangladesh'
}

for ( let key in team) {
    //console.log(key); key gula pawa jabe just
    console.log(`key: ${key} value: ${team[key]}`);
}