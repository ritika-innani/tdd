export class Order {
    status: string;
    products: string[] = [];
    constructor(product: string) {
        this.products.push(product);
        this.status = "OPEN";
    }
}
