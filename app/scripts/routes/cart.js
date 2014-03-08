App.CartRoute = Ember.Route.extend({
  model: function () {
    var cartId = this.controllerFor("application").get("cartId")
    var cart = this.store.find("cart", cartId);
    return cart;
  }
})
