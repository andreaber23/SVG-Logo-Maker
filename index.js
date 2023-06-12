const inquirer = require ('inquirer');
const fs = require("fs");
const {Triangle, Circle, Square} = require('./lib/shapes')

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message:"What text would you like to include in your logo? (Up to 3 letters)",
            name: "text",
        },
        {
            type: "input",
            message:"What color would you like for text to be?",
            name:"textColor",
        },
        {
            type: "input",
            message:"Choose what shape you would like for your logo",
            choices: ['Circle', 'Triangle', 'Square'],
            name: "shape",
        },
        {
            type: "input",
            message:"What shape's color would you like for your logo?",
            name:"shapeColor",
        },

        

    ])
};


