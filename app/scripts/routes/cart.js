App.CartRoute = Ember.Route.extend({
  renderTemplate: function() {
    return this.store.find("cart")
    this.render({ outlet: 'cart' });
  },
  actions: {
    showCart: function() {
      
    }
  },
  model: function(cart){
    // currently hard-coded in and needs to be fixed
    return this.store.find("cart", 1);
  }
});