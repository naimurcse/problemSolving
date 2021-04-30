const add = function(){
    // console.log(arguments);
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        total += element;
    }
    return total;
}

const result = add(5,6,2,8);
console.log(result);

console.log("0sec")

setTimeout(function(){
    console.log("Thanks for waiting");
},5000);

console.log("5sec")