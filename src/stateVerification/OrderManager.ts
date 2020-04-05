import {Order} from "./Order";

export class OrderManager{
    public static orders: Array<Order> = [];

    public static placeOrder(product: string) {
        let order = new Order(product);
        this.orders.push(order);
        return order;
    }
}
