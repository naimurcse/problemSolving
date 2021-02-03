// const mapArray = [2,5,9,8,4,3];
// const newArray = [];
// for(let i=0; i<mapArray.length; i++){
    //     let element = mapArray[i];
    //     element = element * element;
    //     newArray.push(element);
    // }
    // console.log(newArray);
    
    
// const mapArray = [2,5,9,8,4,3];
// const newArray = mapArray.map(function(value){
//     return value * value;
// })

// console.log(newArray);




// const mapArray = [2,5,9,8,4,3];
// const newArray = [];
// for(let i=0; i<mapArray.length; i++){
//     const element = mapArray[i] + 2;
//     newArray.push(element);
// }
// console.log(newArray);



const mapArray = [2,5,9,8,4,3];

const newArray = mapArray.map(function(value){
    return value + 2;
})

console.log(newArray);