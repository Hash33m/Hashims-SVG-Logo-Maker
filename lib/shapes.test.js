const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  test('Should render a red circle', () => {
    const shape = new Circle();
    shape.setColor('red');
    expect(shape.render()).toEqual(`<circle cx='150' cy='100' r='80' fill='red'/>`);
  });


});

describe('Triangle', () => {
  test('Should render a green triangle', () => {
    const shape = new Triangle();
    shape.setColor('green');
    expect(shape.render()).toEqual(`<polygon points='160,10 290,200 10,200' fill='green'/>`);
  });

  
});

describe('Square', () => {
  test('Should render a blue square', () => {
    const shape = new Square();
    shape.setColor('blue');
    expect(shape.render()).toEqual(`<rect x='50' height='200' width='200' fill='blue'/>`);
  });
});
