class Employee {
    constructor(name, id, email) {
      if (!id) {
        throw new Error("You are missing the id.");
      }
      if (!id) {
        throw new Error("You are missing the title.");
      }
      if (!email) {
        throw new Error("You are missing the email.");
      }
      this.name = name;
      this.id = id;    
      this.email = email; 
     // this.role = role;  
    }
    // methods for employee getName() getId() getEmail() getRole()
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }
  }

  module.exports = Employee;