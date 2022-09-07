// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
        {
          type: 'input',
          name: 'title',
          message: 'What is the name of your project?', 
          validate: (value) => {if(value) {return true} else { return 'Please enter title of project.'}},
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project.',
            validate: (value) => {if(value) {return true} else { return 'Enter a description of your project.'}},
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide a detailed installation instruction.',
            validate: (value) => {if(value) {return true} else { return 'Enter installation instructions.'}},
        },
        {
            type: 'input', 
            name: 'usage',
            message: 'How do you use your project?',
            validate: (value) => {if(value) {return true} else { return 'Enter usage instructions.'}},
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'How can can we contribute to your project?',
            validate: (value) => {if(value) {return true} else { return 'Enter instructions to contribute to project.'}},
        },
        {
            type: 'list',
            name: 'license',
            choices: ['Apache License 2.0', 
            'GNU General Public License v3.0', 
            'MIT License', 
            'BSD 3-Clause "New" or "Revised" License"', 
            'Boost Software License 1.0', 
            'Creative Commons Zero v1.0 Universal', 
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?',
            validate: (value) => {if(value) {return true} else { return 'Please enter a Github username.'}},
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address',
            validate: (value) => {if(value) {return true} else { return 'Please enter an email address.'}},
        },
    ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Your README.md file is ready!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
