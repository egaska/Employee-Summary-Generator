const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//const for output HTML file. 
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//Array to hold new team members.
const team = [];


addTeam();

function addTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "employeeType",
            message: "What kind of employee would you like to add?",
            choices: ["Manager", "Engineer", "Intern"]
        }])
        //adds the variable question based on employee type
        .then(function (data) {
            let varQuestion = "";
            if (data.employeeType === "Engineer") {
                varQuestion = "Github Username";
                employeeType = "Engineer";
            }
            else if (data.employeeType === "Manager") {
                varQuestion = "office number";
                employeeType = "Manager";
            }
            else {
                varQuestion = "school"
                employeeType = "Intern";
            }
            //prompt for employee information
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is their name?",
                    name: "name"
                },
                {
                    type: "input",
                    message: "What is their ID?",
                    name: "id"
                },
                {
                    type: "input",
                    message: "What is their email?",
                    name: "email"
                },
                {
                    type: "input",
                    message: "What is their " + varQuestion + "?",
                    name: "varQuestion"
                },
                {
                    type: "confirm",
                    message: "Would you like to make another employee?",
                    name: "newMember"
                }])
                //Creates new employee and pushes it to the team array
                .then(function (data) {
                    if (employeeType === "Engineer") {
                        let newEmployee = new Engineer(data.name, data.id, data.email, data.varQuestion);
                        team.push(newEmployee);
                        console.log(team);
                    }
                    else if (employeeType === "Manager") {
                        let newEmployee = new Manager(data.name, data.id, data.email, data.varQuestion);
                        team.push(newEmployee);
                        console.log(team);
                    }
                    else {
                        let newIntern = new Intern(data.name, data.id, data.email, data.varQuestion);
                        team.push(newIntern);
                        console.log(team);
                    }
                    //If statement determines if the addTeam() runs again
                    console.log(data.newMember);
                    if (data.newMember === true) {
                        console.log(team);
                        addTeam();
                    }
                    else {
                        console.log(team);
                        createHTML(render(team));
                    }

                })
        })
}

function createHTML(html) {
        fs.mkdirSync(OUTPUT_DIR)
    fs.writeFileSync(outputPath, html);
}

