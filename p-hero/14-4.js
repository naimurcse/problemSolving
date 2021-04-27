const isLeapYear = (year) =>{
    if (year%4 == 0) {
        if (year%100 == 0) {
            if (year%400 == 0) {     
                console.log(`${year} is leap year.`);
            }else{
                console.log(`${year} is not leap year.`);
            }
        }else{
            console.log(`${year} is leap year.`);
        }
    }else{
        console.log(`${year} is not leap year.`);
    }
}

isLeapYear(1992);
isLeapYear(2000);
isLeapYear(2020);
isLeapYear(2022);
isLeapYear(2023);
isLeapYear(2024);
isLeapYear(2025);