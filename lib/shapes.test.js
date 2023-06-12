const {Triangle, Circle, Square} = require ('./shapes')

describe("Triangle", () => {
    test("triangle with blue background", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  });

  describe("Circle", () => {
    test("circle with green background", () => {
      const shape = new Circle();
      shape.setColor("green");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="100" r="80" fill="green"/>'
      );
    });
  });

  describe("Square", () => {
    test("square with yellow background", () => {
      const shape = new Square();
      shape.setColor("yellow");
      expect(shape.render()).toEqual(
        '<rect x="50" height="200" width="200" fill="yellow"/>'
      );
    });
  });