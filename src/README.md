# Flow

1. Convert the ShoppingCart into a Command Model. It would not have any query methods, only command methods. It also has the extra responsibility to publish two Domain Events ('CART_ITEM_ADDED', 'CART_ITEM_REMOVED').
2. Create a Query Model for reading the shopping cart total (replacing the original .total() method). This Query Model can simply be a plain JavaScript object.

