export class Product {
    id: number;
    imageUrl: string;
    productName: string;
    price: number;
    quantity: number;

    constructor() {
        this.id = 0;
        this.imageUrl = '';
        this.productName = '';
        this.price = 1;
        this.quantity = 1;
    }
}