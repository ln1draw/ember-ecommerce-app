App.ApplicationRoute = Ember.Route.extend({

  model: function(){
    if (typeof(localStorage.cartId) === "undefined"){
      var cart = this.store.createRecord("cart");
      return cart.save().then(function(cartObject){
        localStorage.cartId = cartObject.get('id');
        return cartObject;
      });
    } else {
      return this.store.find('cart', localStorage.cartId);
    }
  }
});
