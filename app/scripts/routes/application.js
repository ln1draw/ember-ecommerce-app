App.ApplicationRoute = Ember.Route.extend({
  // beforeModel: function(){
  //   if (typeof(localStorage.cartId) === "undefined"){
  //     var cart = this.store.createRecord("cart");
  //     cart.save();
  //     localStorage.cartId = cart.get("id");
  //   }
  // }
  // model: function(){
  //   return this.store.find("cart", localStorage.cartId);
  // }

  // before model wasn't firing before the model, so I added the promise object below

  model: function(){
    if (typeof(localStorage.cartId) === "undefined"){
      var cart = this.store.createRecord("cart");
      cart.save();
      // added .then to get the return to happen after the cart has been created
      localStorage.cartId = cart.get("id").then(function(){
      return  this.store.find('cart', localStorage.cartId);
    })
    }
  }
});
