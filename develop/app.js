const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
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
            createEmployee();
        });

    }else{
        console.log("You must be a manager to continue");
    }

});


}

function createEmployee(){
    return inquirer.prompt([
        {
            type: "list",
            message: "What type of employee would you like to add?",
            choices: ["Engineer", "Intern", "Return"],
            name:"employeeNew"
        }
    ]).then(function(response){
        if(response.employeeNew === "Engineer"){
            createEngineer();
        }else if(response.employeeNew === "Intern"){
            createIntern();
        }else{
            console.log("Stopped creating new employee.");
            console.log(team);
            const html = render (team);
            fs.writeFile(outputPath, html, function(err){
                if (err) throw err;
            });
        }
    });
}

function createEngineer(){
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your new Engineer's Name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your new Engineer's id?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your new Engineer's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your new Engineer's github?",
            name: "github"
        }
    ]).then(function(response){
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        team.push(engineer);
        console.log(engineer);
        createEmployee();
    });
}

function createIntern(){
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your new Intern's Name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your new Intern's id?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your new Intern's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What school is your new Intern currently enrroled in?",
            name: "school"
        }
    ]).then(function(response){
        const intern = new Intern(response.name, response.id, response.email, response.school);
        team.push(intern);
        console.log(intern);
        createEmployee();
    });
}

createMgmt();
