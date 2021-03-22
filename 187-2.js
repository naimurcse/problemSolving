

price = [5, 85, 89, 4, 2];
// evenify_all(nums);

age = [2, 4, 6, 7, 9];
// evenify_all(age);

function evenify(num){
    if(num % 2 == 0){
        result = num;
    }
    else{
        result = num*2;
    }

    return result;
}


function evenify_all(nums){
    new_arraw = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const value = evenify(num);
        new_arraw.push(value);
    }
    return new_arraw;
}

var output = evenify_all(price);
console.log(output);