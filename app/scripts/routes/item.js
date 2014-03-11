App.ItemRoute = Ember.Route.extend({
  actions: {
    addToCart: function(item) {
      console.log("I got this item " + item);
      console.log("The cart is " + this.store.find("cart", 1))
    }
  },
  model: function (params) {
    return this.store.find("item", params.item_id)
  }
})