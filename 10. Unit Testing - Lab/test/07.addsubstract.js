function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

let expect = require('chai').expect;
describe("createCalculator",function () {

    let calculator;
    beforeEach(function () {
        calculator=createCalculator();
    });
    it("should return 10 after add 5 and add 5')|", function() {
        calculator.add(5);
        calculator.add(5);
        expect(calculator.get()).to.be.equal(10);
    });
    it("Should return 15 after add 15, add 5, and subtract 5", function () {
        calculator.add(15);
        calculator.add(5);
        calculator.subtract(5);
        expect(calculator.get()).to.be.equal(15);
    });
    it("Should return 10.5 after add 5 and add 5", function () {
        calculator.add(5.5);
        calculator.add(5);
        expect(calculator.get()).to.be.equal(10.5);
    });
    it("Should return -5 after substract 10 and add 5", function () {
        calculator.subtract("10");
        calculator.add(5);
        expect(calculator.get()).to.be.equal(-5);
    });
    it("Should return 10 after add 5 and add 5", function () {
        calculator.add("5");
        calculator.add(5);
        expect(calculator.get()).to.be.equal(10);
    });
});
