const arr1 = [10,254,32];

const total = (arr) =>{   
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        result += element;
    }
    return result;
}

console.log(total(arr1));