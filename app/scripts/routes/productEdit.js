App.ProductNewRoute = Ember.Route.extend({
  actions: {
    saveProduct: function (product) {
      product.save();
    }
  },
  model: function (params) {
    return this.store.find("product", params.product_id);
  }
})