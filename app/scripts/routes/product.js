App.ProductRoute = Ember.Route.extend({
  needs: ["application"],
  actions: {
    addToCart: function (product) {
      debugger;
      cart = this.controllerFor("cart").get("model")
      item = this.store.createRecord("item", {cart: cart, product: product})
      cart.get("items").pushObject(item)
      this.transitionTo("cart")
    }
  },
  model: function (params) {
    return this.store.find("product", params.product_id);
  }
})

