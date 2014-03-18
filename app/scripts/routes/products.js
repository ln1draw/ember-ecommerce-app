App.ProductsRoute = Ember.Route.extend({
  model: function () {
    return this.store.find("product") 
  },
  setupController: function(controller, model){
    var that = this
    that.store.find("cart", localStorage.cartId).then(function(cart){
      that.controllerFor('cart').set('model', cart);
    });
    controller.set('model', model);
  }
})