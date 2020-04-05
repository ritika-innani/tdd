import {expect} from "chai";
import {PrimeFactors} from "../../src/functional/PrimeFactors";

function factorsAssert(n: number, expectedResult:Array<number>) {
    it("should assert that factors of " + n + " = " + expectedResult, () => {
        expect(PrimeFactors.factorsOf(n)).to.deep.equal(expectedResult);
    })
}

describe("Prime factors", ()=>{
    // it("should assert that factors of 1 = []", () => {
    //     expect(PrimeFactors.factorsOf(1)).to.deep.equal([]);
    // })
    //
    // it("should assert that factors of 2 = [2]", () => {
    //     expect(PrimeFactors.factorsOf(2)).to.deep.equal([2]);
    // })
    //
    // it("should assert that factors of 3 = [3]", () => {
    //     expect(PrimeFactors.factorsOf(3)).to.deep.equal([3]);
    // })

    factorsAssert(1, []);
    factorsAssert(2, [2]);
    factorsAssert(3, [3]);
    factorsAssert(4, [2, 2]);
    factorsAssert(27, [3, 3, 3]);
    factorsAssert(2310, [2, 3, 5, 7, 11]);
    factorsAssert(2*2*3*5*7*7*11*13, [2, 2, 3, 5, 7, 7, 11, 13]);
});
