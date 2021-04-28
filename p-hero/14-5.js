//5! = 5*4*3*2*1 = 120

let num = 5;
let element = 1;
for (let i = 1; i <= num; i++) {
    element = element * (i);
    console.log(element);
}

console.log("--------------------------------------");

function factorial(n){
    let result = 1;
    for(let i = n; i>=1; i--){
        result *= i; 
    }
    console.log(result);
}

factorial(6);