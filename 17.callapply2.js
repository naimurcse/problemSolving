const normalPerson = {
    firstName: "Mehnaz",
    lastName: "Shahrima",
    salary: 25000,
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    },
    chargeBill: function(amount){
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}

const heroPerson = {
    firstName: "Shakib",
    lastName: "Khan",
    salary: 15000
}

const minister ={
    firstName: "Price",
    lastName: "Joy",
    salary: 50000
}

// normalPerson.chargeBill();
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(1000);
heroChargeBill(3000);
console.log(heroPerson.salary);
console.log(normalPerson.salary);