const students = [
    {id:2, name: "Mehnaz"},
    {id:2.5, name: "Shahrima"},
    {id:3, name: "Wasfia"}
];

const names = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i].name;
    // console.log(element);
    names.push(element);
}
console.log(names);

