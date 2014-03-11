App.CartRoute = Ember.Route.extend({
  model: function(cart){
    // currently hard-coded in and needs to be fixed
    return this.store.find("cart", 1);
  }
});