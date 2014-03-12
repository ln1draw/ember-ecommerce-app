App.CartRoute = Ember.Route.extend({
  model: function(cart){
    // currently hard-coded in and needs to be fixed
    this.render('cart', {   // the template to render
      into: 'home',                // the route to render into
      outlet: 'cart',              // the name of the outlet in the route's template
      controller: 'cart'        // the controller to use for the template
    });
    console.log('ran the code')
  }
});