class Shape {
    constructor (color) {
        this.color = "";
    }
     setColor(color) {
        this.color = color;
     }
}

class Triangle extends Shape {
    render () {
        return `<polygon fill="${this.color}" points="0,0 12,0 6,12" />`
    }
}

class Circle extends Shape {
    render () {
        return `<circle cx="5" cy="5" r="5" fill="${this.color}"/>`
    }
}

class Square extends Shape {
    render () {
        return `<rect width="10" height="10" fill="${this.color}"/>`
    }
};

module.exports = {Triangle,Circle,Square};