class Cube {
    constructor(length) {
        this.length = length;
    }
    
    getSideLength () {
        return this.length;
    }
    
    getSurfaceArea () {
        return (this.length * this.length) * 6;
    }
    
    getVolume () {
        return Math.pow(this.length,3);
    }
}

class Triangle {
    // angle in rad, length without specific unit
    constructor(angle, len1, len2) {
        this.angle = angle;
        this.len1 = len1;
        this.len2 = len2;
    }
    
    getArea() {
        return Math.round(0.5 * this.len1 * this.len2 * Math.sin(this.angle));
    }
    
    getSideLength(side) {
        if (side === 0)
            return this.len1;
        if (side === 1)
            return this.len2;
        // c = √b2 + a2 - 2ba·cos(C) = 25.52719
        return Math.round(Math.sqrt(Math.pow(this.len2, 2) + Math.pow(this.len1, 2) - 2 * this.len2 * this.len1 * Math.cos(this.angle))); 
    }
    
    getPerimeter() {
        return Math.round(this.len1 + this.len2 + this.getSideLength(2));
    }
}

module.exports = {
    Cube:Cube,
    Triangle:Triangle
}