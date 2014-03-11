App.ProductRoute = Ember.Route.extend({
  actions: {
    addToCart: function(product) {
      console.log("I got this product " + product);
      console.log("The cart is " + this.store.find("cart", 1));
      var ci = this.store.createRecord('item', {
        productId: product.id,
        cartId: 1,
        quantity: 1
      });
      console.log("the item is " + ci);
    }
  },

  model: function (params) {
    return this.store.find("product", params.product_id);
  }
})