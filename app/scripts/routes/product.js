App.ProductRoute = Ember.Route.extend({
  actions: {
    addToCart: function(product) {
      store = this.store
      store.find("cart", 1).then(function (cart){
        var item = store.createRecord("item", {
          cart: cart,
          quantity: 1,
          price: product.get("price"),
          product: product
        })
        cart.get("items").then(function(items){
          items.pushObject(item);
        });
        item.save
      });
      this.transitionTo("cart")
    }
  },

  model: function (params) {
    return this.store.find("product", params.product_id);
  }
})