App.CartRoute = Ember.Route.extend({
  actions: {
    more: function(item) {
      item.incrementProperty('quantity');
      item.save();
    },

    less: function(item) {
      this.store.find("cart", localStorage.cartId).then(function (cart){
        if (item.get('quantity') > 1){

          item.decrementProperty('quantity');
          item.save();
        } else {
          cart.get("items").then(function(items){
            items.removeObject(item);
            item.deleteRecord();
            item.save();
          });
        }
      });
    },

    remove: function(item) {
      this.store.find("cart", localStorage.cartId).then(function (cart){
        cart.get("items").then(function(items){
          items.removeObject(item);
          item.deleteRecord();
          item.save();
        })
      })
    },
  },

  model: function(){
    return this.store.find("cart", localStorage.cartId);
  }
});