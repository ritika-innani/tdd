import {expect} from "chai";
import {UserController} from "../../src/implementationDetails/UserController";


describe("User Controller: ", ()=>{
    it("should return full name", ()=> {
        expect(UserController.setFullName("Ritika", "Innani")).to.equal("Ritika Innani");
    })
});
