const fs = require("fs");
// const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'Enter your Github username',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
        },
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your project',
        },
        {
            type: 'input',
            name: 'desc',
            message: 'Write a short description of your project',
        },
        {
            type: 'input',
            name: 'install',
            message: 'Explain how users should install this project',
            default: 'NPM init',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Explain how users can use your project',
            default: 'NPM install',
        },
        {
            type: 'checkbox',
            name: 'licence',
            message: 'Choose your licence type',
            choices: ['MIT', 'Apache', 'Creative Commons', 'GNU'],
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Please add contributors to the project',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please add test instructions',
            default: 'NPM test',
        },

    ])
};

// function to initialize program
function init() {
    questions().then((data) => {
        fs.writeFile('GENERATEDREADME.md', generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Your Generated README has been successfully generated!'));
    })

}

// function call to initialize program
init();
