App.ProductRoute = Ember.Route.extend({
  actions: {
    addToCart: function(product) {
      store = this.store
      store.find("cart", 1).then(function (cart){

        var item = store.createRecord("item", {
          cart: cart,
          quantity: 1,
          item_price: product.get("price"),
          product: product
        })
        // this code is broken and I don't get why!

        // cart.get("items").then(function(items){
        //   if (items.contains(item)){
        //     item.save;
        //     items.pushObject(item);
        //   }
        //   else{
        //     var cart_item = items.filterBy('product', product);
        //     cart_item.quantity = cart_item.quantity + 1;
        //     cart_item.save;
        //   }
        // })
        cart.get("items").then(function(items){
          item.save();
          items.pushObject(item)
        })
      });
      this.transitionTo("cart")
    }
  },

  model: function (params) {
    return this.store.find("product", params.product_id);
  }
})