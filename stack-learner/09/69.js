// Pure Function
// It returns the same result if given the same arguments.
function sqr(n) {
    return n*n;
}

result1 = sqr(5);
result2 = sqr(5);
result3 = sqr(5);

console.log(result1);
console.log(result2);
console.log(result3);


// It does not cause any observable side effects
// input value change
var n = 2;
function change(){
    n = 99;
}

change();
console.log(n);

// input object values change
var points = {
    x: 100,
    y: 500
}

function pointValue(points) {
    console.log(points);
    points.x = 200;
    points.y = 800;
    console.log(points);
} 

pointValue(points);


