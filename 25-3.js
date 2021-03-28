const userInfo = {
    firstName: "Mehnaz",
    lastName: "Shahrima",
    salary: 15000,
    fullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}

const heroPerson = {
    firstName: "Hero",
    lastName: "Balam",
    salary: 25000
}


const specialPerson = {
    firstName: "Special",
    lastName: "Golam",
    salary: 12000
}

// console.log(userInfo.chargeBill(500));
const heroPersonBill = userInfo.chargeBill.bind(heroPerson);
heroPersonBill(2000);
console.log(heroPerson.salary);

const specialPersonBill = userInfo.chargeBill.bind(specialPerson);
specialPersonBill(2000);
console.log(specialPerson.salary);
