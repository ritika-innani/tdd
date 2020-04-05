import {expect} from "chai";
import {OrderManager} from "../../src/stateVerification/OrderManager";
import {Order} from "../../src/stateVerification/Order";

describe("Test Order Manager", () => {
    it("should should place the order correctly", ()=> {
        let order: Order = OrderManager.placeOrder("Hand Sanitizer");
        expect(OrderManager.orders.length).to.equal(1);
        expect(order.status).to.equal("OPEN")
    })
});
