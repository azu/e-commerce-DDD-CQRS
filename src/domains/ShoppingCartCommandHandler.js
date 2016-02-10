// LICENSE : MIT
"use strict";
// This Command Handler maps Commands to command methods ShoppingCart.
export default class ShoppingCartCommandHandler extends CommandHandler {
    constructor(repo) {
        this.repo = repo;

        // Assumes commands implement subscribe that appends the handler to themselves.
        AddItemToCart.subscribe(this.addItemToCart);
        RemoveItemFromCart.subscribe(this.removeItemFromCart);
    }
    addItemToCart(payload) {
        var cart = this.repo.find(payload.cartId);
        cart.addItem(payload.cartItem); // This publishes a Domain Event
    }
    removeItemToCart(payload) {
        var cart = this.repo.find(payload.cartId);
        cart.removeItem(payload.cartItem); // This publishes a Domain Event
    }
}
