App.ProductRoute = Ember.Route.extend({
  actions: {
    addToCart: function (a) {
      cart = this.controllerFor("cart").get("model")
      cart.get("items").pushObject(a)
      this.transitionTo("cart")
    }
  },
  model: function (params) {
    return this.store.find("product", params.product_id);
  }
})

