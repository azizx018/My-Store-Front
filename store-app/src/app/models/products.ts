export class Product {
    id: number;
    url: string;
    name: string;
    price: number;
    description: '';
    quantity: number = 0;


    constructor() {
        this.id = 0;
        this.url = '';
        this.name = '';
        this.price = 1;
        this.description = '';
        this.quantity = 0;

    }
}