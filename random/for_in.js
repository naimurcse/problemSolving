const student = {
    name:"Mehnaz",
    school:"BAF Shaheen School",
    weight: 14
}

console.log(student);


// using for/in for an object.
for (const key in student) {
    // console.log(key);
    // console.log(student[key]);
    console.log(`${key} : ${student[key]}`);
}