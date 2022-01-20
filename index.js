//node modules
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateTeam = require("./src/page-template.js");

//lib modules
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');




teamArray = [];


function initPage() {
    


    function createTeam () {
        inquirer.prompt([{
          type: "list",
          message: "What type of employee would you like to add to your team?",
          name: "addEmployeePrompt",
          choices: ["Manager", "Engineer", "Intern", "No more team members are needed."]
        }]).then(function (userInput) {
          switch(userInput.addEmployeePrompt) {
            case "Manager":
              addManager();
              break;
            case "Engineer":
              addEngineer();
              break;
            case "Intern":
              addIntern();
              break;
    
            default:
              htmlBuilder();
          }
        })
      }

function addManager() {
    inquirer.prompt ([
      
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?"
      },
  
      {
        type: "input",
        name: "managerId",
        message: "What is the manager's employee ID number?"
      },
  
      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email address?"
      },
  
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the manager's office number?"
      }
  
    ]).then(answers => {
      const manager = new Manager(answers.ManagerName, answers.ManagerId, answers.ManagerEmail, answers.ManagerOfficeNumber);
      teamArray.push(manager);
      createTeam();
    });
  
  }


function addEngineer() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?"
      },

      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's employee ID number?" 
      },

      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email address?"
      },

      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's GitHub username?"
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.EngineerName, answers.EngineerId, answers.EngineerEmail, answers.EngineerGithub);
      teamArray.push(engineer);
      createTeam();
    });

  }

  function addIntern() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?"
      },

      {
        type: "input",
        name: "internId",
        message: "What is the intern's employee ID number?" 
      },

      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email address?"
      },

      {
        type: "input",
        name: "internSchool",
        message: "What school does the intern attend?"
      }

    ]).then(answers => {
      const intern = new Intern(answers.InternName, answers.InternId, answers.InternEmail, answers.InternSchool);
      teamArray.push(intern);
      createTeam();
    });

  }

  function htmlBuilder () {
    console.log("Team created!")

    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")

}

createTeam();

}

initPage();







