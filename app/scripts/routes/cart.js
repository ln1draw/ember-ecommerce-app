App.CartRoute = Ember.Route.extend({
  actions: {
    more: function(item) {
      item.incrementProperty('quantity');
      item.save();
    },

    less: function(item) {
      this.store.find("cart").then(function (cart){
        if (item.get('quantity') > 1){
          item.decrementProperty('quantity').then(function (cart){
            item.save();
          })
        } else {
          cart.get("items").then(function(items){
            items.removeObject(item);
          });
          item.deleteRecord();
        }
      });
    },

    remove: function(item) {
      this.store.find("cart").then(function (cart){
        cart.get("items").then(function(items){
          items.removeObject(item);
        })
      })
    },
  },

  model: function(){
    return this.store.find("cart", localStorage.cartId);
  }
});