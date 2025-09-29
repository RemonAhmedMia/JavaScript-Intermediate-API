const manosh = {
    name: 'Rimon',
    age: 10,
    country: 'Bangladesh'
}

Object.seal(manosh); // tahole ar object er vitore noton kore kichu add kora jabe na like manosh.hobby = "gerdening" kora jabe na; kinto value change kora jabe

manosh.age = 20;

console.log(Object.keys(manosh));
console.log(Object.values(manosh));
