// Find max value from an array
function findMax(numbers){
    var max = 0;
    for(var i=0; i<numbers.length; i++){
        var element = numbers[i];
        if(element>max){
            max = element;
        }
    }
    return max;
}
var arr = [1, 6, 12, 5, 1, 10, -100, -20];
var result = findMax(arr);
console.log(result);