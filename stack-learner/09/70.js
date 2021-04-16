// First Class Function

// 1. A function can be stored in a variable
// 2. A function can be stored in an array
// 3. A function can be stored in an object
// 4. We can create function as need.
// 5. We can pass function as an arguments.
// 6. We can return functions from another function.


// 1. A function can be stored in a variable
const sum = function add(a,b) {
    return a + b;
}

console.log(sum(5,9));


// 2. A function can be stored in an array

const arr = [];
arr.push(sum);
console.log(arr);
console.log(arr[0]);
console.log(arr[0](5,2));