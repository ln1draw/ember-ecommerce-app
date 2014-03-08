App.ProductRoute = Ember.Route.extend({
  actions: {
    addToCart: function (product) {
      cart = this.controllerFor("cart").get("model")
      cart.get("items").pushObject(product)
      this.transitionTo("cart")
    }
  },
  model: function (params) {
    return this.store.find("product", params.product_id);
  }
})

