function factorial(num){
    let i = 1;
    let result = 1;
    while(i<num){
        result *= i;
        i++;
    }
    console.log(result);
}

factorial(6);