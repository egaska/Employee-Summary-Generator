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


managerPrompts();
// addTeam();

// function addTeam() {
//     inquirer.prompt([
//         {
//             type: "checkbox",
//             name: "employeeType",
//             message: "What kind of employee would you like to add?",
//             choices: ["Engineer", "Intern"]
//         }])
//         .then(function (data) {
//             if (data.employeeType === "Engineer") {
//                 engineerPrompts()
//                     .then(function (data) {
//                         let newTeam = new Engineer(data.name, data.id, data.email, data.github);
//                         team.push(newTeam);
//                     })
//             }
//             else {
//                 internPrompts()
//                     .then(function (data) {
//                         let newTeam = new Intern(data.name, data.id, data.email, data.school);
//                         team.push(newTeam);
//                     })
//             }

//             inquirer.prompt([
//                 {
//                     type: "confirm",
//                     name: "newEmployee",
//                     message: "Would you like to add another employee?"
//                 }
//             ])
//                 .then(function (data) {
//                     if (data.newEmployee === true) {
//                         addTeam();
//                     }
//                     else {
//                         console.log(team);
//                     }
//                 })
//         })
// }



// // After the user has input all employees desired, call the `render` function (required
// // above) and pass in an array containing all employee objects; the `render` function will
// // generate and return a block of HTML including templated divs for each employee!

// // After you have your html, you're now ready to create an HTML file using the HTML
// // returned from the `render` function. Now write it to a file named `team.html` in the
// // `output` folder. You can use the variable `outputPath` above target this location.
// // Hint: you may need to check if the `output` folder exists and create it if it
// // does not.

// // HINT: each employee type (manager, engineer, or intern) has slightly different
// // information; write your code to ask different questions via inquirer depending on
// // employee type.

// // HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// // and Intern classes should all extend from a class named Employee; see the directions
// // for further information. Be sure to test out each class and verify it generates an
// // object with the correct structure and methods. This structure will be crucial in order
// // for the provided `render` function to work! ```



// function engineerPrompts() {
//     return inquirer.prompt([
//         {
//             type: "input",
//             name: "name",
//             message: "What is the engineer's name?"
//         },
//         {
//             type: "input",
//             name: "id",
//             message: "What is their ID?"
//         },
//         {
//             type: "input",
//             name: "email",
//             message: "What is their email?"
//         },
//         {
//             type: "input",
//             name: "github",
//             message: "What is their GitHub username?"
//         },
//     ])
// }

// function internPrompts() {
//     return inquirer.prompt([
//         {
//             type: "input",
//             name: "name",
//             message: "What is the intern's name?"
//         },
//         {
//             type: "input",
//             name: "id",
//             message: "What is their ID?"
//         },
//         {
//             type: "input",
//             name: "email",
//             message: "What is their email?"
//         },
//         {
//             type: "input",
//             name: "school",
//             message: "What school do they attend?"
//         }
//     ])
// };

function managerPrompts() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is their ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is their email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is their office number?"
        }
    ]).then(function (data) {
        let newManager = new Manager(data.name, data.id, data.email, data.officeNumber);
        team.push(newManager);
        console.log(team);
    })

}

