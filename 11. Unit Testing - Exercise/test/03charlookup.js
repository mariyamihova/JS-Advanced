function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}
let expect = require('chai').expect;
describe("Look up char by given index", function() {
    it("Should return undefined if the first parameter is not a string", function () {
        expect(lookupChar(13,0)).to.be.equal(undefined);
    });
    it("Should return undefined if the second parameter is not a number", function () {
        expect(lookupChar("some text","text")).to.be.equal(undefined);
    });
    it("Should return undefined if the second parameter is a floating point number", function () {
        expect(lookupChar("some text",3.15)).to.be.equal(undefined);
    });
    it("Should return incorrect index if the second parameter is a negative number", function () {
        expect(lookupChar("some text",-1)).to.be.equal("Incorrect index");
    });
    it("Should return incorrect index if first parameter length < given index", function () {
        expect(lookupChar("some text",13)).to.be.equal("Incorrect index");
    });
    it("Should return incorrect index if first parameter length = given index", function () {
        expect(lookupChar("pesho",5)).to.be.equal("Incorrect index");
    });
    it("Should return correct value", function () {
        expect(lookupChar("pesho",0)).to.be.equal("p");
    });
    it("Should return correct value", function () {
        expect(lookupChar("pesho",3)).to.be.equal("h");
    });
});