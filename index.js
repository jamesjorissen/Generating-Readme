// added inquirer, fs and generateMarkdown as requirements
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions = [{
    type: "input",
    message: "Please list your Github username:",
    name: "username"
},
{
    type: "input",
    message: "What have you named your project?",
    name: "projectName"
},
{
    type: "input",
    message: "What are you calling your repository?",
    name: "repo"
},
{
    type: "input",
    message: "Describe your project",
    name: "projectDescription"
},
{
    type: "list",
    message: "If your project is licensed - by whom?",
    name: "license",
    choices: [
        "MIT",
        "Apache",
        "IBM",
        "The Perl License"
    ]
},
{
    type: "input",
    message: "What command installs dependencies?",
    name: "installDependencies"
},
    , {
    type: "input",
    message: "Is there any other information the user needs to know about this repository?",
    name: "usefulInformation"
},
{
    type: "input",
    message: "How can others contribute to this repository?",
    name: "contributions"
}

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            throw err;
        }
        console.log("Successful");
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(function ({
            username,
            project,
            repoName,
            projectDescription,
            license,
            installDependencies,
            usefulInformation,
            contributions }) {
            if (
                username !== "" &&
                email !== "" &&
                project !== "" &&
                repoName !== "" &&
                projectDescription !== "" &&
                license !== "" &&
                installDependencies !== "" &&
                usefulInformation !== "" &&
                contributions !== "") {

                writeToFile("README.md", generateMarkdown({
                    username,
                    project,
                    repoName,
                    projectDescription,
                    license,
                    installDependencies,
                    usefulInformation,
                    contributions
                }));
            }
            else {
                console.log("Please enter all information");
                init();
            }

            // function call to initialize program
            init();
