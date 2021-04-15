
// Object declare
var mehnaz={
    age:2,
    weight:12,
    height: 65,
    color: "red"

}

var herAge = mehnaz.age;
console.log(herAge);

var herWeight = mehnaz["weight"];
console.log(herWeight);

var herHeight = 'height';
var mehnazHeight = mehnaz[herHeight];
console.log(mehnazHeight);


// update any value

mehnaz.age=2.2;
console.log(mehnaz);

