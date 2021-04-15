// Part One

const printName = function(name) {
    console.log(name);
}

printName('Mehnaz');



// Arrow function
const printName1 = name1 => console.log(name1);
printName1('Shahrima');


// Arrow function with one line mathematic instruction
const sum = (x,y) => x+y;
const result = sum(5,8);
console.log(result);


// // forEach using normal function
// const javascript = {
//     name:"JavaScript",
//     libraries:["React","Angular","Vue","jQuery"],
//     library: function() {
//         // console.log(this);
        
//         this.libraries.forEach(function(item){
//             // console.log(this);
//             console.log(`${this.name} loves ${item}`);
//         });
//     }
// }

// javascript.library();




// forEach using arrow function
const javascript = {
    name:"JavaScript",
    libraries:["React","Angular","Vue","jQuery"],
    library: function() {
        // console.log(this);
        
        this.libraries.forEach((item) => {
            console.log(this);
            // console.log(`${this.name} loves ${item}`);
        });
    }
}

javascript.library();


