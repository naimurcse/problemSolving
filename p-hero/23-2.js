// Falsy Value: 0, "", NaN, Null, Undefined, false

// Truthy Value: "0", " ", {}, [], True etc

let age = 0;

if(age || age == 0){
    console.log('Condition is True');
}
else{
    console.log('Condition is False');
}