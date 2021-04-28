function add(a,b,c){
    console.log(arguments);
    console.log("--------------------------");
    
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        console.log(element);
    }
    
    
    console.log("--------------------------");

    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        console.log(element);
        total += element;
    }
    console.log(`Total: ${total}`);
}

add(5,2,1);
// add();