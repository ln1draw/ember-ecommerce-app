App.CartRoute = Ember.Route.extend({
  model: function(){
    // currently hard-coded in and needs to be fixed
    return this.store.find("cart", 1);
    this.render('cart', {   // the template to render
      into: 'products',                // the route to render into
      outlet: 'cart',              // the name of the outlet in the route's template
      controller: 'cart'        // the controller to use for the template
    });
  }
});