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


// forEach
const javascript = {
    name:"JavaScript",
    libraries:["React","Angular","Vue","jQuery"],
    library: function() {
        this.libraries.forEach(function(item){
            console.log(item);
        });
    }
}

javascript.library();

