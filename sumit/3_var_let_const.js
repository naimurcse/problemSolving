function myFunc(){
    var x = 50;
    console.log(x);
}
myFunc();

console.log("----------------------");

if(true){
    var x = 20;
}
console.log(x);   // Output: 20

if(true){
    let y = 44;    
}
// console.log(y);   // Error - y is not defined

console.log("---------- var ----------");
if(true){
    var a = 10;
    var a = 15;
    var a = 22;
}
console.log(a);




console.log("---------- let ----------");
if(true){
    let b = 30;
    b = 35;
    b = 32;
    console.log(b);
}

console.log("---------- const ----------");
if(true){
    const c = 40;
    // let c = 99;  // Error - Identifier 'c' has already been declared
    // c = 45; // Error - Assignment to constant variable.
    console.log(c);
}

if(true){
    const myObj = {
        name : "Mehnaz",
        age: 2
    };
    // const myObj ={}; // Error - Identifier 'myObj' has already been declared
    
    myObj.name = "Shahrima";
    console.log(myObj);
}
