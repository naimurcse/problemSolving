let bouns = 20;

function sum(first, second){
    let result = first + second + bouns;

    if(bouns>9){
        var mood = "Happy";
        console.log(mood);
    }
    console.log(mood);
    return result;
}

const output = sum(7,3);
console.log(output);