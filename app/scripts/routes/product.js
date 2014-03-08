App.ProductRoute = Ember.Route.extend({
  actions: {
    addToCart: function (product) {
      // After setting up the controller model I can do this
      cart = this.controllerFor("cart").get("model")
      item = this.store.createRecord("item", {cart: cart, product: product, cents: product.get("cents"), quantity: 1});
      cart.get("items").then(function (items) {
        items.pushObject(item)
      })
      this.transitionTo("cart")
    }
  },
  setupController: function (controller, model) {
    // I have to set the controllers model for a model that I want to use
    // in the setup. Then I can call that controllers model in an action.
    this.controllerFor("cart").set("model", this.store.find("cart", 1));
    controller.set("model", model)
  },
  model: function (params) {
    return this.store.find("product", params.product_id);
  }
})

