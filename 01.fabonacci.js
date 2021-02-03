// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

//  Fibonacci Iterative

function fibonacciIterative(num){
    var arr = [1, 1];
    for(var i=2; i<=num; i++){
        // var element = arr[i];
        var element = arr[i-1] + arr[i-2];
        arr.push(element);
    }
    return arr;
}

console.log(fibonacciIterative(10));





// Fibonacci Recursive

function fibonacciRecursive(number){
    var arr = [1, 1]; 
    if(number == 0){
        return [1];
    }
    if(number == 1){
        return [1, 1];
    }
    else{

        var element = fibonacciRecursive(number-1);
        var nextElement = element[number-1] + element[number-2];
        element.push(nextElement);
        return element;
    }
}

var result = fibonacciRecursive(10);
console.log(result);