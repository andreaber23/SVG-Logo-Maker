const inquirer = require ('inquirer');
const fs = require("fs");
const {Triangle, Circle, Square} = require('./lib/shapes')

class SvgLogo{
    constructor(){
        this.svgString = ""
        this.shapeEl = ""
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> ${this.shapeEl}${this.svgString} </svg>`
    };
    setTextEl(color, text) {
        this.svgString = `<text x="150" y="125" font-size="40" text-anchor="middle" fill="${color}">${text}</text>`;
      };
    setShapeEl(shape){
        this.shapeEl = shape.render()
    }
}

function createSvgFile(data) {
    fs.writeFile('logo.svg', data, (err) => {
      if (err) {
        console.error('Error creating SVG file:', err);
      } else {
        console.log('Generated logo.svg');
      }
    });
  }

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
            type: "list",
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

promptUser().then((answers) => {
    const { text, textColor, shape, shapeColor } = answers;

    const logo = new SvgLogo();
    logo.setTextEl(textColor, text);

  switch (shape) {
    case 'Circle':
      logo.setShapeEl(new Circle(shapeColor));
      break;
    case 'Square':
      logo.setShapeEl(new Square(shapeColor));
      break;
    case 'Triangle':
      logo.setShapeEl(new Triangle(shapeColor));
      break;
    default:
      console.log('Invalid shape');
      return;
  }
  const svgContent = logo.render();
  createSvgFile(svgContent);
}).catch((err) => {
  console.error('Error:', err);
});
