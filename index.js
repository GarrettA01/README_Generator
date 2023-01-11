// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const Markdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your Github username?",
      name: "user",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Write a brief description for your project.",
      name: "description",
    },
    {
      type: "input",
      message: "Prove installation instructions",
      name: "installation",
    },
    {
      type: "input",
      message: "How is your project used?",
      name: "usage",
    },
    {
      type: "checkbox",
      message: "What license would you like to put on your project?",
      name: "license",
      choices: ["None", "MIT", "GPLv2", "GPLv3", "IBM"],
    },
    {
      type: "input",
      message: "What command should be run to instal packages?",
      name: "installation",
    },
    {
      type: "input",
      message: "What command should be run to run tests?",
      name: "tests",
    },
    {
      type: "input",
      message: "What does a user need to know about contributing to your repo?",
      name: "contributions",
    },
  ]);
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
  promptUser().then((response) => {
    const create = Markdown.generateMarkdown(response);
    fs.writeFile("README.md", create, function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log("Successfulyy created README.md");
      }
    });
  });
};

// Function call to initialize app
init();
