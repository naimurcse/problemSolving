
function addNumbers(){
    console.log(arguments);
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum = sum + element;
    }
    console.log(sum);
}

addNumbers(3,5,12,15);