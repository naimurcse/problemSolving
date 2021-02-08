const normalPerson = {
    firstName: "Mehnaz",
    lastName: "Shahrima",
    salary: 25000,
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    },
    savingMoney: function(totalCost){
        const savingTotal = this.salary - totalCost;
        return savingTotal;
    }
}

console.log(normalPerson.fullName());
console.log(normalPerson.savingMoney(5000));