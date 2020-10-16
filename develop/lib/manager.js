const Employee = require("./employee");
class Manager extends Employee {
    constructor(name, id, email, office) {
      super(name, id, email);
      this.office = office;
    }

    // method getOfficeNumber() getRole() // Overridden to return 'Engineer'
    getOfficeNumber(){
        return this.office;
    }
    //override
    getRole(){
        return "Manager";
    }
}  
module.exports = Manager;