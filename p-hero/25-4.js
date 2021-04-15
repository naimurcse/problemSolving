const userInfo = {
    firstName: "Mehnaz",
    lastName: "Shahrima",
    salary: 15000,
    fullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tax, tips){
        console.log(this);
        this.salary = this.salary - amount - tax - tips;
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

const badPerson = {
    firstName: "Shekh",
    lastName: "Zia",
    salary: 8000
}
// console.log(userInfo.chargeBill(500));

const heroPersonBill = userInfo.chargeBill.bind(heroPerson);
heroPersonBill(2000);
console.log(heroPerson.salary);

userInfo.chargeBill.call(specialPerson, 2000,20,30);
console.log(specialPerson.salary);


userInfo.chargeBill.apply(badPerson, [1000,15,25]);
console.log(badPerson.salary);
