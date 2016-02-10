// LICENSE : MIT
"use strict";
// A child of the Aggregate
export default class CartItem {
    constructor({sku, description, price, quantity}) {
        this.sku = sku;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }
}