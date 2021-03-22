nums = [5, 85, 89, 4, 2];
evenify_all(nums);

age = [2, 4, 6, 7, 9];
evenify_all(age);


function evenify_all(nums){
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(num % 2 == 0){
            console.log(num + " is a even number");
        }
        else{
            console.log(num + " is a odd number");
        }
    }
}