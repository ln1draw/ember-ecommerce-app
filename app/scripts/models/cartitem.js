App.CartItem = DS.Model.extend({
  cart_id: DS.attr("integer"),
  item_id: DS.attr("integer"),
  quantity: DS.attr("integer"),
  cart: DS.belongsTo('cart', {async: true}),
  item: DS.belongsTo('item', {async: true})
});

App.Cart.FIXTURES = [
  {
    id: 1,
    cartId: 1,
    itemId: 1,
    quantity: 2
  }
]