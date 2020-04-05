import {expect} from "chai";
import {PrimeFactors} from "../src/PrimeFactors";

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
    factorsAssert(5, [5]);
    factorsAssert(6, [2, 3]);
    factorsAssert(7, [7]);
    factorsAssert(8, [2, 2, 2]);
});
