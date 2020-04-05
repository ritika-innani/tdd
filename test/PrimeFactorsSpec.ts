import {expect} from "chai";
import {PrimeFactors} from "../src/PrimeFactors";

describe("Prime factors", ()=>{
    it("should get factors of given no.", () => {
        expect(PrimeFactors.factorsOf(1)).to.equal(1);
    })
});
