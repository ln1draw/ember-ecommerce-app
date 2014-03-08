App.ProductRoute = Ember.Route.extend({
  actions: {
    addToCart: function (product) {
      cart = this.controllerFor("cart").get("model")
      item = this.store.createRecord("item", {cart: cart, product: product});
      cart.get("items").then(function (items) {
        items.pushObject(item)
      })
      this.transitionTo("cart")
    }
  },
  setupController: function (controller, model) {
    this.controllerFor("cart").set("model", this.store.find("cart", 1));
    controller.set("model", model)
  },
  model: function (params) {
    return this.store.find("product", params.product_id);
  }
})

