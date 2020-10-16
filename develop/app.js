const Manager = require("./lib/manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let team = [];

function createMgmt (){
    return inquirer.prompt([
        {
        type: "list",
        message: "Are you a manager?",
        choices: ["Yes","No"],
        name: "init"
    }
]).then(function (response) {
    if (response.init === "Yes"){
        return inquirer.prompt([
            {
                type: "input",
                message:"What is your Name?",
                name: "name"
            },
            {
                type: "input",
                message:"What is your ID nummber?",
                name: "id"
            },
            {
                type: "input",
                message:"What is your Email?",
                name: "email"
            },
            {
                type: "input",
                message:"What is your office number?",
                name: "office"
            },
        ]).then(function(response){
            const manager = new Manager(response.name, response.id, response.email, response.office);
            team.push(manager);
            console.log(manager);
            CreateEmployee();
        });

    }else{
        console.log("You must be a manager to continue");
    }

});


}

function CreateEmployee(){
    
}


createMgmt();
