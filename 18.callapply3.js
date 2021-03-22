const normalPerson = {
    firstName: "Mehnaz",
    lastName: "Shahrima",
    salary: 25000,
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    },
    chargeBill: function(amount, tax){
        console.log(this);
        this.salary = this.salary - amount - tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName: "Shakib",
    lastName: "Khan",
    salary: 15000
}

const minister ={
    firstName: "Prince",
    lastName: "Joy",
    salary: 50000
}

const primeMinister ={
    firstName: "Shekh",
    lastName: "Hasina",
    salary: 65000
}

// Bind
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(1000, 10);
console.log(heroPerson.salary);

// Call
normalPerson.chargeBill.call(minister, 14000, 10);   // Need comma for .call
console.log(minister.salary);

// Apply
normalPerson.chargeBill.apply(primeMinister, [25000, 250]);    // Need array for .apply
console.log(primeMinister.salary);


console.log(normalPerson.salary);

