// LICENSE : MIT
"use strict";
import DomainEventPublisher from "../DomainEventPublisher";
// This object acts as both the Query Processor and Event Subscriber.
export default class CartTotalStore {
    constructor() {
        // Holds Query Models in memory.
        this.totals = {};
        // Subscribe to events that allows this store to update its Query Models.
        DomainEventPublisher.subscribeTo('ITEM_ADDED_TO_CART', this.handleItemAdded.bind(this));
        DomainEventPublisher.subscribeTo('ITEM_REMOVED_FROM_CART', this.handleItemRemoved.bind(this));
    }

    // Query method
    forCart(cartId) {
        return {
            cartId: cartId,
            total: this.totals[id]
        };
    }

    // Methods to update Query Models.
    handleItemAdded({cartId: cartId, cartItem: cartItem}) {
        var total = this.totals[cartId] || 0;
        var newTotal = total + cartItem.price * cartItem.quantity;
        this.totals[cartId] = newTotal;
    }

    handleItemRemoved({cartId: cartId, cartItem: cartItem}) {
        var total = this.totals[cartId] || 0;
        var newTotal = total - cartItem.price * cartItem.quantity;
        this.totals[cartId] = newTotal;
    }
}