App.ItemRoute = Ember.Route.extend({
  actions: {
    addToCart: function(item) {
      console.log("I got this item " + item);
      console.log("The cart is " + this.store.find("cart", 1));
      var ci = this.store.createRecord('cartitem', {
        itemId: params.item_id,
        cartId: 1,
        quantity: 1
      });
      return ci;
      console.log(ci);
    }
  },

  model: function (params) {
    return this.store.find("item", params.item_id);
  }
})