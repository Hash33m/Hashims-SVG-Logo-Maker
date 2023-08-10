export class Shape {
  constructor() {
    this.color = '';
  }

  setColor(color) {
    this.color = color;
  }
}

export class Circle extends Shape {
  render() {
    return `<circle cx='150' cy='100' r='80' fill='${this.color}'/>`;
  }
}

export class Triangle extends Shape {
  render() {
    return `<polygon points='160,10 290,200 10,200' fill='${this.color}'/>`;
  }
}

export class Square extends Shape {
  render() {
    return `<rect x='50' height='200' width='200' fill='${this.color}'/>`;
  }
}

//module.exports = { Circle, Triangle, Square };
