class Shape {
    constructor(type, side1 = null, side2 = null, side3 = null) {
        this.type = type
        this.side1 = side1
        this.side2 = side2
        this.side3 = side3
    }

    perimeterFig() {
        switch (this.type) {
            case 'circle':
                return `${this.type} perimeter = ${2 * Math.PI * this.side1}` 
            case 'rectangle':
            case 'square':
                return `${this.type} perimeter = ${this.side1 + this.side2}`
            case 'triangle':
                return `${this.type} perimeter = ${this.side1 + this.side2 + this.side3}`
        }
    }

    squareFig() {
        switch (this.type) {
            case 'circle':
                return `${this.type} square = ${Math.PI * Math.pow(this.side1, 2)}` 
            case 'rectangle':
            case 'square':
                return `${this.type} square = ${this.side1 * this.side2}`
            case 'triangle':
                let p = (this.side1 + this.side2 + this.side3)/2 
                return `${this.type} square = ${Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3))}`
        }
    }
}

let circle = new Shape('triangle', 5, 7, 8)
console.log(circle.squareFig())