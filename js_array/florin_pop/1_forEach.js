// Part One
const numbers = [1,2,3,4,5,6];

numbers.forEach(items);

function items(item, index, arr){
    console.log(item);
}


// Part Two

const examMarks = [45,55,76,87,81];

examMarks.forEach((mark, index, arr) => {
    console.log(mark, index, arr);
});



// Part 3

let sum = 0;
examMarks.forEach(mark => {
    sum += mark;  //sum = sum + mark;
    return sum;
});
const average = sum/examMarks.length;
console.log(average);


// Part 3

const letters = ['a','b','a','b','z','c','d','a','d','d'];
let count = {};

letters.forEach(item => {
    // console.log(item);
    if(count[item]){
        count[item]++;
    }
    else{
        count[item] = 1;
    }
})

console.log(count);
