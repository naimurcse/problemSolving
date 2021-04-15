const students = [
    {id:2, name: "Mehnaz"},
    {id:5, name: "Shahrima"},
    {id:13, name: "Wasfia"}
];

const names = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i].name;
    // console.log(element);
    names.push(element);
}
console.log(names);

const studentName = students.map(s => s.name);
console.log(studentName);

const topper = students.filter( s => s.id < 10);
console.log(topper);


