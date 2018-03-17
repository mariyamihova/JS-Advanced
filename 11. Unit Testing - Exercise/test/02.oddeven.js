function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}
let expect = require('chai').expect;
describe("Odd or even length of string", function() {
    it("Should return undefined", function () {
        expect(isOddOrEven([])).to.be.equal(undefined);
    });
    it("Should return undefined", function () {
        expect(isOddOrEven({name: 'This is my name'})).to.be.equal(undefined);
    });
    it("Should return undefined", function () {
        expect(isOddOrEven(1)).to.be.equal(undefined);
    });
    it("Should return even", function () {
        expect(isOddOrEven('four')).to.be.equal("even");
    });
    it("Should return even", function () {
        expect(isOddOrEven('for')).to.be.equal("odd");
    });
});