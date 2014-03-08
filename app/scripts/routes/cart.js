App.CartRoute = Ember.Route.extend({
  actions: {
    removeItemFromCart: function (item) {
      items = this.controllerFor("cart").get("model").get("items")
      items.removeObject(item);
      item.destroyRecord();
    }
  },
  model: function () {
    var cart = this.store.find("cart", 1);
    return cart;
  }
})
