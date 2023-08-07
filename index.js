const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('./lib/svg');
const { Circle, Triangle, Square } = require('./lib/shape');


inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color keyword (OR a hexadecimal number)'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose',
            choices: ['Circle', 'Square', 'Triangle']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color keyword (OR a hexadecimal number)'
        },
    ])

    .then((data) => {
        
        let shape;
        if (data.shape === 'Circle') {
            shape = new Circle
        }
        if (data.shape === 'Triangle') {
            shape = new Triangle
        }
        if (data.shape === 'Square') {
            shape = new Square
        }

        shape.setColor(data.shapeColor)
        const svg = new SVG;
        svg.setShape(shape)
        svg.setText(data.text, data.textColor)
        fs.writeFileSync('logo.svg', svg.render())
        console.log('Generated logo.svg');
    })


