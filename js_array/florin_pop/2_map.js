
// Part One

const numbers = [2,4,5,8,10];

const doubleValue = numbers.map(double);

function double(value, index, arr){
    return value * 2;
}

console.log(numbers);
console.log(doubleValue);

// Part Two
const price = [15,5,5,5];

const indexMultiplyPrice = price.map(multiplyIndex);

function multiplyIndex(amount, index, arr){
    return amount * index;
}

console.log(indexMultiplyPrice);


// Part Three
const value = [15,5,5,5];

const indexMultiplyValue = value.map((amount, index, arr) =>{
    return amount * index;
});

console.log(indexMultiplyValue);


// Part Four
const products = [
    {
        name: 'laptop',
        price: 1000,
        count: 5
    }, {
        name: 'Desktop',
        price: 1500,
        count: 7
    }, {
        name: 'iPhone',
        price: 5200,
        count: 2
    }
]

console.log(products);

products.forEach(product => {
    console.log(product);
    console.log(product.name);
});


const productsPrice = products.map((value, index, arr) =>{
    return value;
});

console.log(productsPrice);