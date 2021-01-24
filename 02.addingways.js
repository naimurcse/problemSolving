
// Add three variable value
function add(num1,num2,num3){
    var sum = num1 + num2 + num3;
    return sum;
}
var result = add(5,4,1);
console.log(result);



// Add values from an array
function add2(numbers){
    var sum = 0;
    for(var i=0; i<numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var arr = [10,5,1];
var result = add2(arr);
console.log(result);


// Add positive values from an array
function add3(numbers){
    var sum = 0;
    for(var i=0; i<numbers.length; i++){
        var element = numbers[i];
        if(element>0){
            sum = sum + element;
        }
    }
    return sum;
}
var arr = [1, 6, 10, 5, 1, 10, -100, -20];
var result = add3(arr);
console.log(result);