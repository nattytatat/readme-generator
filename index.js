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
            validate: function (input) {
                if (input) {
                    return true;
                } else {
                    console.log('This field cannot be left blank')
                    return false;
                }
            },
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
            type: 'rawlist',
            name: 'license',
            message: 'Choose your license type',
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

        const addMarkdown = generateMarkdown(data);

        fs.writeFile('./dist/GENERATEDREADME.md', addMarkdown, (err) =>
            err ? console.log(err) : console.log('Your Generated README has been successfully generated!'));
    })

}

// function call to initialize program
init();
