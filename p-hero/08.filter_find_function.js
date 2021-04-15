// const oldArray = [2,5,3,96,7,1];
// const newArray = oldArray.filter(x => x > 5);
// console.log(newArray);

// find()

// const oldArray = [2,5,3,7,96,1,8];
// const isThere = oldArray.find(x => x > 5);
// console.log(isThere);





// const students = [
//     {id: 21, name: "Mehnaz"},
//     {id: 25, name: "Shahrima"},
//     {id: 32, name: "Wasfia"},
//     {id: 45, name: "Mithu"},
//     {id: 56, name: "Shuvo"}
// ]

// const newArray = [];

// for(let i=0; i<students.length; i++){
    
//     const studentName = students[i].name;
//     newArray.push(studentName);
// }

// console.log(newArray);






const students = [
    {id: 21, name: "Mehnaz", mark: 80 },
    {id: 25, name: "Shahrima", mark: 85},
    {id: 32, name: "Wasfia", mark: 65},
    {id: 45, name: "Mithu", mark: 45},
    {id: 56, name: "Shuvo", mark: 40}
]

const sNameLangth = students.map(s => s.name.length) ;
console.log(sNameLangth);

const poorMark = students.filter(s => s.mark < 50) ;
console.log(poorMark);

const poorMarkOne = students.find(s => s.mark < 50) ;
console.log(poorMarkOne);
