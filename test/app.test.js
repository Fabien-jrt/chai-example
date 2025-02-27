const Cube = require('../src/app').Cube;
const Triangle = require('../src/app').Triangle;
const expect = require('chai').expect;

describe('Testing the Cube Functions', function() {
    it('1. The side length of the Cube', function(done) {
        let c1 = new Cube(2);
        expect(c1.getSideLength()).to.equal(2);
        done();
    });
    
    it('2. The surface area of the Cube', function(done) {
        let c2 = new Cube(5);
        expect(c2.getSurfaceArea()).to.equal(150);
        done();
    });
    
    it('3. The volume of the Cube', function(done) {
        let c3 = new Cube(7);
        expect(c3.getVolume()).to.equal(343);
        done();
    });
    
});

describe('Testing the Trigangle function', function() {
    it('The area of the Triangle', function(done) {
        let triangle = new Triangle(1, 20, 30);
        expect(triangle.getArea()).to.equal(252);
        done();
    });
    it('The side length of the Triangle', function(done) {
        let triangle = new Triangle(1, 20, 30);
        expect(triangle.getSideLength(0)).to.equal(20);
        expect(triangle.getSideLength(1)).to.equal(30);
        expect(triangle.getSideLength(2)).to.equal(26);
        done();
    });
    it('The perimeter of the Triangle', function(done) {
        let triangle = new Triangle(1, 20, 30);
        expect(triangle.getPerimeter()).to.equal(76);
        done();
    });
    it('The height of a side of the Triangle', function(done) {
        let triangle = new Triangle(1, 20, 30);
        expect(triangle.getHeight(0)).to.equal(17);
        expect(triangle.getHeight(1)).to.equal(25);
        expect(triangle.getHeight(2)).to.equal(19);
        done();
    })
});