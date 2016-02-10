// LICENSE : MIT
"use strict";
import DomainEventPublisher from "../DomainEventPublisher";
// The Command Model publishes Domain Events.
export default class ShoppingCart {
    constructor({id, cartItems, taxPercentage, shippingAndHandling}) {
        this.id = id;
        this.cartItems = cartItems || [];
        this.taxPercentage = taxPercentage;
        this.shippingAndHandling = shippingAndHandling;
    }

    // Command methods
    addItem(cartItem) {
        this.cartItems.push(cartItem);
        DomainEventPublisher.publish('CART_ITEM_ADDED', {
            cartId: this.id,
            sku: cartItem.sku,
            price: cartItem.price,
            quantity: cartItem.quantity
        });
    }

    removeItem(cartItem) {
        this.cartItems = this.cartItems.filter((item) => item.sku !== cartItem.sku);
        DomainEventPublisher.publish('CART_ITEM_REMOVED', {
            cartId: this.id,
            sku: cartItem.sku,
            price: cartItem.price,
            quantity: cartItem.quantity
        });
    }
}