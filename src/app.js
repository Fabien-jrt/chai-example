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
        return Math.round(0.5 * this.len1 * this.len2 * Math.sin(this.angle))
    }
}

module.exports = {
    Cube:Cube,
    Triangle:Triangle
}