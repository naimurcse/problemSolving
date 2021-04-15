function explain_callback(name, age, task){
    console.log('Hello ' + name);
    console.log('Your age: ' + age);
    task();
}

function washHand(){
    console.log("Wash your hand!");
}

function takeBath(){
    console.log("Let's take a bath!");
}

explain_callback('Mehnaz', 3, washHand);
explain_callback('Shahrima', 2.5, takeBath);





// function explain_callback(name, age, task){
//     console.log('Hello ' + name);
//     console.log('Your age: ' + age);
//     washHand();
// }

// function washHand(){
//     console.log("Wash your hand!");
// }

// function takeBath(){
//     console.log("Let's take a bath!");
// }

// explain_callback('Mehnaz', 3);
// explain_callback('Shahrima', 2.5);




// function explain_callback(name, age, task){
//     console.log('Hello ' + name);
//     console.log('Your age: ' + age);
// }

// explain_callback('Mehnaz', 3);
// explain_callback('Shahrima', 2.5);