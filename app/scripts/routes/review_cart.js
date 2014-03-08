App.ReviewCartRoute = Ember.Route.extend({
  model: function () {
    var cart = this.store.find("cart", 1);
    return cart;
  }
})
