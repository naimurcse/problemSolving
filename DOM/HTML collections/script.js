let collection = document.getElementsByClassName("item");
// console.log(collection);


// using for/of iteration
for (let item of collection) {
    console.log(item);
}



console.log("-------------------------");

// Array.from() method converts to an array.
// console.log(Array.from(collection));

let newArr = Array.from(collection);
newArr.forEach(item => {
    console.log(item);
});

