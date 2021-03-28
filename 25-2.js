const userInfo = {
    firstName: "Mehnaz",
    lastName: "Shahrima",
    salary: 15000,
    fullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}

console.log(userInfo);
userInfo.fullName();

console.log(userInfo.chargeBill(500));