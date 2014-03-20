App.ProductEditRoute = Ember.Route.extend({
  actions: {
    saveProduct: function (product) {
      product.save();
      alert('Upgrade complete.');
      this.transitionTo('admin');
    },

    deleteProduct: function(product) {
      alert('The robot overlords have long memories. You may rue this day.')
      product.deleteRecord();
      product.save();
      this.transitionTo('admin');
    }
  },
  model: function (params) {
    return this.store.find("product", params.product_id);
  }
})