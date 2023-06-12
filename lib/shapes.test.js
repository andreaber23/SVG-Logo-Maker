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
        '<circle cx="8" cy="8" r="8" fill="green"/>'
      );
    });
  });

  describe("Square", () => {
    test("square with yellow background", () => {
      const shape = new Square();
      shape.setColor("yellow");
      expect(shape.render()).toEqual(
        '<rect width="10" height="10" fill="yellow"/>'
      );
    });
  });